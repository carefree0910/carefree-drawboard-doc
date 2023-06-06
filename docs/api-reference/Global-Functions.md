---
id: Global-Functions
title: Global Functions
---

import Badget from '@site/src/components/Badget';

:::tip
Functions in this page can be directly used in your code after

```python
from cfdraw import *
```

is added.
:::

## `register_plugin`

This method is used to register a plugin.

```python title="cfdraw/__init__.py"
register_plugin = PluginFactory.register
```

```python title="cfdraw/plugins/factory.py"
class PluginFactory:
    @classmethod
    def register(cls, identifier: str) -> Callable[[TPlugin], TPlugin]:
        ...
```

### `identifier`

<Badget type="str" required />

The identifier of the plugin.
* It should be unique across all registered plugins.
* It is recommended to keep it self-explanatory.

### Returns

<Badget type="Callable[[TPlugin], TPlugin]" />

The decorator function to register the plugin.

:::info
However, to make your code more decoupled and extensible, it is preferred to use a 'chained' way to register the plugin, see [Example](#example) below.
:::

### Example

```python title="plugins.py"
from cfdraw import *

class GrayScalePlugin(IFieldsPlugin):
    ...
```

```python title="app.py"
from cfdraw import *
from plugins import GrayScalePlugin

# highlight-next-line
register_plugin("gray_scale")(GrayScalePlugin)
app = App()
```

## `cache_resource`

This function is a decorator which helps you achieve the Singleton pattern. It is commonly used to decorate the initialization of resources that should be initialized only once, such as:
* AI models.
* Database connections.
* SDK / API / HTTP clients.
* ...

```python title="cfdraw/utils/cache.py"
def cache_resource(fn: callable) -> callable:
    ...
```

### `fn`

<Badget type="callable" required />

The function to be cached.

### Returns

<Badget type="callable" />

The decorated function, which can cache the result of `fn` and return it directly if `fn` is called again (with the same input arguments).

### Examples

#### For AI models

* Initialization

```python title="app.py"
from cfdraw import *


# highlight-next-line
@cache_resource
def get_model():
    import torch
    from diffusers import StableDiffusionPipeline
    from diffusers import StableDiffusionImg2ImgPipeline

    tag = "runwayml/stable-diffusion-v1-5"
    m = StableDiffusionPipeline.from_pretrained(tag, torch_dtype=torch.float16)
    m.to("cuda")
    return m
```

* Usage

```python title="app.py"
class TextToImagePlugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        ...

    async def process(self, data: ISocketRequest):
        # highlight-next-line
        model = get_model()
        # use model to generate images below
        ...
```

#### For HTTP client

* Initialization

```python title="app.py"
from cfdraw import *


# highlight-next-line
@cache_resource
def get_client():
    SECRET_ID = os.getenv("SECRET_ID")
    SECRET_KEY = os.getenv("SECRET_KEY")
    client = YourHttpClient(SECRET_ID, SECRET_KEY)
    return client
```

* Usage

```python title="app.py"
class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        ...

    async def process(self, data: ISocketRequest):
        # highlight-next-line
        client = get_client()
        # use client to send requests below
        ...
```

### Source Codes

It may help you to understand `cache_resource` better by reading its source codes.

```python
from typing import Any
from typing import Dict
from typing import Generic
from typing import TypeVar
from typing import Protocol


TResource = TypeVar("TResource", bound="Any", covariant=True)


class IResourceFn(Generic[TResource], Protocol):
    def __call__(self, *args: Any, **kwargs: Any) -> TResource:
        pass


def cache_resource(fn: IResourceFn[TResource]) -> IResourceFn[TResource]:
    class Cache:
        def __init__(self) -> None:
            self._cache: Dict[Any, Any] = {}

        def __call__(self, *args: Any, **kwargs: Any) -> TResource:
            key = (args, tuple(kwargs.items()))
            cached = self._cache.get(key)
            if cached is None:
                cached = self._cache[key] = fn(*args, **kwargs)
            return self._cache[key]

    return Cache()
```
