---
id: Built-in-Methods
title: Built-in Methods
---

import Badget from '@site/src/components/Badget';

:::tip
Methods in this page can be accessed by any plugin in `carefree-drawboard` 🎨.
:::

### `filter`

This method can help you pick up the nodes of the specified type.

```python title="cfdraw/plugins/base.py"
def filter(self, nodes: List[INodeData], target: SingleNodeType) -> List[INodeData]:
    return list(filter(lambda node: node.type == target, nodes))
```

#### `nodes`

<Badget type={<>List[<a href="/carefree-drawboard-doc/docs/api-reference/ISocketRequest#inodedata">INodeData</a>]</>} required />

The list of [`INodeData`](/docs/api-reference/ISocketRequest#inodedata) objects to be filtered.

#### `target`

<Badget type={<a href="/carefree-drawboard-doc/docs/api-reference/Types#singlenodetype">SingleNodeType</a>} required />

The type of nodes to be picked up.

#### Returns

<Badget type={<>List[<a href="/carefree-drawboard-doc/docs/api-reference/ISocketRequest#inodedata">INodeData</a>]</>} />

The filtered list of [`INodeData`](/docs/api-reference/ISocketRequest#inodedata) objects.

#### Example

```python title="app.py"
from cfdraw import *

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        ...

    async def process(self, data: ISocketRequest):
        # highlight-start
        path_data = self.filter(data.nodeDataList, SingleNodeType.PATH)[0]
        image_data = self.filter(data.nodeDataList, SingleNodeType.IMAGE)[0]
        # highlight-end
        ...
```

### `load_image`

This method will help you download the image from the given url and return a `PIL.Image` object. It is `async` so you don't have to worry about blocking the main thread.

```python title="cfdraw/plugins/base.py"
async def load_image(self, src: str) -> Image.Image:
    ...
```

:::tip
Don't forget to `await` this method!
:::

#### `src`

<Badget type="str" required />

The url of the image to be downloaded.

#### Returns

<Badget type="Image" />

The downloaded `PIL.Image` object.

#### Example

```python title="app.py"
from cfdraw import *

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        ...

    async def process(self, data: ISocketRequest):
        # highlight-start
        url = data.nodeData.src
        image = await self.load_image(url)
        # highlight-end
        ...
```

### `send_progress`

This method can be used to send the intermediate progress to the frontend.

:::caution
This method is useful only if the corresponding plugin binding can handle the intermediate progress data. Currently, only the following situations are supported:
* You can send `progress` to [IFieldsPlugin](/docs/plugins/IFieldsPlugin), so the progress bar will be updated.
* You can send `textList` to [IChatPlugin](/docs/plugins/IChatPlugin), so the chat will be updated.
:::

```python title="cfdraw/plugins/base.py"
def send_progress(
    self,
    progress: Optional[float] = None,
    *,
    textList: Optional[List[str]] = None,
    imageList: Optional[List[str]] = None,
# highlight-next-line
) -> bool:
    ...
```

As the highlighted line shows, this method returns `bool`, which indicates whether the progress is successfully sent.

:::note
If `False` is returned, it usually means that you should cancel the operation.
:::

#### Examples

* [`IFieldsPlugin`](/docs/plugins/IFieldsPlugin)

```python title="app.py"
from cfdraw import *

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        ...

    async def process(self, data: ISocketRequest):
        # highlight-start
        total = 20
        for j in range(total):
            # if `send_progress` does not execute successfully, break the loop
            if not self.send_progress((j + 1) / total):
                break
            time.sleep(0.25)
        # highlight-end
        ...
```

This example will update the progress bar every 0.25 seconds.

* [`IChatPlugin`](/docs/plugins/IChatPlugin)

```python title="app.py"
from cfdraw import *

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        ...

    async def process(self, data: ISocketRequest):
        ...
        text = lorem.words(20)
        for char in text:
            new_context += char
            # highlight-next-line
            self.send_progress(textList=[new_context])
            time.sleep(0.025)
        return new_context
```

### `send_exception`

This method can be used to send an exception message to the frontend.

```python title="cfdraw/plugins/base.py"
def send_exception(self, message: str) -> bool:
    ...
```

#### `message`

<Badget type="str" required />

The exception message to be sent.

#### Returns

<Badget type="bool" />

Whether the exception message is successfully sent.

### `set_extra_response`

This method can be used to set an extra response key-value pair.

:::info
This method will be useful when you want to record some extra data to the [meta](/docs/user-guides/features#meta) of the new [Node](/docs/reference/terminology#node).
:::

```python title="cfdraw/plugins/base.py"
def set_extra_response(self, key: str, value: Any) -> None:
    ...
```

#### `key`

<Badget type="str" required />

The key of the extra response.

#### `value`

<Badget type="Any" required />

The value of the extra response, should be JSON serializable.

### `set_injection`

This method can be used to set an extra injection.

```python title="cfdraw/plugins/base.py"
def set_injection(self, key: str, node: INodeData) -> None:
    ...
```

#### `key`

<Badget type="str" required />

The key of the injection.

#### `node`

<Badget type={<a href="/carefree-drawboard-doc/docs/api-reference/ISocketRequest#inodedata">INodeData</a>} required />

The node of the injection.

:::info
See [Injections](/docs/reference/terminology#injections) for what an 'injection' is.
:::
