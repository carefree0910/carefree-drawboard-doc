---
id: IFieldsPlugin
title: IFieldsPlugin
---

:::info API reference
* [IPluginInfo](/docs/api-reference/IPluginInfo)
  * [IFieldsPluginInfo](/docs/api-reference/IPluginInfo#ifieldsplugininfo)
:::

Currently, the most commonly used plugin binding should be the `IFieldsPlugin`. It assumes that:

* After users click it, it pops up a panel (or a modal, depends on the [`useModal`](/docs/api-reference/IPluginSettings#usemodal) argument) with several input fields.
* Users only need to fill in the input fields, click the `Submit` button, and wait for the results.
* Each input field should be one of the pre-defined fields, so we can render some nice components for you with just a few setups.

:::note
This paradigm is already powerful enough to handle very complicated applications such as our [Live Demo](https://drawboard-demo.nolibox.com/)!
:::

Under these assumptions, there are only three specific properties for `IFieldsPlugin`, and only one of them (`definitions`) is required:

```python title="app.py"
@property
def settings(self) -> IPluginSettings:
    return IPluginSettings(
        pluginInfo=IFieldsPluginInfo(
            # highlight-start
            header="My Fancy Header",
            definitions=dict(...),
            numColumns=2,
            # highlight-end
        ),
    )
```

:::tip
A typical workflow of building an `IFieldsPlugin` is:
1. Gather all the required parameters of your API, pick the ones that you want to expose to the users.
2. Define the `definitions` based on these parameters' names and types.
3. In the `process` method, use `data.extraData` to get the user inputs, and call your API with them.
:::

:::info
We've provided a [test_fields.py](https://github.com/carefree0910/carefree-drawboard/blob/dev/tests/test_fields.py) file in the `tests` folder, which can well demonstrate the potentials of `IFieldsPlugin`.
:::

## Example

In this section, we will introduce a pseudo example to demonstrate how to build an `IFieldsPlugin`.

Let's suppose we have an API, `FancyMultimodalFn`, which receives the following parameters:
* `text` - `str`
* `image` - `str` (url of the image)
* `mask` - `str` (url of the image)
* `strength` - `float`, and should be within `[0.0, 1.0]`

Then we will have two choices:
* Make the plugin more 'standalone'.
* Make the plugin more 'engaged'.

We'll show you how to build both of them.

### Standalone Version

A 'standalone' plugin means that it doesn't need to interact with the drawboard 🎨, and every parameters should be filled by the user. In this case, we should define the `definitions` to cover all the parameters:

```python showLineNumbers title="app.py"
from cfdraw import *

definitions = dict(
    # highlight-start
    text=ITextField(),
    image=IImageField(),
    mask=IImageField(),
    strength=INumberField(default=0.0, min=0.0, max=1.0, step=0.01),
    # highlight-end
)

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            ...,
            # highlight-next-line
            pluginInfo=IFieldsPluginInfo(definitions=definitions),
        )

    async def process(self, data: ISocketRequest):
        # highlight-next-line
        return FancyMultimodalFn(**data.extraData)
```

:::tip
Notice that at L19, we directly call our API (`FancyMultimodalFn`) with `**data.extraData`. This is typical for 'standalone' `IFieldsPlugin`s, since the `definitions` is self-contained.
:::

### Engaged Version

But what if we want to make the plugin more 'engaged'? For example, we may want to use the current selecting image in the drawboard 🎨 as the `image` parameter. In this case, we need to do two things.

First, ensure that this plugin only appears when the user has selected an image. We can do this by setting the [`nodeConstraint`](/docs/api-reference/IPluginSettings#nodeconstraint) to `NodeConstraints.IMAGE`:

```python title="app.py"
from cfdraw import *

definitions = dict(
    text=ITextField(),
    image=IImageField(),
    mask=IImageField(),
    strength=INumberField(default=0.0, min=0.0, max=1.0, step=0.01),
)

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            ...,
            # highlight-next-line
            nodeConstraint=NodeConstraints.IMAGE,
            pluginInfo=IFieldsPluginInfo(definitions=definitions),
        )

    async def process(self, data: ISocketRequest):
        return FancyMultimodalFn(**data.extraData)
```

Second, remove the `image` definition from the `definitions`, and dynamically set `image` to the url of the current selecting image:

```python title="app.py"
from cfdraw import *

definitions = dict(
    text=ITextField(),
    # highlight-next-line
    # this line is removed!
    mask=IImageField(),
    strength=INumberField(default=0.0, min=0.0, max=1.0, step=0.01),
)

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            ...,
            nodeConstraint=NodeConstraints.IMAGE,
            pluginInfo=IFieldsPluginInfo(definitions=definitions),
        )

    async def process(self, data: ISocketRequest):
        # highlight-start
        kw = data.extraData
        kw["image"] = data.nodeData.src
        return FancyMultimodalFn(**kw)
        # highlight-end
```

### Advanced Version

Now comes the hard part: what if we want to use something on the drawboard 🎨 as the `mask` parameter too? This is complex because now we need to fetch two stuffs (`image` & `mask`) from the drawboard 🎨.

Similarly, we need to do two things. First, we need to ensure that this plugin only appears when the user has selected an image and a mask simultaneously. We can do this by setting the [`nodeConstraintRules`](/docs/api-reference/IPluginSettings#nodeconstraintrules):

```python showLineNumbers title="app.py"
from cfdraw import *

definitions = dict(
    text=ITextField(),
    image=IImageField(),
    mask=IImageField(),
    strength=INumberField(default=0.0, min=0.0, max=1.0, step=0.01),
)

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            ...,
            # highlight-start
            nodeConstraintRules=NodeConstraintRules(
                exactly=[NodeConstraints.IMAGE, NodeConstraints.PATH]
            ),
            # highlight-end
            pluginInfo=IFieldsPluginInfo(definitions=definitions),
        )

    async def process(self, data: ISocketRequest):
        return FancyMultimodalFn(**data.extraData)
```

:::tip
In `carefree-drawboard` 🎨, we often use the [Brush](/docs/user-guides/features#sketch) plugin - which produces `PathNode` - to draw masks. That's why we want 'exactly' one `ImageNode` and one `PathNode`, as defined at L16.
:::

Second, remove `image` & `mask` from the `definitions`, and dynamically set `image` and `mask` to the urls of the current selecting image and mask:

```python showLineNumbers title="app.py"
from cfdraw import *

definitions = dict(
    text=ITextField(),
    # highlight-start
    # this line is removed!
    # this line is removed!
    # highlight-end
    strength=INumberField(default=0.0, min=0.0, max=1.0, step=0.01),
)

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            ...,
            nodeConstraintRules=NodeConstraintRules(
                exactly=[NodeConstraints.IMAGE, NodeConstraints.PATH]
            ),
            pluginInfo=IFieldsPluginInfo(definitions=definitions),
        )

    async def process(self, data: ISocketRequest):
        # highlight-start
        kw = data.extraData
        kw["image"] = self.filter(data.nodeDataList, SingleNodeType.IMAGE)[0].src
        kw["mask"] = self.filter(data.nodeDataList, SingleNodeType.PATH)[0].src
        return FancyMultimodalFn(**kw)
        # highlight-end
```

:::info
Check [here](/docs/api-reference/Built-in-Methods#filter) for the API reference of the built-in method `filter` used at L23 & L24.
:::

## Summary

Maybe you have already figured out - this pseudo example is actually a starter for the inpainting algorithms! In fact, many of the codes shown above can be found at our [Stable Diffusion Inpainting](https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion_inpainting) example.

To our own experience, `IFieldsPlugin` is powerful & convenient enough for building complex, business ready web apps (e.g., the [Live Demo](https://drawboard-demo.nolibox.com/)) fast & easy. We hope you can enjoy it too!
