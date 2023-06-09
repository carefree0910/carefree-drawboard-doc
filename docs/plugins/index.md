---
id: index
title: Overview
---

import Video from "@site/src/components/Video";

:::info API reference
* [Built-in Methods](/docs/api-reference/Built-in-Methods)
* [IPluginSettings](/docs/api-reference/IPluginSettings)
* [IPluginInfo](/docs/api-reference/IPluginInfo)
* [ISocketRequest](/docs/api-reference/ISocketRequest)
:::

As mentioned in the [Design Philosophy](/docs/reference/design-philosophy), everything in `carefree-drawboard` 🎨 is a **plugin**, so it will be important to understand how plugins are built / work. In this page, we will cover the **common** parts that every plugin will share, and leave those specific parts to separate pages.

<details>

<summary><strong>How to -</strong></summary>

<h3> Find / Use Plugins? </h3>

In the future, we will implement a built-in marketplace for plugins, so that you can publish / search / download / use them easily. For now, you may need to build your own plugins from scratch. 😣

However, since plugins can be built within one single file, for now you can share your plugins by simply sharing the source code of the plugin file. 😆

And, as we introduced in the [Getting Started](/docs/getting-started), we have a [Register Mechanism](#register-mechanism) for the plugins, so you can include others' plugins without worrying too much - unless you import & register them, no side effects will be caused.

<h3> Publish Plugins? </h3>

As mentioned above, we will implement a built-in marketplace for plugins in the future, so publishing plugins will be very easy. But for now, you may need to share your plugins by:
* Simply sharing the source code of the plugin file.
* Follow the [Contributing](/docs/contributing-guides/contributing) guide and submit a PR.

<h3> Build Plugins? </h3>

That's what this page is mainly about. 😎 Stay tuned!

</details>

## Basic Concepts

A `Plugin` in `carefree-drawboard` 🎨 usually consists of two parts:

* The `plugin button`, which is used to trigger the expansion of the `expand panel`.
* The `expand panel`, which is used for users to interact with the plugin.

:::note
For some special plugins (e.g., `Delete`, `Download`, `Undo`, `Redo`, etc.), the '`expand panel`' will be omitted because user interaction ends with the click of the `plugin button`.
:::

So a typical workflow of a plugin will be:
1. Users click the `plugin button`.
2. The `expand panel` is expanded.
3. Users interact with the `expand panel`, e.g., fill in some input fields.
4. Users click the `Submit` button to send the filled inputs to the backend.
5. The `expand panel` is collapsed, the `plugin button` is showing some progress indicators during the processing (e.g., a progress bar), and the backend will be processing the user inputs.
6. The drawboard 🎨 will be updated once the processing is done.

To make things easier, we extracted the common parts of the plugins into the [Built-in Bindings](#built-in-bindings), so you only need to concern about:

1. What should be the **Styles** of the `plugin button` and the `expand panel`?
2. What should be the **Logics** when the `Submit` button is clicked and the user inputs are sent to the backend?

After all things are done, you or other users can utilize the [Register Mechanism](#register-mechanism) to register the plugins into the drawboard 🎨. Before which, no side effects will be caused.

And in the following sections, we will cover these concepts in detail.

## Inheritance

To utilize the common parts of the plugins, you need to inherit from one of the [Built-in Bindings](#built-in-bindings) (e.g., `IFieldsPlugin`).

```python title="app.py"
from cfdraw import *

# highlight-next-line
class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(...)

    async def process(self, data: ISocketRequest):
        ...
```

:::note
The first import line

```python title="app.py"
from cfdraw import *
```

is a typical import line for every `carefree-drawboard` 🎨 app. It will import all the necessary stuffs for you to build your plugins.
:::

## Styles

In `carefree-drawboard` 🎨, we specify **Styles** in the `settings` property.

```python title="app.py"
from cfdraw import *

class Plugin(IFieldsPlugin):
    # highlight-start
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(...)
    # highlight-end

    async def process(self, data: ISocketRequest):
        ...
```

### `IPluginSettings`

:::info API reference
* [IPluginSettings](/docs/api-reference/IPluginSettings)
:::

As the highlighted lines show, we should return an instance of `IPluginSettings` in the `settings` property.

:::note
We return a class instance instead of a `dict` here because we want to utilize the auto-completion feature of IDEs.
:::

The `IPluginSettings` can be used to specify:
* The **Styles** of the `plugin button` and the `expand panel`.
* The **behaviours** of the `expand panel`, this is specified in a separate class - [`IPluginInfo`](#iplugininfo).

:::note
Although we can also treat '**behaviours**' as '**Styles**', we separate them for better understanding.
:::

#### Example

```python title="app.py"
class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            # highlight-start
            # width of the expanded panel
            w=300,
            # height of the expanded panel
            h=180,
            # tooltip of the plugin
            tooltip="Apply Gaussian Blur to the image",
            # specify that this plugin should only appear when an image is selected
            nodeConstraint=NodeConstraints.IMAGE,
            # specify that this plugin should appear at the right-top of the selected image
            pivot=PivotType.RT,
            # specify that this plugin should 'follow' the selected image when it is dragged / resized
            follow=True,
            # highlight-end
        )
```

:::note
Most properties of the `IPluginSettings` are pretty self-explanatory, while the `nodeConstraint`, `pivot` and `follow` properties are a bit tricky. See [Plugin Positioning](#plugin-positioning) for more details.
:::

### `IPluginInfo`

:::info API reference
* [IPluginInfo](/docs/api-reference/IPluginInfo)
:::

This is where you specify the **behaviours** of the `expand panel`. In reality, we should use one of the [Built-in Bindings](#built-in-bindings) (e.g., `IFieldsPluginInfo`) instead of using the `IPluginInfo` directly.

:::note
We introduce [Built-in Bindings](#built-in-bindings) because every plugin has some common behaviours & some specific behaviours, so we extract the common behaviours into the `IPluginInfo`, while leave the specific behaviours to the [Built-in Bindings](#built-in-bindings).
:::

#### Example

```python title="app.py"
class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            ...,
            # highlight-start
            pluginInfo=IFieldsPluginInfo(
                ...,
                # specify that the plugin should stay expanded even after the users click the 'Submit' button
                closeOnSubmit=False,
                # specify that the plugin should show a toast message after the users click the 'Submit' button
                toastOnSubmit=True,
                # specify the toast message to be shown after the users click the 'Submit' button
                toastMessageOnSubmit="Gaussian Blur applied!",
            ),
            # highlight-end
        )
```

## Logics

In `carefree-drawboard` 🎨, we specify logics in the `process` method.

```python title="app.py"
from cfdraw import *

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(...)

    # highlight-start
    async def process(self, data: ISocketRequest):
        ...
    # highlight-end
```

As you can see, the only argument of the `process` method is `data`, which is an instance of [`ISocketRequest`](/docs/api-reference/ISocketRequest). Generally speaking, it contains the following information:

* User data (e.g., `userId`).
* Data of the user inputs.
* Data of the selecting `Node`(s) on the drawboard 🎨.

So it is enough for most if not every scenario!

### Accessibility

:::info API reference
* [Built-in Methods](/docs/api-reference/Built-in-Methods)
* [ISocketRequest](/docs/api-reference/ISocketRequest)
  * [INodeData](/docs/api-reference/ISocketRequest#inodedata)
:::

However, providing all necessary data is not the end of the story, we also need to make sure that we can utilize the data in a convenient way. For example, for any plugin that requires processing an image, we should be able to get a `PIL.Image` instance as easy as possible.

Therefore, `carefree-drawboard` 🎨 provides a set of [Built-in Methods](/docs/api-reference/Built-in-Methods) to help you out. A typical example is the `load_image` method, which can help you download an image from a url in an `async` way:

```python title="app.py"
from cfdraw import *

class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(...)

    async def process(self, data: ISocketRequest):
        # highlight-start
        url = data.nodeData.src
        image = await self.load_image(url)  # type: PIL.Image
        # highlight-end
        ...
```

## Register Mechanism

:::info API reference
* [register_plugin](/docs/api-reference/Global-Functions#register_plugin)
:::

In `carefree-drawboard` 🎨, every plugin needs to be registered to actually work. Let's say you defined a plugin in the `my_plugin.py` file:

```python title="my_plugin.py"
from cfdraw import *

class MyPlugin(IFieldsPlugin):
    ...
```

Then in your main app file (e.g., `app.py`), you can register it like this:

```python title="app.py"
from cfdraw import *
# highlight-next-line
from my_plugin import MyPlugin

# highlight-next-line
register_plugin("my_plugin")(MyPlugin)
app = App()
```

If there's another plugin called `MyPlugin` as well in another file (e.g., `my_plugin2.py`), and you want to register it as well, you can:

```python title="app.py"
from cfdraw import *
# highlight-next-line
from my_plugin import MyPlugin as MyPlugin1
# highlight-next-line
from my_plugin2 import MyPlugin as MyPlugin2

# highlight-start
# Notice that you need to keep the 'name' you passed to the 
# `register_plugin` function unique across all registered plugins!
register_plugin("my_plugin1")(MyPlugin1)
register_plugin("my_plugin2")(MyPlugin2)
# highlight-end
app = App()
```

:::tip
`carefree-drawboard` 🎨 introduced this register mechanism because it can make the whole system:
* More **decoupled**. You can now define plugins freely without worrying about any side effects.
* More **extensible**. If you want to use plugins implemented by others, you can simply import & register them.
:::

## Reference

### Built-in Bindings

In `carefree-drawboard` 🎨, a Built-in Binding often refers to two things:
* A class for your plugin to inherit from.
* A class which inherits from `IPluginInfo` for you to specify the `pluginInfo` property of `IPluginSettings`.

For example, the most commonly used Built-in Binding is `IFieldsPlugin`, and you should use it like this:

```python title="app.py"
from cfdraw import *

# highlight-next-line
class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            ...,
            # highlight-next-line
            pluginInfo=IFieldsPluginInfo(...),
        )

    async def process(self, data: ISocketRequest):
        ...
```

And here's a table of all the supported Built-in Bindings:

| <div style={{width: "200px"}}>Plugin Base Class</div> | <div style={{width: "200px"}}>`IFieldsInfo` inheritor</div> |
| :---: | :---: |
| [`IFieldsPlugin`](/docs/plugins/IFieldsPlugin) | [`IFieldsPluginInfo`](/docs/api-reference/IFieldsPluginInfo) |
| [`IChatPlugin`](/docs/plugins/IChatPlugin) | [`IChatPluginInfo`](/docs/api-reference/IChatPluginInfo) |
| [`IPluginGroup`](/docs/plugins/IPluginGroup) | [`IPluginGroupInfo`](/docs/api-reference/IPluginGroupInfo) |

<details>

<summary>You may ask: why do we need a <strong>Base Class</strong> for the plugin?</summary>

In fact, **Base Class** is no more than an `ISocketPlugin` with a pre-defined `type` property. For example, here's the complete code of `IFieldsPlugin`:

```python showLineNumbers title="cfdraw/plugins/bindings.py"
class IFieldsPlugin(ISocketPlugin):
    @property
    def type(self) -> PluginType:
        return PluginType.FIELDS
```

So with a **Base Class**, you don't need to speciy the `type` property anymore. Now the question becomes: why do we need a `type` property? The answer is: we need it in case [Middleware](/docs/reference/middleware) wants to subscribe for only a / some specific type(s) of plugins. For example, the `TimerMiddleware` will only subscribe for plugins that are inherited from `IFieldsPlugin`:

```python title="cfdraw/plugins/middlewares/timer.py"
class TimerMiddleware(IMiddleware):
    ...

    # highlight-start
    @property
    def subscriptions(self) -> List[PluginType]:
        return [PluginType.FIELDS]
    # highlight-end
```

```python title="cfdraw/plugins/bindings.py"
class IFieldsPlugin(ISocketPlugin):
    # highlight-start
    @property
    def type(self) -> PluginType:
        return PluginType.FIELDS
    # highlight-end
```

</details>

### Plugin Positioning

:::info API reference
* [nodeConstraint](/docs/api-reference/IPluginSettings#nodeconstraint)
* [nodeConstraintRules](/docs/api-reference/IPluginSettings#nodeconstraintrules)
* [nodeConstraintValidator](/docs/api-reference/IPluginSettings#nodeconstraintvalidator)
* [follow](/docs/api-reference/IPluginSettings#follow)
* [pivot](/docs/api-reference/IPluginSettings#pivot)
:::

The positioning of the plugins in `carefree-drawboard` 🎨 is relatively simple. We only need to keep three things in mind:

1. Should the plugin always be displayed, or should the plugin be displayed if and only if certain [`Node`](/docs/reference/terminology#node)(s) are selected?
2. Should the plugin '**follow**' the selected [`Node`](/docs/reference/terminology#node)(s), or should it stick at the edge of the drawboard 🎨?
3. Which [`Pivot`](/docs/reference/terminology#pivot) should we place our plugin?

Let's show some examples below to demonstrate the ideas!

---

```python
dict(
    nodeConstraint=NodeConstraints.IMAGE,
    follow=True,
    pivot=PivotType.RT,
)
```

* The plugin will be displayed if and only if the `ImageNode` is selected.
* The plugin will follow the `rt` (**r**ight **t**op) corner of (the bounding box of) the `ImageNode`.

<Video url="https://user-images.githubusercontent.com/15677328/231755350-0e805ea4-2977-43ce-9332-6e0cb5528f93.mp4" />

---

```python
dict(
    nodeConstraint=NodeConstraints.NONE,
    follow=False,
    pivot=PivotType.RT,
)
```

* The plugin will always be displayed.
* The plugin will be placed at the `rt` (**r**ight **t**op) corner of the entire drawboard 🎨.

<Video url="https://user-images.githubusercontent.com/15677328/231756113-8f812860-c7af-44da-9afd-17b5f469f7f6.mp4" />

---

```python
dict(
    nodeConstraintRules=NodeConstraintRules(
        exactly=[NodeConstraints.IMAGE, NodeConstraints.PATH]
    )
    follow=True,
    pivot=PivotType.RT,
)
```

* The plugin will be displayed if and only if (exactly) an `ImageNode` & a `PathNode` are selected.
* The plugin will follow the `rt` (**r**ight **t**op) corner of (the bounding box of) the selected `Node`s.

<Video url="https://user-images.githubusercontent.com/15677328/235454904-65a383e8-ef7c-46f8-9e94-fb576b762222.mp4" />

---
