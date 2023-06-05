---
id: design-philosophy
title: Design Philosophy
---

`carefree-drawboard` 🎨 made assumptions that:

* It is a painful process to spend time thinking and designing the layout of various UIs.
* Most user interactions can be abstracted into "send something to server" & "receive something to server".
* A completely decoupled system is what we dreamed of, because it can be easily customized, extended and maintained.
* An infinite drawboard is capable of building (almost) all the desired applications.

So we derived the following design principles:

* **Everything** is a **plugin** on an **Infinite Drawboard**.
* Plugin Styles should be fully declarative and should contain a smart layout system (which should also be declarative).
* Plugin Logics should only have access to the data from:
    * Itself (e.g., some input fields declared by the Styles).
    * The selecting [`Node`](/docs/reference/terminology#node)(s).

Under these principles, no matter what programming languages (even **JSON**, if your plugins contain no logics) you are using, you can easily extend the functionality of `carefree-drawboard` 🎨 by writing plugins (see [Extensibility](#extensibility) for more details).

And since:

* We love `Python`.

So (currently) we provide a python binding, the `cfdraw` package, for you to write plugins (both styles and logics) using `Python`.

We'll dive into the details of these principles in the following sections.

## Plugins

:::info
To see the design details of our plugins, see [Design Details](#design-details).
:::

In order to achieve the principles, `carefree-drawboard` 🎨 designs a universal plugin paradigm which balanced functionality and flexibility. Specifically, our plugins will:

1. Use declarative way to build itself. More specificly, **EVERY** plugin should be able to be constructed from a **JSON** data.

:::note
In this case, not only `Python`, but also any programming languages can access to `carefree-drawboard` 🎨 (see [Extensibility](#extensibility) for more details)!
:::

2. Be presented on the drawboard 🎨 in the form of an icon button (or text button, if necessary). When we click on it, it will either trigger an event directly or expand a panel for further interactions.

:::note
Typically, the panel expanded here will be contain some input fields used to send some data to `Python`.
:::

3. Control their own position and determine whether they need to be displayed based on [`Pivot`](/docs/reference/terminology#pivot) and [`Node`](/docs/reference/terminology#node). Here are two typical examples:
* For some "global" plugins (such as the "Settings" plugin), we will anchor it in a corner [`Pivot`](/docs/reference/terminology#pivot) of the drawboard 🎨 (such as the upper right corner, `rt`) and keep it displayed no matter what.
* For some "specific" plugins (such as plugins that can perform image processing), we want it to be displayed only when an `ImageNode` is selected, and we want it to `follow` a corner of the `ImageNode` (such as the upper right corner, `rt`).

:::info
See [Plugin Positioning](/docs/plugins#plugin-positioning) for more details.
:::

4. Have a [Middleware](/docs/reference/middleware) system that can facilitate our use. In short, [Middleware](/docs/reference/middleware) can convert our 'raw' results (e.g., `str`, `PIL.Image`, or list of them) into data structure we actually need.

## Extensibility

`carefree-drawboard` 🎨 is designed to be extensible. It should be easy to migrate from `Python` to other (backend) programming languages, because all communications between frontend and backend are based on a static set of APIs.

In order to guide you to write your own plugins with your favorite programming languages, we'll first show you the design details of our plugins (see [Design Details](#design-details)), and then we'll give you some references (see [References](#references)).

## Design Details

In this section, we will introduce the design details of the plugin system, so you can know about why we can write plugins from backend side.

1. The backend should wrap the **[Styles](/docs/reference/terminology#styles)** and **[Logics](/docs/reference/terminology#logics)** into a single **class** / **struct**.
   1. The **Styles** should be **JSON** serializable.
   2. The **Logics** should be asynchronous functions that are responsible for sending intermediate progress / final results to the frontend.
2. The backend should then '**register**' this class / struct to a global '**factory**' (e.g., our [`PluginFactory`](https://github.com/carefree0910/carefree-drawboard/blob/54c9821b13f25b124e465cbc2acd83c5bd1e607e/cfdraw/plugins/factory.py#L25)).
   1. You should assign the class / struct itself, not an instance of it. Instances should be created on the fly, so we don't suffer from data sharing issues.
   2. You should assign a unique `identifier` when registering.
3. The backend should launch a WebSocket server, and a long-lasting connection will be established from the frontend to the backend. This connection will do the following things:
   1. The frontend will send a one-time '**sync**' request to the backend, and the backend should use the '**factory**' to generate a JSON data (e.g., with our [`to_react`](https://github.com/carefree0910/carefree-drawboard/blob/ce2e6f82314b38d20fe245430c91029b12a9f795/cfdraw/schema/plugins.py#L258) method) which tells the frontend how to render the plugins on the drawboard 🎨.
   2. The frontend will send a task request to the backend once users interact with the plugins. The task request is statically typed ([`ISocketRequest`](/docs/api-reference/ISocketRequest)) and will contain the `identifier` of the plugin, so the backend knows which plugin's **Logics** should be executed.
   3. During the execution, the backend will send intermediate progress / final results messages to the frontend. The messages should follow specific interface ([`ISocketMessage`](/docs/api-reference/ISocketMessage)), so it might be better to:
      1. Introduce a [Middleware](/docs/reference/middleware) system.
      2. Introduce some [Built-in Methods](/docs/api-reference/Built-in-Methods).
   4. The frontend will then render the progress / results on the drawboard 🎨.

## References

* The OpenAPI specification can be found at `http://localhost:8123/openapi.json`, if you start this project locally at `8123` port.
* The [websocket](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/app/endpoints/websocket.py) source codes and the [`SyncSocketPlugin`](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/plugins/_internal/sync.py) source codes. You can also see [Sync](#sync) for a brief introduction of the underlying mechanism.
* The plugins are designed to use:
  
  * [`ISocketRequest`](/docs/api-reference/ISocketRequest) as input message
  * [`ISocketMessage`](/docs/api-reference/ISocketMessage) as response message
  
  to communicate between frontend and backend through an everlasting WebSocket connection, so once your backend can receive / send such (JSON) data structure from / to the frontend it should be all fine.

## Sync

One of the main difficulties of building `Python` (or, other backend programming languages) based web frameworks is the communication between frontend and backend. `carefree-drawboard` 🎨 tackles this problem by using WebSocket to communicate:

1. The frontend will maintain a WebSocket connection to the backend, and poll for the settings. If the backend is dead, the frontend will also poll until the backend is alive again.
2. Once the settings are fetched, the frontend will check the hash of the settings. If the hash is different from the current one, the frontend will update the settings and re-render the drawboard 🎨.

:::note
I have to admit: Until 2023-04-15, I was using file system for the communication. It can start up fast but it was a terrible development experience.
:::
