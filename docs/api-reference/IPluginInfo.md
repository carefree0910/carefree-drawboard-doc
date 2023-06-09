---
id: IPluginInfo
title: IPluginInfo
---

import Video from '@site/src/components/Video';
import Badget from '@site/src/components/Badget';

:::info
We'll introduce some common properties in this page, and leave the specific properties to the sub-pages:
* [IFieldsPluginInfo](/docs/api-reference/IFieldsPluginInfo)
* [IChatPluginInfo](/docs/api-reference/IChatPluginInfo)
* [IPluginGroupInfo](/docs/api-reference/IPluginGroupInfo)
:::

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
