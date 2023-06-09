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

### `name`

<Badget type="str" defaultValue="None" />

Name that will be displayed at the `Settings` plugin.

### `noErrorToast`

<Badget type="bool" defaultValue="False" />

If `True`, the plugin will not show error toast when exception occurred.

### `retryInterval`

<Badget type="int" defaultValue="None" />

If not `None`, the plugin will retry in `retryInterval` ms when exception occurred.

### `updateInterval`

<Badget type="int" defaultValue="None" />

If not `None`, the plugin will be called every `updateInterval` ms.

:::caution
This is dangerous to use, please don't use it unless you do need it.
:::
