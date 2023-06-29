---
id: roadmap
title: Roadmap
---

:::note
Priorities are from top to bottom, but subject to change (based on your needs!), and suggestions/contributions are truly welcomed!!
:::

## Features

- [x] Introduce `notification` for plugins ([b295e03](https://github.com/carefree0910/carefree-drawboard/commit/b295e03a69083279899294379da02dbacec190c8)).

> So when users are using plugins, notifications (introductions, hardware requirements, etc.) will be printed.

- [x] Supported specifying `requirements.txt` ([3cd9b39](https://github.com/carefree0910/carefree-drawboard/commit/3cd9b3912016ab5f8cadee12296de655989127e3)).

> Previously we support specifying `requirements` in plugins, which is not good because we may `import` the requirements before the plugin is loaded, which will cause import errors. Now with `requirements.txt`, we can install the requirements at the `cli` stage, hence solving the problem.

- [x] Support Hosting ([767422c](https://github.com/carefree0910/carefree-drawboard/commit/767422c4475e6fff4d23085af2acb928a11315ad), [4e9a0c6](https://github.com/carefree0910/carefree-drawboard/commit/4e9a0c6b8641a28bec0eef3b14a8f978b1cffe0e), [00135fc](https://github.com/carefree0910/carefree-drawboard/commit/00135fccf555fdfa6e832015f587fdabee7a8432)).

> Currently `carefree-drawboard` 🎨 can only run on `localhost` and cannot be accessed by others

- [x] Support [Google Colab](https://colab.research.google.com/github/carefree0910/carefree-drawboard/blob/dev/examples/server.ipynb) ([3c40ddc](https://github.com/carefree0910/carefree-drawboard/commit/3c40ddc438ead7299dcd0c9b1b07832f321f9234)).
- [x] Try to use [`tornado`](https://github.com/tornadoweb/tornado) to unify the servers ([0d27bbc](https://github.com/carefree0910/carefree-drawboard/commit/0d27bbc11fd831ca6cb45c589d658ef77514e7fa)).

> This plan is subject to remove (if I'm not capable of doing it). 🤣
> 
> Fortunately I did it. 😄

- [x] Remove the `tornado` proxy and use `FastAPI` to serve static files directly [2ba60c9](https://github.com/carefree0910/carefree-drawboard/commit/2ba60c92c555b83e6aee9bf9f81cde111c815955).

> Damn I don't know why I introduced an extra proxy layer, maybe because I wanted to learn something new?

- [x] Introduce a queueing system for `WebsocketEndpoint` ([`RequestQueue`](/docs/user-guides/features#requestqueue)).
- [x] Support removing all tasks when corresponding user disconnected.

> This is somehow done automatically by the connection checking / exception handling system in `carefree-drawboard` 🎨 (it will indeed have a small fraction of overhead, but it can be ignored).

- [x] Deprecate `http` stuffs

> * They are for fast start ups. Once the socket stuffs are ready, we can remove them.
>
> * But don't worry: the interfaces will be exactly the same, and BC will be ensured!

- [x] Support adding tooltip to each plugin ([ae5d114](https://github.com/carefree0910/carefree-drawboard/commit/ae5d114ff055cce9a04fd17286932b1e6c72b0ff)).

> So users can know what each plugin does better (a single icon might not be enough). 🤣

- [x] Support `PluginGroup` (which is also a plugin), so we can manage plugins better ([605eabd](https://github.com/carefree0910/carefree-drawboard/commit/605eabd41fda1b4715af2ce83870246009e20a86)).

> A common use case is putting all your customized plugins into one `PluginGroup`, so users can enable/disable them in one click/one line of code.

- [ ] Implement a plugin that can interact with the [`meta`](/docs/user-guides/features#meta) of each `Node`.

    * Mainly used for labelling, hence unleash much more possibilities (e.g., allow users to add some key-value pair and validate them in the server, and choose which reaction should be made. Somehow this can serve as the event system in games).

    * It is also something that lazy guys (like me) will probably like, because we can ignore all UIs now and dump every data to the meta data, read & process them in the server, and response whatever we want.

    * Once finished, I'll dig out some use cases and put them in [Brainstorm](/docs/reference/brainstorm).

- [x] Finish implementing the `ISocketPlugin`.

> Which is the fundamental of many cool plugins (e.g., chat plugin, stable diffusion with callbacks, etc.).

- [ ] Support more kinds of `Node` (e.g. `AudioNode`, `VideoNode` or even `StickerNode`).

> Which can make `carefree-drawboard` 🎨 more like an '[AI Operation System](/docs/reference/brainstorm#the-ai-operation-system)'.

- [x] Support using ratio (e.g., `0.8`) for `w` & `h` ([cea22f5](https://github.com/carefree0910/carefree-drawboard/commit/cea22f5896145b4da420b06c75aecab9f2012951)).
- [ ] Implement CLI which can pack/publish and download/install the images, projects & plugin script files.

    * This can make sharing stuffs much easier.

- [x] Implement a plugin which can display the generation sequence of a `Node` ([260f7c7](https://github.com/carefree0910/carefree-drawboard/commit/260f7c79a59692c118bd7de5735b1a3b1617ae1c), [20cf989](https://github.com/carefree0910/carefree-drawboard/commit/20cf9894c52ed9bcb87e5302034c63858f701bbe), [9772184](https://github.com/carefree0910/carefree-drawboard/commit/97721840e3fda14529a8e2f190cdca51d5bfa295), etc.).

    * This can help you track your creation history.

- [x] Add an endpoint and an internal method which can locate local files. This is helpful when we need to load local data, models, etc.

    * I think a special `ISelectField` should be able to achieve this goal.
    * This is indeed achieved by a special `ISelectField` - `ISelectLocalField` ([102a887](https://github.com/carefree0910/carefree-drawboard/commit/102a887daafba4c8b6632821acc35794146df44e)). No internal methods required now, just define an `ISelectLocalField` and it will update the `options` in real time based on your file system and send the user-selected `value` to you!

- [ ] Made the positioning of the `follow` plugins more reasonable when the 'followed' `Node` is very small.
- [x] Support more `IFieldDefinition`, e.g., `IBooleanField`, `ISelectField` ([2cd8c95](https://github.com/carefree0910/carefree-drawboard/commit/2cd8c95ea1afb0d2148c49cd9ff25b97ff9b7603), [0c28ff3](https://github.com/carefree0910/carefree-drawboard/commit/0c28ff34ec5235576e40056d16a0c91637132b53)) & `IListField` ([392c027](https://github.com/carefree0910/carefree-drawboard/commit/392c027c342d167ee507820be68dbdd6ab79ddad)).

> `ISelectField` should be already usable, but I haven't tested it yet.

- [x] Add sophisticated loading status when tasks are submitted ([6899641](https://github.com/carefree0910/carefree-drawboard/commit/68996415503d5d34273731e162c3696287b825bd)).

    * Should be easy when `ISocketPlugin` is ready.

- [x] Optimize toast logics ([f5c125a](https://github.com/carefree0910/carefree-drawboard/commit/f5c125a590a7f41a2b4f38c590b0effaf1b38279)).

    * Mainly looking for lazy toasting, which only toast when certain seconds have passed.

- [x] Make `carefree-drawboard` 🎨 production ready.

> `carefree-drawboard` 🎨 is not designed to be production ready out of the box, because Infinite Drawboard is so powerful that it contains many business logics which may vary from project to project. Good news is we already abstracted the core interfaces into a single folder - `cfdraw/app/endpoints`, and each logic is implemented in a single file, so your modifications can be organized easily.
> 
> See [Production](/docs/user-guides/production) for more details.

- [x] Add a switch which can show/hide all plugins ([516b0f3](https://github.com/carefree0910/carefree-drawboard/commit/516b0f3e937042f8e3754adaddc5a31a105d6a6d)).
- [x] Support deleting projects ([56edbe5](https://github.com/carefree0910/carefree-drawboard/commit/56edbe53f595ce5708d01b6ae8df3ab657f1920a)).
- [ ] Support saving/loading UI settings.
- [x] Support Union of `nodeConstraints` ([ecaf5fd](https://github.com/carefree0910/carefree-drawboard/commit/ecaf5fdf2e754e79c9f62bb620a2f5a006edebb2)).
- [x] Support socket-based constraints (i.e., send socket message to the backend to see if we should show the plugin or not) ([8dd450b](https://github.com/carefree0910/carefree-drawboard/commit/8dd450bb31a9359532101a993ffd35dd839ae0c2)).

> This serves as a universal fallback.

- [ ] Make backend hosting more reasonable (see [Production](/docs/user-guides/production) for context).

> Unfortunately I'm not familiar with this so although I'll try to learn it by myself ASAP but maybe leave it to the community is a better choice. 🤣
>
> But maybe using `uvicorn` is enough? 🤔

- [x] Support saving current project periodically (see [Auto Save](/docs/user-guides/features#auto-save) for more details).
- [x] Add versioning to projects.

> This is not directly implemented, but the [Auto Save](/docs/user-guides/features#auto-save) might be a better alternative.

- [ ] Support direct copy-paste images to the drawboard 🎨.
- [ ] Add some low-level methods that can directly control the `Node`s on the drawboard 🎨.
- [ ] Support dragging the none-follow plugins and save their positions down.

## Demos

- [x] Add demo for [carefree-creator](https://github.com/carefree0910/carefree-creator).

:::info
[Live Demo](https://drawboard-demo.nolibox.com/) is already online!
:::

- [ ] Add demo for [SAM](https://github.com/facebookresearch/segment-anything).

:::info
* This may need a special type of component to generate images interactively.
* It is possible to implement the demo with [IFieldsPlugin](/docs/plugins/IFieldsPlugin) by submitting a segment task to the backend everytime by hand. Just not that fancy.
:::

- [ ] Add demo for GPT-ish models.

:::info
* This may need a special type of component to stream the outputs of LLMs.
* Again, it is possible to implement the demo with [IFieldsPlugin](/docs/plugins/IFieldsPlugin). Just not that fancy.
:::

## Documentation

- [x] Introduce the design of the `Floating` & `Render` component (the [Plugins](/docs/reference/design-philosophy#plugins) section and the [Design Details](/docs/reference/design-philosophy#design-details) section).
- [ ] Introduce the design of the `Styles` system (will be added to the [Design Philosophy](/docs/reference/design-philosophy) page).
- [ ] Introduce how to define the fine-grained styles in `FieldsPlugin` with the help of the `props` field in `definition`.
- [ ] Introduce the design of the `Settings` system (e.g., `pluginInfo` is only used in each plugin) (will be added to the [Design Philosophy](/docs/reference/design-philosophy) page).
- [ ] Introduce the code structure.
- [ ] Introduce how to support i18n in [Features](/docs/user-guides/features).
- [x] Introduce how to write plugins in other programming languages (the [Extensibility](/docs/reference/design-philosophy#extensibility) section).
