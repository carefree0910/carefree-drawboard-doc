---
id: contributing
title: Contributing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contributions are truly welcomed! Here's a brief guide to help you contribute to `carefree-drawboard` 🎨.

## Installation

It might be necessary to install `carefree-drawboard` 🎨 from source for development purposes. You can do this by cloning the repository and running `pip install -e .` in the root directory of the repository:

```bash
git clone https://github.com/carefree0910/carefree-drawboard.git
cd carefree-drawboard
pip install -e .
```

## Prerequisites

Well, in fact the followings are not actually 'prerequisites', but knowing them will help you understand the system better and improve your contribution experience:

1. The [Design Details](/docs/reference/design-philosophy#design-details) of the plugins.
2. The overall [Design Philosophy](/docs/reference/design-philosophy).

## `Python` Developers

:::tip User Guides
* The [Overview](/docs/plugins) of the plugin system.
* The [IFieldsPlugin](/docs/plugins/IFieldsPlugin).
:::

`carefree-drawboard` 🎨 abstracted out a powerful plugin paradigm that allows you to build plugins in a declarative way. So, if you are a `Python` developer, the fastest way to contribute is to write specific plugins in a single file `app.py` (e.g., some fancy `StableDiffusion` plugins, see [this](https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion), [this](https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/caption_and_diffusion), [this](https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion_controlnet) and [this](https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion_inpainting)).

After you are satisfied with your plugins, (currently) you can publish them by submitting a PR to place your `Python` file in the `cfdraw/plugins/community` folder. Notice that:
* You may need to change the name from `app.py` to another name (your username might be a good choice so others can immediately recognize it's your work!)
* It's better to import your plugins with `from xxx import *` at `cfdraw/plugins/community/__init__.py`, so others can use it conveniently.
  * Your plugin names should therefore be unique, otherwise it may suffer from import confliction!
* Your submitted `Python` file should **NOT** contain codes other than the plugin definitions. Typically, if you start your project with `cfdraw init`, you will get these lines at the bottom of `app.py`:

```python
register_plugin("blur")(Plugin)
app = App()
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remove them before submitting a PR, otherwise unpredictable errors may occur.

* It will be better to have a detailed docstring in your plugins to indicate what models do they use, what do they do, how to use them, why you build them, etc. The more you described them, the better other can understand them and make use of them!

:::tip
* In the future, we will implement a built-in marketplace for plugins, so that you can publish / download them easily!

> And if the marketplace is ready, the `community` folder will be deprecated - but don't worry, we'll publish all existing plugins to the marketplace before it is removed!

* Before the marketplace is ready, another way to share your plugins to others without submitting a PR is to simply share your `Python` file to others, and they can use it by importing & registering the plugins. 😆
:::

## `React` Developers

If you are familiar with `React`, you can do something more fancy - creating brand new plugins!

### Create plugins for `Python`

Although the [`IFieldsPlugin`](/docs/plugins/IFieldsPlugin) can handle most of the situations, we may still need to customize some plugins for special needs. Here's a brief introduction on how you can build your own `Python` accessible plugin:

1. Define data interface. It is generally recommended to add it to the end of the `// plugin` section in the `src/schema/_python.ts` file, and the data interface must `extends IPythonPlugin`, and only properties in `pluginInfo` are allowed to be added. Taking `IPythonQAPlugin` in that file as an example:

```ts title="cfdraw/.web/src/schema/_python.ts"
export interface IPythonQAPlugin extends IPythonPlugin {
  pluginInfo: IPythonPluginInfo & {
    initialText: string;
  };
}
```

2. Complete the types in the `cfdraw/.web/src/schema/plugins.ts` file:
* In `allPythonPlugins`, add the name of the new component `{name}`. Generally speaking, the `{name}` should be related to the data interface defined in step **1**, and it is better to have it start with `_python.` (e.g., `_python.QA`).
* In `IPluginProps`, add a key-value pair, where the key is the `{name}` defined above, and the value is the data interface defined in step **1**. Here's an example:

```ts title="cfdraw/.web/src/schema/plugins.ts"
export const allPythonPlugins = [
  ...,
  // highlight-next-line
  "_python.QA",
] as const;

export interface IPluginProps {
  ...;
  // highlight-next-line
  "_python.QA": IPythonQAPlugin;
}
```

3. Create a new file (`{file}`) in `cfdraw/.web/src/plugins/_python` to write the component. Once done, register it with the `factory`:

```ts title="cfdraw/.web/src/plugins/_python/{file}"
import { observer } from "mobx-react-lite";

const MyPlugin = (props) => {...}

drawboardPluginFactory.registerPython({name}, true)(observer(MyPlugin));
```

:::note
Notice that the `{name}` here must match the `{name}` defined in step **2**.
:::

Also, `export` the corresponding component in `cfdraw/.web/src/plugins/index.tsx`:

```ts title="cfdraw/.web/src/plugins/index.tsx"
export * from "./_python/{file}";
```

:::note
If not `export`ed, the `register` logic will not be triggered.
:::

4. Provide the Chinese and English names of the plugin in `cfdraw/.web/src/lang/plugins.ts`.

```ts title="cfdraw/.web/src/lang/plugins.ts"
import { Dictionary, Lang } from "@carefree0910/core";

import { allReactPlugins, allPythonPlugins, AllPlugins } from "@/schema/plugins";

const _pluginsLangRecords: Record<Lang, Record<AllPlugins, string>> = {
  zh: {
    ...,
    // highlight-next-line
    "_python.QA": "Python 问答",
  },
  en: {
    ...,
    // highlight-next-line
    "_python.QA": "Python Q & A",
  },
};
```

:::note
Feel free to use both Chinese / both English!
:::

5. Go to `cfdraw/schema/plugins.py` and:
* Add an enumeration item in the `PluginType` at the beginning of the file, the value of the enumeration item should be the same as the `{name}` defined in step **2**.
* Define an interface that inherits from `IPluginInfo` at the end of the file (better with a short comment) to align with the fields added in step **1**, and add it to `__all__`. Here's an example:

```python title="cfdraw/schema/plugins.py"
class PluginType(str, Enum):
    ...
    # highlight-next-line
    QA = "_python.QA"


# highlight-start
class IQAPluginInfo(IPluginInfo):
    initialText: str = Field(
        ...,
        description="The initial text to be displayed in the text area",
    )
# highlight-end


__all__ = [
    ...,
    # highlight-next-line
    "IQAPluginInfo",
]
```

6. Go to `cfdraw/plugins/bindings.py`, define a binding that inherits the corresponding base at the end of the file, and add it to `__all__`.

```python title="cfdraw/plugins/bindings.py"
# highlight-start
class IQAPlugin(ISocketPlugin):
    @property
    def type(self) -> PluginType:
        return PluginType.QA
# highlight-end


__all__ = [
    ...,
    # highlight-next-line
    "IQAPlugin",
]
```

7. Now you can use a declarative way to apply the corresponding component to the drawboard 🎨 anywhere you like:

```python
from cfdraw import *

class HelloQAPlugin(ISocketPlugin):
    @property
    def type(self) -> PluginType:
        return PluginType.QA

    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            w=500,
            h=200,
            nodeConstraint=NodeConstraints.NONE,
            pivot=PivotType.CENTER,
            pluginInfo=IQAPluginInfo(initialText="Hello, world!"),
        )

    async def process(self, data: ISocketRequest) -> str:
        return f"Hello, {data.extraData['text']}!"
```


### Create plugins in `React`

Sometimes we want more control on the drawboard 🎨, and that's where (internal) `React` plugins come to rescue. Here's a brief introduction on how you can build your own `React` plugin:

1. Define types. In `cfdraw/.web/src/schema/plugins.ts`:
* In `allReactPlugins`, add the name of the new component `{name}`.
* In `IPluginProps`, add the data interface corresponding to the new component. The data interface must `extends IPlugin`, and only fields in `pluginInfo` are allowed to be added.

:::note
Generally speaking, internal plugins in `React` do not need additional data interfaces because these plugins usually do one specific thing. Therefore, it may be more reasonable to manage data directly using things like store.
:::

2. Create a new file (`{file}`) in `cfdraw/.web/src/plugins/_react` to write the component. Once done, register it with the `factory`:

```ts title="cfdraw/.web/src/plugins/_react/{file}"
import { observer } from "mobx-react-lite";

const MyPlugin = (props) => {...}

drawboardPluginFactory.registerPython({name}, true)(observer(MyPlugin));
```

:::note
Notice that the `{name}` here must match the `{name}` added in step **1**.
:::

Also, `export` the corresponding component in `cfdraw/.web/src/plugins/index.tsx`:

```ts
export * from "./_react/{file}";
```

:::note
If not `export`ed, the `register` logic will not be triggered.
:::

3. Provide the Chinese and English names of the plugin in `cfdraw/.web/src/lang/plugins.ts`.

:::note
Feel free to use both Chinese / both English!
:::

4. Use a declarative way to create the corresponding plugin in `reactPluginSettings` (locates at `cfdraw/.web/src/_settings.ts`):

```ts title="cfdraw/.web/src/_settings.ts"
export const reactPluginSettings: IMakePlugin<ReactPlugins>[] = [
  ...,
  // highlight-start
  {
    type: $name,
    props: {...},
  },
  // highlight-end
]
```

:::note
Notice that the `$name` here must match the `{name}` added in step **1**.
:::

:::tip
* Although plugins can be created repeatedly, as mentioned earlier, internal plugins in `React` usually do one specific thing. Therefore, there is generally no need to create them repeatedly.
* However, in some special cases, such as using this drawboard-plugin 🎨 system to build a game, some repetitive logics (such as the NPC logics) can be managed in the corresponding plugins.
:::

## Style Guide

If you are still interested: `carefree-drawboard` 🎨 adopted [`black`](https://github.com/psf/black) and [`mypy`](https://github.com/python/mypy) to stylize its codes, so you may need to check the format, coding style and type hint with them before your codes could actually be merged.
