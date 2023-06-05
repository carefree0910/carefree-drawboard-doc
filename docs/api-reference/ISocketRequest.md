---
id: ISocketRequest
title: ISocketRequest
---

import Badget from '@site/src/components/Badget';

### `hash`

<Badget type="str" required />

The hash of the request.

:::note
This is used internally and should not be used elsewhere.
:::

### `userId`

<Badget type="str" required />

The id of the user.

### `userJson`

<Badget type="str | None" defaultValue="None" />

Full json of the user info.

### `baseURL`

<Badget type="str" required />

The base url of the request.

### `identifier`

<Badget type="str" required />

The identifier of the plugin.

### `nodeData`

<Badget type={<a href="#inodedata">INodeData</a>} required />

Data extracted from the selecting [`Node`](/docs/reference/terminology#node).

:::info
If multiple nodes are selected, this field will be empty and please use [nodeDataList](#nodedatalist) instead.
:::

### `nodeDataList`

<Badget type={<>List[<a href="#inodedata">INodeData</a>]</>} required />

List of data extracted from the selecting [`Node`](/docs/reference/terminology#node)s.

:::info
If only one node is selected, this field will be empty and please use [nodeData](#nodedata) instead.
:::

### `extraData`

<Badget type="Dict[str, Any]" required />

Extra data of each plugin.

:::tip
Notice that different plugin bindings will have different format of `extraData`.
:::

### `isInternal`

<Badget type="bool" defaultValue="False" />

Whether the request is internal.

:::tip
This is used internally and should not be used elsewhere.
:::

## Reference

### `INodeData`

* `type` : The type of the node.
* `x` : The X coordinate of the node.
* `y` : The Y coordinate of the node.
* `w` : The width of the node.
* `h` : The height of the node.
* `transform` : The transform matrix of the node.
* `text` : The content of the node, will be `None` if the node is not a `TextNode`.
* `src` : The image url of the node, will be `None` if the node is not intended to be converted to an image.
    * Currently only `ImageNode`, `SVGNode` and `PathNode` will have this field defined.
* `meta` : The meta of the node, it will differ from node to node.
* `children` : The children of the node, it will be a list of `INodeData` if and only if the node is a `Group` (i.e., `type` == 'group' or `type` == 'frame').
