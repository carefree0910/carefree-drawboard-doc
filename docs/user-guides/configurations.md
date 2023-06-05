---
id: configurations
title: Configurations
---

:::info API reference
* [Config](/docs/api-reference/Config)
:::

`carefree-drawboard` 🎨 is designed to hold configurations in one single file - the `cfconfig.py` file.

```python title="constants.py"
DEFAULT_ENTRY = "app"
FRONTEND_PORT = "5123"
BACKEND_PORT = "8123"

UPLOAD_ROOT_KEY = "CFDRAW_UPLOAD_ROOT"
UPLOAD_ROOT = Path("~").expanduser() / ".cache" / "carefree-draw"

def get_upload_root() -> str:
    return os.environ.get(UPLOAD_ROOT_KEY, str(UPLOAD_ROOT))
```

```python title="config.py"
@dataclass
class Config:
    entry: str = constants.DEFAULT_ENTRY
    frontend_port: str = constants.FRONTEND_PORT
    backend_port: str = constants.BACKEND_PORT
    backend_hosting_url: Optional[str] = None
    upload_root: str = field(default_factory=constants.get_upload_root)
    board_settings: BoardSettings = field(default_factory=BoardSettings)
    extra_plugins: ExtraPlugins = field(default_factory=ExtraPlugins)
    use_react_strict_mode: bool = False
```

```python title="cfconfig.py"
from cfdraw import *

config = Config()
```

The most commonly used configuration is probably the `upload_root` property, which is used to specify the root directory for storing uploaded stuffs (projects, creations, etc.):

```python title="cfconfig.py"
from cfdraw import *

config = Config(
    # highlight-start
    # This tells us to use `cwd` to store the uploaded stuffs
    upload_root="./",
    # highlight-end
)
```

If you want to customize some overall settings for the drawboard 🎨, you can use the `board_settings` property. For example, if you want to switch the default language to Chinese, you can:

```python title="cfconfig.py"
from cfdraw import *

config = Config(
    # highlight-start
    board_settings=BoardSettings(
        globalSettings=GlobalSettings(
            defaultLang=Lang.ZH,
        )
    )
    # highlight-end
)
```

`carefree-drawboard` 🎨 also provides the `extra_plugins` property in case you need. For example, if you want to place your logo on the `lt` (**l**eft-**t**op) corner of the drawboard 🎨, you can:

```python title="cfconfig.py"
from cfdraw import *

config = Config(
    # highlight-start
    extra_plugins=ExtraPlugins(
        logo=ILogoSettings(
            iconW=300,
            iconH=99,
            pivot=PivotType.LT,
            src="https://url/to/your/logo.png",
        )
    ),
    # highlight-end
)
```
