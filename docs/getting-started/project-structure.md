---
id: project-structure
title: Project Structure
---

Project structure in `carefree-drawboard` 🎨 is quite simple - one main file, and one config file.

Let's create a new app called `my_app`:

```bash
mkdir my_app
cd my_app
cfdraw init
```

This will create a directory structure like this:

```text
my_app
├── app.py
└── cfconfig.py
```

Pretty straightforward - `app.py` is the main file, and `cfconfig.py` is the config file.

:::note
`carefree-drawboard` 🎨 generates a default plugin (`GaussianBlur` plugin) within the `app.py` file. You can modify this file to customize your plugin.
:::

:::info
* See [Configurations](/docs/user-guides/configurations) for more details about `cfconfig.py`.
:::

## Next Steps

Continue reading to see how to build your own plugins, in detail.
