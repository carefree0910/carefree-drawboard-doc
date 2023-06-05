---
id: terminology
title: Terminology
---

This page will introduce some commonly used terms in `carefree-drawboard` 🎨.

## `Node`

Every object on the drawboard is a `Node`. Typical `Node`s are:

* `ImageNode`, which represents an image.
* `TextNode`, which represents a piece of text.
* `PathNode`, which represents the path you draw (with the help of the [`Brush`](/docs/user-guides/features#sketch) plugin) on the drawboard 🎨.
* `Group`, which represents a group of `Node`.

### `SingleNode`

In the context of `carefree-drawboard` 🎨, a `SingleNode` represents one single `Node` which is not a `Group`. Which means:

* Multiple `Node`s is **NOT** `SingleNode`.
* `ImageNode` is `SingleNode`.
* `TextNode` is `SingleNode`.
* `Group` is **NOT** `SingleNode`.

## `Pivot`

`Pivot` is an important concept when we need to position our plugins. All supported `Pivot`s are:

* `lt`: **l**eft **t**op corner.
* `top`: **top** center.
* `rt`: **r**ight **t**op corner.
* `left`: middle **left**.
* `center`: middle **center**.
* `right`: middle **right**.
* `lb`: **l**eft **b**ottom corner.
* `bottom`: **bottom** center.
* `rb`: **r**ight **b**ottom corner.

## Styles

'Styles' in `carefree-drawboard` 🎨 often refers to [`IPluginSettings`](/docs/plugins#ipluginsettings), which is returned by the `settings` property of every plugin.

## Logics

'Logics' in `carefree-drawboard` 🎨 often refers to what is happened inside the `process` method of every plugin.

## Binding

'Bindings' in `carefree-drawboard` 🎨 often refers to Built-in Plugin Bindings.

:::info
See [Built-in Bindings](/docs/plugins#built-in-bindings) for more details.
:::

## Injections

In order to trace the 'history' of your creations, `carefree-drawboard` 🎨 will maintain an `injections` field in [`meta`](/docs/user-guides/features#meta) of each [`Node`](#node). Generally speaking, every `Node` should be created by two aspects:

* What kind of plugin was used.
* What parameters did that plugin use.

The first aspect is stored in the `identifier` property, and is relatively 'standalone'. The second aspect is where the 'tracing' happens:

* If this `Node` is created 'out of nowhere' (e.g., no tracing), then parameters are all given by the user. In this case, the `injections` field will be empty.
* Otherwise, some of the parameters will be derived from other `Node`(s). In this case, the `injections` field should record:
  * Which property is derived?
  * What the `Node` information is that provides the value?

Currently, `carefree-drawboard` 🎨 will maintain `injections` automatically only when:

* You use the [`IImageField`](/docs/api-reference/IPluginInfo#iimagefield).

And for other situations, we leave it to you to maintain the `injections` field, if you want to stay 'traced'.

:::info
We provide a built-in method: [set_injection](/docs/api-reference/Built-in-Methods#set_injection) for you to add injections handily.
:::
