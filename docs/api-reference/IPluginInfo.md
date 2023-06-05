---
id: IPluginInfo
title: IPluginInfo
---

import Badget from '@site/src/components/Badget';

## Common

### `retryInterval`

<Badget type="int" defaultValue="None" />

If not `None`, the plugin will retry in `retryInterval` ms when exception occurred.

### `updateInterval`

<Badget type="int" defaultValue="None" />

If not `None`, the plugin will be called every `updateInterval` ms.

:::caution
This is dangerous to use, please don't use it unless you do need it.
:::

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

## `IFieldsPluginInfo`

This contains the specific properties of the [`IFieldsPlugin`](/docs/plugins/IFieldsPlugin).

### `header`

<Badget type={<a href="/carefree-drawboard-doc/docs/api-reference/Types#istr">IStr</a>} defaultValue="None" />

Header of the plugin.

:::note
If it is `None`, we will use the registered name of the plugin as the header (with the first letter capitalized).
:::

### `definitions`

<Badget type={<>Dict[str, <a href="/carefree-drawboard-doc/docs/api-reference/Types#ifielddefinition">IFieldDefinition</a>]</>} defaultValue="None" />

Field definitions, this is what we customize most.

### `numColumns`

<Badget type="int | None" defaultValue="None" />

Number of columns that will be used to arrange the input fields.

### Available Fields

:::caution
🚧🚧 **WIP** 🚧🚧
:::

#### `ITextField`

#### `IImageField`

#### `INumberField`

#### `ISelectField`

#### `I18NSelectField`

#### `ISelectLocalField`

#### `IBooleanField`

#### `IColorField`

#### `IListField`

#### `IObjectField`

## `IChatPluginInfo`

This contains the specific properties of the [`IChatPlugin`](/docs/plugins/IChatPlugin).

### `initialText`

<Badget type="str | None" defaultValue="None" />

The initial text to be displayed in chat.

## `IPluginGroupInfo`

This contains the specific properties of the [`IPluginGroup`](/docs/plugins/IPluginGroup).

```python
class IPluginGroupInfo(IPluginInfo):
    header: Optional[IStr] = Field(None, description="Header of the plugin group")
    plugins: Dict[str, Type[IPlugin]] = Field(..., description="Plugins in the group")
```

### `header`

<Badget type={<a href="/carefree-drawboard-doc/docs/api-reference/Types#istr">IStr</a>} defaultValue="None" />

Header of the plugin group.

### `plugins`

<Badget type="Dict[str, Type[IPlugin]]" required />

Plugins in the group.

:::tip
* The key should be **unique** universally, and it is recommended to use a self-explanatory name.
* The value of the `plugins` property should be the **class** of the plugin, not the instance.
:::
