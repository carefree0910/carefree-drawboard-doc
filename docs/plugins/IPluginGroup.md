---
id: IPluginGroup
title: IPluginGroup
---

import Video from '@site/src/components/Video';

:::info API reference
* [IPluginInfo](/docs/api-reference/IPluginInfo)
  * [IPluginGroupInfo](/docs/api-reference/IPluginInfo#iplugingroupinfo)
:::

Sometimes we want to group plugins together. For instance, we may want to group the plugins that are related to the same API, or we may want to group the plugins that are related to the same category.

Grouping plugins can be achieved by using the `IPluginGroup` binding. We've already provided a `test_plugin_grouop.py` file in the `tests` folder, and here we will break it down for you to understand how `IPluginGroup` works.

Here's the complete code:

```python title="tests/test_plugin_group.py"
from cfdraw import *


class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            w=260,
            h=180,
            pluginInfo=IFieldsPluginInfo(
                definitions=dict(foo=ITextField(default="tExT", tooltip="bar"))
            ),
        )

    async def process(self, data: ISocketRequest) -> str:
        return data.extraData["foo"]


class PluginGroup(IPluginGroup):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            w=200,
            h=110,
            pivot=PivotType.RIGHT,
            pluginInfo=IPluginGroupInfo(plugins=dict(bar=Plugin)),
        )


register_plugin("plugins")(PluginGroup)
app = App()
```

## Define Plugin

In order to use `IPluginGroup`, we need to define a plugin first. In this example, we utilize the [`IFieldsPlugin`](/docs/plugins/IFieldsPlugin) binding to define the `Plugin`.

```python title="tests/test_plugin_group.py"
from cfdraw import *


class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            w=260,
            h=180,
            pluginInfo=IFieldsPluginInfo(
                definitions=dict(foo=ITextField(default="tExT", tooltip="bar"))
            ),
        )

    async def process(self, data: ISocketRequest) -> str:
        return data.extraData["foo"]
```

This plugin is a simple plugin that will always return the user-given `foo` field.

## Define Plugin Group

Since everything in `carefree-drawboard` 🎨 is a plugin, `IPluginGroup` itself is also a plugin. And it is even easier to define a `IPluginGroup` because it does not contain any **Logics**, and we only need to specify the **Styles**. So putting plugins inside a group is pretty straightforward - just specify the corresponding **Styles** and it will be all set.

```python title="tests/test_plugin_group.py"
class PluginGroup(IPluginGroup):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            w=200,
            h=110,
            pivot=PivotType.LEFT,
            tooltip="A plugin group",
            # highlight-next-line
            pluginInfo=IPluginGroupInfo(plugins=dict(bar=Plugin)),
        )
```

Here, we specify the `Plugin` as the only plugin inside the `PluginGroup`, with the key `bar`.

:::tip
* The key should be **unique** universally, and it is recommended to use a self-explanatory name.
* The value of the `plugins` property should be the **class** of the plugin, not the instance.
:::

## Run

```bash title="tests"
cfdraw run --module test_plugin_group.py
```

And here's a demo video of how this plugin / plugin group works:

<Video url="https://github.com/carefree0910/carefree-drawboard/assets/15677328/9ce82f8b-0fb9-4da8-9519-52b8b6e77a30" />
