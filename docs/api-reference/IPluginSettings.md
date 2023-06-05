---
id: IPluginSettings
title: IPluginSettings
---

import Badget from '@site/src/components/Badget';

### `w`

<Badget type="int" required />

Width of the `expand panel`.

### `h`

<Badget type="int" required />

Height of the `expand panel`.

### `nodeConstraint`

<Badget type="NodeConstraints | None" defaultValue="None" />

Specify when the plugin will be shown.

* If set to `none`, the plugin will always be shown.
* If set to `anyNode`, the plugin will be shown when any node is selected.
* If set to `singleNode`, the plugin will be shown when only one node is selected.
* If set to `multiNode`, the plugin will be shown when more than one node is selected.
* Otherwise, the plugin will be shown when the selected node is of the specified type.

```python title="cfdraw/parsers/noli.py"
class NodeConstraints(str, Enum):
    # single node
    SVG = "svg"
    TEXT = "text"
    IMAGE = "image"
    PATH = "path"
    NOLI_FRAME = "noliFrame"
    NOLI_TEXT_FRAME = "noliTextFrame"
    # group
    GROUP = "group"
    # special
    NONE = "none"
    ANY_NODE = "anyNode"
    SINGLE_NODE = "singleNode"
    MULTI_NODE = "multiNode"
```

### `nodeConstraintRules`

<Badget type="NodeConstraintRules | None" defaultValue="None" />

Specify the complex rule of the node constraint.

Will work together with `nodeConstraint`, but it is often not necessary to use `nodeConstraint` when this field is set.

#### `NodeConstraintRules`

* `some`

  <Badget type="List[NodeConstraints] | None" defaultValue="None" />
  
  Some of the constraints must be satisfied.

* `every`

  <Badget type="NodeConstraints] | None" defaultValue="None" />
  
  Every constraint must be satisfied.

* `exactly`

  <Badget type="NodeConstraints] | None" defaultValue="None" />
  
  The exact constraints. This is useful when we want to constrain certain number of nodes as well as their types.

### `nodeConstraintValidator`

<Badget type="str | None" defaultValue="None" />

The universal fallback.

It specifies the name of the validator registered by `register_node_validator`. This is used when the `nodeConstraint` and `nodeConstraintRules` cannot represent the desired constraint.

For example, if we want to display the plugin only if the selected `Node` is a `Text` and its `text` is `"Hello World"`, we can do the following:

```python title="app.py"
# highlight-next-line
@register_node_validator("hello_world")
def validate_variation(data: ISocketRequest) -> bool:
    if data.nodeData.type != SingleNodeType.TEXT:
        return False
    return data.nodeData.text == "Hello World"


class Plugin(IFieldsPlugin):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            ...,
            # highlight-next-line
            nodeConstraintValidator="hello_world",
        )
```

### `src`

<Badget type="str | None" defaultValue="None" />

The image url that will be shown for the plugin.

If not specified, we will use a default plugin-ish image.

### `tooltip`

<Badget type="str | None" defaultValue="None" />

The tooltip that will be shown for the plugin.

It is recommended to specify an informative tooltip, but it's also OK to leave it as `None`, in which case we will not show any tooltip for the plugin.

### `pivot`

<Badget type="PivotType | None" defaultValue="None" />

Pivot of the plugin.

* If `follow` is set to `true`, the plugin will be shown at the pivot of the selected node.
* Otherwise, the plugin will be shown at the pivot of the entire drawboard 🎨.

```python title="cftool.geometry"
class PivotType(str, Enum):
    LT = "lt"
    TOP = "top"
    RT = "rt"
    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"
    LB = "lb"
    BOTTOM = "bottom"
    RB = "rb"
```

:::info
See [Pivot](/docs/reference/terminology#pivot) for more details.
:::

### `follow`

<Badget type="bool" defaultValue="False" />

Whether the plugin follows the selecting `Node`.

### `expandOffsetX`

<Badget type="int | None" defaultValue="None" />

X offset of the `expand panel`.

### `expandOffsetY`

<Badget type="int | None" defaultValue="None" />

Y offset of the `expand panel`.

### `iconW`

<Badget type="int | None" defaultValue="None" />

Width of the `plugin button`.

### `iconH`

<Badget type="int | None" defaultValue="None" />

Height of the `plugin button`.

### `offsetX`

<Badget type="int | None" defaultValue="None" />

X offset of the `plugin button`.

### `offsetY`

<Badget type="int | None" defaultValue="None" />

Y offset of the `plugin button`.

### `bgOpacity`

<Badget type="float | None" defaultValue="None" />

Background opacity of the `plugin button`.

### `useModal`

<Badget type="bool" defaultValue="False" />

Whether the `expand panel` should be a modal.

### `keepOpen`

<Badget type="bool" defaultValue="False" />

Whether should we keep the `expand panel` of the plugin open, even when users already clicked on the drawboard.

### `expandOpacity`

<Badget type="float | None" defaultValue="None" />

Background opacity of the `expand panel`.

### `expandProps`

<Badget type="IChakra | None" defaultValue="None" />

Extra (chakra) props of the `expand panel`.

### `pluginInfo`

<Badget type="IPluginInfo" defaultValue="IPluginInfo()" />

Plugin info.

:::info
Check [here](/docs/api-reference/IPluginInfo) for the detailed API reference.
:::

### `buttonProps`

<Badget type="Dict[str, Any] | None" defaultValue="None" />

Extra (chakra) props of the `plugin button`.

### `no_offload`

<Badget type="bool" defaultValue="False" />

Whether not to offload the plugin to sub-thread when it is executed, useful when you know the plugin is fast enough.

:::note
This is introduced mainly because some libraries (e.g., `matplotlib`) need to be executed in the main thread.
:::
