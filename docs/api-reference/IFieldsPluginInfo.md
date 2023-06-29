---
id: IFieldsPluginInfo
title: IFieldsPluginInfo
---

import Video from '@site/src/components/Video';
import Badget from '@site/src/components/Badget';

This page contains the specific properties of the [`IFieldsPlugin`](/docs/plugins/IFieldsPlugin).

### `header`

<Badget type={<a href="/carefree-drawboard-doc/docs/api-reference/Types#istr">IStr</a>} defaultValue="None" />

Header of the plugin.

:::note
If it is `None`, we will use the registered name of the plugin as the header (with the first letter capitalized).
:::

### `definitions`

<Badget type={<>Dict[str, <a href="/carefree-drawboard-doc/docs/api-reference/Types#ifielddefinition">IFieldDefinition</a>]</>} defaultValue="None" />

Field definitions, this is what we customize most.

:::tip
The keys of this property will be the keys of the `extraData`. Pseudo code:

```python title="app.py"
class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            ...,
            # highlight-start
            pluginInfo=IFieldsPluginInfo(definitions=dict(
                a=...,
                b=...,
                c=...,
            )),
            # highlight-end
        )
    
    async def process(self, data: ISocketRequest):
        # highlight-start
        a = data.extraData["a"]
        b = data.extraData["b"]
        c = data.extraData["c"]
        # highlight-end
        ...
```
:::

### `numColumns`

<Badget type="int | None" defaultValue="None" />

Number of columns that will be used to arrange the input fields.

### `closeOnSubmit`

<Badget type="bool" defaultValue="True" />

Whether close the `expand panel` when the submit button is clicked.

### `toastOnSubmit`

<Badget type="bool" defaultValue="True" />

Whether trigger a toast message when the submit button is clicked.

### `toastMessageOnSubmit`

<Badget type="str" defaultValue="None" />

The message of the toast.

:::note
* If it is `None`, default toast message will be used.
* Only take effect when [toastOnSubmit](#toastonsubmit) is `True`.
:::

## Available Fields

There are plenty of available fields and they should be able to cover most of your use cases.

## `IBaseField`

Every `I*Field` inherit from `IBaseField`, and they will all share the following common properties:

### `label`

<Badget type={<><a href="/carefree-drawboard-doc/docs/api-reference/Types#istr">IStr</a> | None</>} defaultValue="None" />

The label of the field.

Different fields may render the label differently, but we'll make sure the label is noticable.

### `tooltip`

<Badget type={<><a href="/carefree-drawboard-doc/docs/api-reference/Types#istr">IStr</a> | None</>} defaultValue="None" />

The tooltip of the field.

Different fields may have different tooltip trigger area, but we'll make sure the trigger area is natural.

### `props`

<Badget type={<><a href="/carefree-drawboard-doc/docs/api-reference/Types#ichakra">IChakra</a> | None</>} defaultValue="None" />

Extra `chakra` props for the component.

### `numRows`

<Badget type="int | None" defaultValue="None" />

Number of rows that will be occupied by this field.

This is useful when we want our field to be larger. Typically, we can set it to a number not smaller than `2` to make the [`ITextField`](#itextfield) larger, so users can input text more comfortably.

## `ITextField`

This is used to collect a piece of text from the user.

### `default`

<Badget type={<a href="/carefree-drawboard-doc/docs/api-reference/Types#istr">IStr</a>} defaultValue="None" />

Default text of the field.

## `IImageField`

This is used to collect an image url from the user.

### `default`

<Badget type={<a href="/carefree-drawboard-doc/docs/api-reference/Types#istr">IStr</a>} defaultValue="None" />

Default url of the field.

## `INumberField`

This is used to collect a number from the user.

### `default`

<Badget type="float" required />

Default value of the field.

### `min`

<Badget type="float | None" defaultValue="None" />

Minimum value of the field.

### `max`

<Badget type="float | None" defaultValue="None" />

Maximum value of the field.

:::tip
If `min` & `max` are both provided, we will render a **Slider** instead of a number **Input**.
:::

### `step`

<Badget type="float | None" defaultValue="None" />

Step of the **Slider**, only take effect when `min` & `max` are both provided.

### `isInt`
    
<Badget type="bool | None" defaultValue="None" />

Whether the number should be an integer.

### `scale`

<Badget type="NumberScale | None" defaultValue="None" />

Scale of the number.

```python
class NumberScale(str, Enum):
    LINEAR = "linear"
    LOGARITHMIC = "logarithmic"
```

### `precision`

<Badget type="int | None" defaultValue="None" />

Precision of the **Slider** caption, only take effect when `min` & `max` are both provided.

## `ISelectField`

This is used to collect a / some selection(s) from the user.

### `options`

<Badget type={<>List[<a href="/carefree-drawboard-doc/docs/api-reference/Types#istr">IStr</a>]</>} required />

The options of the field.

### `default`

<Badget type={<a href="/carefree-drawboard-doc/docs/api-reference/Types#istr">IStr</a>} required />

The default value of the field.

### `isMulti`

<Badget type="bool | None" defaultValue="None" />

Whether use multi-select.

:::caution
Currently multi-select is not supported.
:::

## `I18NSelectField`

This is mainly for accessibility when we want to use [`I18N`](/docs/api-reference/Types#i18n) as the options.

```python
class I18NSelectField(IBaseField):
    mapping: Union[Dict[str, I18N], str] = Field(
        ...,
        description=(
            "The mapping of the options. "
            "The key is the 'actual' option, and the value is the i18n object to be displayed\n"
            "> If `str` is provided, it represents the path to the mapping json file."
        ),
    )
    default: str = Field(..., description="The default 'actual' option of the field")
    isMulti: Optional[bool] = Field(None, description="Whether use multi-select")
```

### `mapping`

<Badget type={<>Dict[str, <a href="/carefree-drawboard-doc/docs/api-reference/Types#i18n">I18N</a>]</>} required />

The mapping of the options. The key is the `actual` option, and the value is the [`I18N`](/docs/api-reference/Types#i18n) object to be displayed.

:::info
You can assign this field with an absolute path to a json file, and we'll **dynamically** load the mapping from it.

This is extremely useful when we want to hot-reload the select options without restarting the server.
:::

### `default`

<Badget type="str" required />

The default `actual` option of the field.

### `isMulti`

<Badget type="bool | None" defaultValue="None" />

Whether use multi-select.

:::caution
Currently multi-select is not supported.
:::

### Example

To use `I18NSelectField`, we often need to define the 'field' separately:

```python title="app.py"
from cfdraw import *


foo_field = I18NSelectField(
    mapping=dict(
        bar1=I18N(zh="bar1_中文", en="bar1_en"),
        bar2=I18N(zh="bar2_中文", en="bar2_en"),
    ),
    default="bar2",
)
```

Let's break it down. First, the `mapping`:

```python title="app.py"
from cfdraw import *


foo_field = I18NSelectField(
    # highlight-start
    mapping=dict(
        bar1=I18N(zh="bar1_中文", en="bar1_en"),
        bar2=I18N(zh="bar2_中文", en="bar2_en"),
    ),
    # highlight-end
    default="bar2",
)
```

indicates that there will be two options: `bar1` and `bar2`, and:
* The `bar1` option will be displayed as `bar1_中文` in Chinese and `bar1_en` in English.
* The `bar2` option will be displayed as `bar2_中文` in Chinese and `bar2_en` in English.

Then, the `default`:

```python title="app.py"
from cfdraw import *


foo_field = I18NSelectField(
    mapping=dict(
        bar1=I18N(zh="bar1_中文", en="bar1_en"),
        bar2=I18N(zh="bar2_中文", en="bar2_en"),
    ),
    # highlight-next-line
    default="bar2",
)
```

indicates that the default option is `bar2`.

Here's the complete code that utilizes this `foo_field`:

```python showLineNumbers title="app.py"
from cfdraw import *


foo_field = I18NSelectField(
    mapping=dict(
        bar1=I18N(zh="bar1_中文", en="bar1_en"),
        bar2=I18N(zh="bar2_中文", en="bar2_en"),
    ),
    default="bar2",
)


class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            w=300,
            h=180,
            pivot=PivotType.LEFT,
            # highlight-next-line
            pluginInfo=IFieldsPluginInfo(definitions=dict(foo=foo_field)),
        )

    async def process(self, data: ISocketRequest) -> str:
        # highlight-start
        foo_i18n_d = data.extraData["foo"]
        foo = foo_field.parse(foo_i18n_d)
        # highlight-end
        return f"foo: {foo}"


register_plugin("foo")(Plugin)
app = App()
```

As the highlighted lines shows:
* In `settings`, we define the `foo_field` as the `foo` field of the plugin.
* In `process`, we first get the [`I18N`](/docs/api-reference/Types#i18n) object from the `foo` key of `extraData`, then we use the `parse` method of the `foo_field` to get the `actual` option.

And here's a demo video of how this plugin works:

<Video url="https://github.com/carefree0910/carefree-drawboard/assets/15677328/f72118d2-846d-48ce-be44-29319e514a3f" />

## `ISelectLocalField`

This is used to collect local files specified by the user.

:::tip
This is handy when we need to load local models for the plugin.
:::

### `path`

<Badget type="str" required />

The local path that you want to read from.

### `default`

<Badget type="str" required />

The default value of the field.

### `regex`

<Badget type="str" required />

The regex to filter the files / folders.

### `noExt`

<Badget type="bool" required />

Whether to remove the extension.

### `onlyFiles`

<Badget type="bool" required />

Whether only consider the files.

### `defaultPlaceholder`

<Badget type="str" required />

If provided, it will be inserted to the first of the options and serve as the default value.

### `isMulti`

<Badget type="bool" required />

Whether use multi-select.

:::caution
Currently multi-select is not supported.
:::

:::info
See [Example](#example-1) for the usage of this field.
:::

## `IBooleanField`

This is used to collect a boolean flag from the user.

### `default`

<Badget type="bool" required />

The default value of the field.

## `IColorField`

This is used to collect a color from the user.

### `default`

<Badget type={<a href="/carefree-drawboard-doc/docs/api-reference/Types#istr">IStr</a>} defaultValue='"#ffffff"' />

The default value of the field.

## `IListField`

This is used to collect a list of 'forms' from the user.

:::tip
This is handy if the corresponding field can be 'stacked' (e.g., multi LoRA, multi ControlNet).
:::

### `item`

<Badget type={<>Dict[str, <a href="/carefree-drawboard-doc/docs/api-reference/Types#ifielddefinition">IFieldDefinition</a>]</>} required />

The definition of the 'form'.

### `displayKey`

<Badget type="str" defaultValue="None" />

The key of the field to be displayed when collapsed.

### `default`

<Badget type="List[Any]" defaultValue="[]" />

The default value of the field.

:::note
In most cases, `default` should be an empty list.
:::

### Example

Let's show an example on how to implement a field which aims to support multi LoRA:

```python title="app.py"
from cfdraw import *
from pathlib import Path

lora_field = IListField(
    item=dict(
        model=ISelectLocalField(
            path=str(Path(__file__).parent / "lora"),
            noExt=True,
            onlyFiles=True,
            regex=".*\\.safetensors",
            defaultPlaceholder="None",
        ),
        strength=INumberField(
            default=1.0,
            min=0.0,
            max=4.0,
            step=0.1,
            precision=1,
        ),
    ),
)
```

Let's break it down. First, the `model`:

```python title="app.py"
lora_field = IListField(
    item=dict(
        # highlight-start
        model=ISelectLocalField(
            path=str(Path(__file__).parent / "lora"),
            noExt=True,
            onlyFiles=True,
            regex=".*\\.safetensors",
            defaultPlaceholder="None",
        ),
        # highlight-end
        ...
    ),
)
```

These codes do the following things:
* We'll read the files from the `lora` folder in the same directory of `app.py`.
* The extensions will not be used.
* Only files will be considered.
* Only files with the extension `.safetensors` will be considered.
* We'll add a `None` option to the first of the options, and it will be the default value.

Then, the `strength`:

```python title="app.py"
lora_field = IListField(
    item=dict(
        ...,
        # highlight-start
        strength=INumberField(
            default=1.0,
            min=0.0,
            max=4.0,
            step=0.1,
            precision=1,
        ),
        # highlight-end
    ),
)
```

Nothing special, just a common use case of [`INumberField`](#inumberfield).

Now, let's see the complete code on how to use this field:

```python showLineNumbers title="app.py"
import json
from cfdraw import *
from pathlib import Path


lora_field = IListField(
    item=dict(
        model=ISelectLocalField(
            path=str(Path(__file__).parent / "lora"),
            noExt=True,
            onlyFiles=True,
            regex=".*\\.safetensors",
            defaultPlaceholder="None",
        ),
        strength=INumberField(
            default=1.0,
            min=0.0,
            max=4.0,
            step=0.1,
            precision=1,
        ),
    ),
)


class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            w=400,
            h=300,
            pivot=PivotType.LEFT,
            useModal=True,
            # highlight-next-line
            pluginInfo=IFieldsPluginInfo(definitions=dict(foo=lora_field)),
        )

    async def process(self, data: ISocketRequest) -> str:
        # highlight-next-line
        json_str = json.dumps(data.extraData["foo"], indent=2)
        return f"foo: {json_str}"


register_plugin("foo")(Plugin)
app = App()
```

As the highlighted lines shows:
* In `settings`, we define the `lora_field` as the `foo` field of the plugin.
* In `process`, we dumps the object of the `foo` field to a JSON string.

And here's a demo video of how this plugin works:

<Video url="https://github.com/carefree0910/carefree-drawboard/assets/15677328/794b3b6a-7481-4855-be24-395ee87864bf" />
