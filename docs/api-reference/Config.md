---
id: Config
title: Config
---

import Badget from '@site/src/components/Badget';

### `entry`

<Badget type="str" defaultValue='"app"' />

Indicates the name of the main file.

:::note
It is OK to use `app` / `app.py` / `./app.py`, so you can safely use the `Tab` completion of your shell.
:::

### `frontend_port`

<Badget type="str" defaultValue='"5123"' />

The port of the frontend, will take no effect if [`--unified`](/docs/user-guides/hosting#--unified) mode is used.

### `backend_port`

<Badget type="str" defaultValue='"8123"' />

The port of the backend, will also be the port of the frontend if [`--unified`](/docs/user-guides/hosting#--unified) mode is used.

### `backend_hosting_url`

<Badget type="str" defaultValue="None" />

If provided, the frontend will post requests to this url.

### `upload_root`

<Badget type="str" defaultValue='"~/.cache/carefree-draw"' />

The root folder where your uploaded stuffs will be stored.

### `board_settings`

<Badget type="BoardSettings" defaultValue="BoardSettings()" />

The overall settings of the drawboard 🎨.

```python title="cfdraw/schema/settings.py"
class BoardSettings(BaseModel):
    boardOptions: Optional[BoardOptions] = Field(None, description="board options")
    globalSettings: Optional[GlobalSettings] = Field(None, description="global setting")
```

#### `BoardOptions`

* `minScale`

  <Badget type="float" defaultValue="0.02" />

  Specify the minimum global scale of the drawboard.

* `maxScale`

  <Badget type="float" defaultValue="256" />

  Specify the maximum global scale of the drawboard.

#### `GlobalSettings`

* `defaultLang`

  <Badget type="noli.Lang" defaultValue="None" />

  The default language.

* `defaultInfoTimeout`

  <Badget type="int" defaultValue="None" />

  The default timeout of the info message.

* `excludeReactPlugins`

  <Badget type="List[ReactPluginType]" defaultValue="None" />

  React plugins to be excluded.

* `iconLoadingPatience`

  <Badget type="int" defaultValue="None" />

  Show icon loading animation if the icon is not loaded after `{patience}` ms.

### `extra_plugins`

<Badget type="ExtraPlugins" defaultValue="ExtraPlugins()" />

Extra plugins to be loaded.

```python title="cfdraw/schema/settings.py"
class ExtraPlugins(BaseModel):
    logo: Optional[ILogoSettings] = Field(None, description="logo settings")
```

:::info
* `ILogoSettings` is just an inheritance of [IPluginSettings](/docs/api-reference/IPluginSettings), but without the need to specify `w` & `h`. If it is provided, we will render a logo based on the settings.
:::

### `use_react_strict_mode`

<Badget type="bool" defaultValue="False" />

Whether use [React.StrictMode](https://react.dev/reference/react/StrictMode) or not.

:::note
If not for special purposes, just leave it as `False`.
:::
