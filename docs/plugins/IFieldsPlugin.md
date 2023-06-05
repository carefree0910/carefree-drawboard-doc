---
id: IFieldsPlugin
title: IFieldsPlugin
---

:::info API reference
* [IPluginInfo](/docs/api-reference/IPluginInfo)
  * [IFieldsPluginInfo](/docs/api-reference/IPluginInfo#ifieldsplugininfo)
:::

Currently, the most commonly used plugin binding should be the `IFieldsPlugin`. It assumes that:

* After users click it, it pops up a panel (or a modal, depends on the [`useModal`](/docs/api-reference/IPluginSettings#usemodal) argument) with several input fields.
* Users only need to fill in the input fields, click the `Submit` button, and wait for the results.
* Each input field should be one of the pre-defined fields, so we can render some nice components for you with just a few setups.

:::note
This paradigm is already powerful enough to handle very complicated applications such as our [Live Demo](https://drawboard-demo.nolibox.com/)!
:::

Under these assumptions, there are only three specific properties for `IFieldsPlugin`, and only one of them (`definitions`) is required:

```python title="app.py"
@property
def settings(self) -> IPluginSettings:
    return IPluginSettings(
        pluginInfo=IFieldsPluginInfo(
            # highlight-start
            header="My Fancy Header",
            definitions=dict(...),
            numColumns=2,
            # highlight-end
        ),
    )
```

A typical workflow of building an `IFieldsPlugin` is:

1. Gather all the required parameters of your API, pick the ones that you want to expose to the users.
2. Define the `definitions` based on these parameters' names and types.
3. In the `process` method, use `data.nodeData.extraData` to get the user inputs, and call your API with them.

We'll show some common recipes in the following sections.

:::caution
🚧🚧 **WIP** 🚧🚧
:::
