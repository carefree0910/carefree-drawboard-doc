---
id: index
title: Introduction
---

import Video from "@site/src/components/Video";

`carefree-drawboard` 🎨 is a **full-stack** Python framework for building **Infinite Drawboard** based web apps.

## Motivation

`carefree-drawboard` 🎨 was created with the following goals:

* **Pure Python**

  Python is all you need.

* **Easy to Learn**

  Everything are plugins, everything is declarative. Fully decoupled, fully extensible.

* **Business Ready**

  🎨 is designed to be used in real world projects. **Infinite Drawboard** is capable of handling (almost) every complex scenario.

* **Modern AI Oriented**

  🎨 is designed to work with modern AI technologies, such as Stable Diffusion, GPTs, and so on.

:::info
That's why we also treat `carefree-drawboard` 🎨 as an 'AI operation system'. See [Brainstorm](/docs/reference/brainstorm#the-ai-operation-system) for more details.
:::

## Your first 🎨 App

Here's a simple `GaussianBlur` plugin that covers the basics of `carefree-drawboard` 🎨:

<Video url="https://user-images.githubusercontent.com/15677328/234529497-8d7f5b61-9154-4211-8d99-ec09fca0dc2d.mp4" />

Here's what this plugin does:

* The plugin appears at the `rt` (**r**ight **t**op) corner of the selected image, and will 'follow' it if you drag it around.
* When you hover over the plugin, it will show a tooltip saying 'Apply Gaussian Blur to the image'.
* When you click the plugin, it will pop up a panel asking you to specify the size of the Gaussian kernel.
* When you click the 'Submit' button in the panel, it will apply the Gaussian blur to the image, and place the blurred image at the center of the drawboard 🎨.

:::note
You will need to upload an image to see this plugin. You can do this either by dragging it directly to the drawboard 🎨, or by clicking the `Plus` button at the `rt` (**r**ight **t**op) corner and click the `Upload Image` icon.
:::

And this is the complete code to build the plugin, you may create a file called `app.py` and paste the codes into it:

```python showLineNumbers title="app.py"
from PIL import Image
from PIL import ImageFilter
from cfdraw import *

# This will apply Gaussian Blur to the image
class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            w=300,
            h=180,
            tooltip="Apply Gaussian Blur to the image",
            nodeConstraint=NodeConstraints.IMAGE,
            pivot=PivotType.RT,
            follow=True,
            pluginInfo=IFieldsPluginInfo(
                definitions=dict(
                    size=INumberField(
                        default=3,
                        min=1,
                        max=10,
                        step=1,
                        isInt=True,
                        label="Size",
                    )
                ),
            ),
        )

    async def process(self, data: ISocketRequest) -> Image.Image:
        from PIL import Image
        from PIL import ImageFilter

        image = await self.load_image(data.nodeData.src)
        return image.filter(ImageFilter.GaussianBlur(data.extraData["size"]))


register_plugin("blur")(Plugin)
app = App()
```

<details>
<summary>You can also use our scaffold CLI to build it:</summary>

Create a folder wherever you like, get into it, and run

```bash
cfdraw init
```

This command will write two files to your folder - `app.py` & `cfconfig.py`, and the `app.py` will contain exactly the same codes as above.

</details>

Let's break this down to see what's going on under the hood.

## Import

```python title="app.py"
from PIL import Image
from PIL import ImageFilter
# highlight-next-line
from cfdraw import *
```

The highlighted line is a typical import line for every `carefree-drawboard` 🎨 app. It will import all the necessary stuffs for you to build your plugins.

## Inheritance

```python title="app.py"
# highlight-next-line
class Plugin(IFieldsPlugin):
    ...
```

`IFieldsPlugin` is the most commonly used base class for building plugins. In most cases, you can just inherit from it and go on.

:::info
* See [Plugins](/docs/plugins) for an overview of the plugin system.
* See [IFieldsPlugin](/docs/plugins/IFieldsPlugin) for more details about `IFieldsPlugin`.
:::

## Styles

In `carefree-drawboard` 🎨, we specify styles in the `settings` property.

:::tip
Comments with `*` at the beginning means they will be explained later.
:::

```python title="app.py"
@property
# highlight-next-line
def settings(self) -> IPluginSettings:
    # highlight-next-line
    return IPluginSettings(
        # width of the expanded panel
        w=300,
        # height of the expanded panel
        h=180,
        # tooltip of the plugin
        tooltip="Apply Gaussian Blur to the image",
        # * controls when this plugin should be displayed
        nodeConstraint=NodeConstraints.IMAGE,
        # * controls whether the plugin should 'follow' the selecting node
        follow=True,
        # * controls where this plugin should be displayed
        pivot=PivotType.RT,
        # * this is where you specify the behaviours of the expanded panel
        pluginInfo=IFieldsPluginInfo(
            # * this is a `dict` that defines the input fields
            definitions=dict(
                size=INumberField(
                    default=3,
                    min=1,
                    max=10,
                    step=1,
                    isInt=True,
                    label="Size",
                )
            ),
        ),
    )
```

:::info
As the highlighted lines show, we should return an instance of [IPluginSettings](/docs/plugins#ipluginsettings) in the `settings` property. We return a class instance instead of a `dict` here because we want to utilize the auto-completion feature of IDEs.
:::

### Plugin Positioning

Since everything in `carefree-drawboard` 🎨 is a plugin, we need a way to control when / where they should be displayed. In this example, we specified:
* `nodeConstraint=NodeConstraints.IMAGE`: this plugin will only occur when an `ImageNode` is selected.
* `follow=True`: this plugin will 'follow' the selecting node when you drag the selecting node around.
* `pivot=PivotType.RT`: this plugin will be displayed at the `rt` (**r**ight **t**op) corner of the selecting node.

:::info
See [Plugin Positioning](/docs/plugins#plugin-positioning) for more details.
:::

### Plugin Behaviours

Apart from styles, we can also specify some behaviours of the plugin with the `pluginInfo` property of `settings`.

:::note
Although we can also treat 'behaviours' as 'styles', we separate them for better understanding.
:::

Each plugin has some **common** properties & **specific** properties to be set. In this example, we specified:

```python title="app.py"
definitions=dict(...)
```

This is the **specific** property that `IFieldsPlugin` requires, it is a `dict` that defines the input fields.

And, by specifying:

```python title="app.py"
size=INumberField(...)
```

in the `dict`, it means that we want to have an input field named `size`, and it is an `INumberField` instance (which means the field should accept a number as its value).

:::info
* See [IPluginInfo](/docs/plugins#iplugininfo) for more details on the common properties.
* See [here](/docs/plugins/IFieldsPlugin) for more details on `IFieldsPlugin`.
:::

### Reference

<details>

<summary>Apart from these, you may want to assign a nice-looking icon to your plugin.</summary>

We can achieve this by specifying `src` property of the `IPluginSettings`:

```python title="app.py"
@property
def settings(self) -> IPluginSettings:
    return IPluginSettings(
        src="...",
        ...
```

And the `src` should be the url of the desired image/svg.

> If you don't have one in hand, you may try using [this one](https://ailab-huawei-cdn.nolibox.com/upload/images/c60613dcaf514975a211a75535a5b81b.png).

After saving the modification, you should be able to see the icon of your plugin changes, cool!

</details>

## Logics

In `carefree-drawboard` 🎨, we specify logics in the `process` method.

```python title="app.py"
async def process(self, data: ISocketRequest) -> Image.Image:
    url = data.nodeData.src
    image = await self.load_image(url)
    kernel_size = data.extraData["size"]
    return image.filter(ImageFilter.GaussianBlur(kernel_size))
```

It is simple - only four lines of codes, but they contain pretty much information. Let's break it down.

### `nodeData`

Let's look at `nodeData` first:

```python title="app.py"
async def process(self, data: ISocketRequest) -> Image.Image:
    # highlight-next-line
    url = data.nodeData.src
    image = await self.load_image(url)
    kernel_size = data.extraData["size"]
    return image.filter(ImageFilter.GaussianBlur(kernel_size))
```

By using the `nodeData.src` property of `ISocketRequest`, we implicitly assume that:

* There's only one selecting node.
* The selecting node is an `ImageNode`.

If these assumptions are met, the `nodeData.src` will be the url of the selecting image.

:::info
There are **MANY** handy properties in `nodeData`, check [INodeData](/docs/api-reference/ISocketRequest#inodedata) for the API reference.
:::

<details>

<summary>Along with <code>nodeData</code>, there are three common properties in <code>ISocketRequest</code> that you may need:</summary>

* `nodeData`, it is an [INodeData](/docs/api-reference/ISocketRequest#inodedata) instance.
    * If no nodes are selected, this property will be empty.
    * If multiple nodes are selected, this property will be empty and please use `nodeDataList` instead.
* `nodeDataList`, it is a list of [INodeData](/docs/api-reference/ISocketRequest#inodedata) instance.
    * If no nodes are selected, this property will be empty.
    * If only one node is selected, this property will be empty and please use `nodeData` instead.
* `extraData`, it is a `dict` that aligns to the `definitions` property defined above.

</details>

### `loadImage`

Then, let's look at the built-in `load_image` method:

```python title="app.py"
async def process(self, data: ISocketRequest) -> Image.Image:
    url = data.nodeData.src
    # highlight-next-line
    image = await self.load_image(url)
    kernel_size = data.extraData["size"]
    return image.filter(ImageFilter.GaussianBlur(kernel_size))
```

It is pretty straightforward - downloads the image from the given url and returns a `PIL.Image` instance.

:::note
Notice that this method is `async`, which makes the whole system more responsive (i.e., other requests can still be processed while downloading the image).
:::

:::info
There are various built-in methods for different purposes, check [Built-in Methods](/docs/api-reference/Built-in-Methods) for the API reference.
:::

### `extraData`

Since we defined

```python title="app.py"
definitions=dict(
    size=INumberField(...)
)
```

the `extraData` will be `{"size": ...}`. Therefore, this line:

```python title="app.py"
async def process(self, data: ISocketRequest) -> Image.Image:
    url = data.nodeData.src
    image = await self.load_image(url)
    # highlight-next-line
    kernel_size = data.extraData["size"]
    return image.filter(ImageFilter.GaussianBlur(kernel_size))
```

can extract the user-given `size` value from `extraData`, and treat it as the `kernel_size` of `ImageFilter.GaussianBlur`.

### Return

As these two lines indicate:

```python title="app.py"
# highlight-next-line
async def process(self, data: ISocketRequest) -> Image.Image:
    url = data.nodeData.src
    image = await self.load_image(url)
    kernel_size = data.extraData["size"]
    # highlight-next-line
    return image.filter(ImageFilter.GaussianBlur(kernel_size))
```

The `process` method can directly return a `PIL.Image` instance. This is because some `Middleware` in `carefree-drawboard` 🎨 will convert it to the data structure we actually need.

:::tip
In fact, the `process` method can directly return an `str`, a `PIL.Image`, or even a `list` of them.
:::

## Register

In `carefree-drawboard` 🎨, plugins need to be registered to take effect. We can use `register_plugin` to register a plugin easily:

```python title="app.py"
register_plugin("blur")(Plugin)
```

:::info
The register mechanism is important to make the whole system:
* More **decoupled**. You can now build plugins freely without worrying about any side effects.
* More **extensible**. If you want to use plugins implemented by others, you can simply import & register them.

See [Register Mechanism](/docs/plugins#register-mechanism) for more details.
:::

## Build

After defining & registering the plugin, building the app is easy:

```python title="app.py"
app = App()
```

Now we are ready to run the app.

## Run

```bash
cfdraw run
```

:::tip
When you run this command for the first time and have not called `cfdraw install` before, we will use `yarn` to install the JavaScript dependencies for you, which may take a while!
:::

This command will run the app in development mode, after which you should see your app running at `http://localhost:5123`, with the `GaussianBlur` plugin integrated. Now you can: 
1. Upload an image and play with the plugin.
2. Modify the generated `app.py` file and see warm reload (yeah, not hot enough because we rely on the `reload` provided by `uvicorn` 🤣).

## Next Steps

And that's it! We've created a fully functional plugin with less than 40 lines of code, and this plugin is ready to be reused, extended, and shared.

Keep reading the docs to learn how to try `carefree-drawboard` 🎨 yourself!
