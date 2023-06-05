---
id: installation
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`carefree-drawboard` 🎨 requires the following to get started:

* Python 3.8+
* [Node.js 18+](https://nodejs.org/en/)

:::note
To be exact, we need `^14.13.1 || ^16 || >=18` because of the `tsconfck@2.1.1` package.
:::

```bash
pip install carefree-drawboard
npm install --global yarn
```

Although we'll always try to help you install the frontend packages, it is recommended to install them beforehands because you can receive much more verbose:

```bash
cfdraw install
```

If you are interested in the latest features, or you want to develop `carefree-drawboard` 🎨 yourself, you may use `pip` to install from source as well:

```bash
git clone https://github.com/carefree0910/carefree-drawboard.git
cd carefree-drawboard
pip install -e .
```
