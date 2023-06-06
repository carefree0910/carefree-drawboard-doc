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

```python title="cfdraw/__init__.py"
register_plugin = PluginFactory.register
```

```python title="cfdraw/plugins/factory.py"
class PluginFactory:
    @classmethod
    def register(cls, identifier: str) -> Callable[[TPlugin], TPlugin]:
        ...
```

This method is used to register a plugin.

### `identifier`

<Badget type="str" required />

The identifier of the plugin.
* It should be unique across all registered plugins.
* It is recommended to keep it self-explanatory.

#### Example

```python title="plugins.py"
from cfdraw import *

class GrayScalePlugin(IFieldsPlugin):
    ...
```

```python title="app.py"
from cfdraw import *
from plugins import GrayScalePlugin

register_plugin("gray_scale")(GrayScalePlugin)
app = App()
```
