---
id: IPluginGroupInfo
title: IPluginGroupInfo
---

import Badget from '@site/src/components/Badget';

This page contains the specific properties of the [`IPluginGroup`](/docs/plugins/IPluginGroup).

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
