---
id: update-logs
title: Update Logs
---

:::note
If something in [Roadmap](/docs/about/roadmap) is finished, or I fixed some bugs/implemented some new features/wrote some Wiki, I'll put them here.
:::

## 2023-07-09

* Supported `condition` ([c4d3d92](https://github.com/carefree0910/carefree-drawboard/commit/c4d3d920cdab95c50f12d0767691e5bb7821be38)).

## 2023-07-02

* Implemented `replaceAll` manually, for better compatibility ([0e87296]https://github.com/carefree0910/carefree-drawboard/commit/0e8729675e4ea4dd35442c802ba202d4ebd3722b).
* Enhanced `MetaPlugin` ([9ab56c8](https://github.com/carefree0910/carefree-drawboard/commit/9ab56c880d11df02181024796aa36bda0d8b595e)).
* Supported `minW`, `minH`, `maxW`, `maxH` ([2731144](https://github.com/carefree0910/carefree-drawboard/commit/2731144ed28d0d33ee2ffb495c986945802f47a5)).
* Enhanced `ColorPicker` ([b31893a](https://github.com/carefree0910/carefree-drawboard/commit/b31893a0645211b57f5266a73e44990efe3e9fdd), [f73d981](https://github.com/carefree0910/carefree-drawboard/commit/f73d9817849b59b9105538a39eb592f947318d75), [72c811e](https://github.com/carefree0910/carefree-drawboard/commit/72c811e2573c7858b7c748478c142974b1cc3db6)).

## 2023-06-25

* Introduced `image_group` template ([5433f5d](https://github.com/carefree0910/carefree-drawboard/commit/5433f5d46e66f30acc33cf27bbb0a88fee82ab71)).
* Supported specifying `expandPivot` ([a49b6eb](https://github.com/carefree0910/carefree-drawboard/commit/a49b6eb359fcd4fae13ff578e9b463a202de843e)).
* Supported recognizing `pivot` when `useModal` ([c27673d](https://github.com/carefree0910/carefree-drawboard/commit/c27673d15eaed06d616312152b3ff7f6bd6d79cd)).
* Supported using ratio (e.g., `0.8`) for `w` & `h` ([cea22f5](https://github.com/carefree0910/carefree-drawboard/commit/cea22f5896145b4da420b06c75aecab9f2012951)).

## 2023-06-18

* Supported `custom_embeddings` for the [Live Demo](https://drawboard-demo.nolibox.com/) ([eea5e24](https://github.com/carefree0910/carefree-drawboard/commit/eea5e24d13c5c5e2c3db7008cbdcfbd2ae8dce84)).
* We'll now use `sqlite` to manage projects ([cf0cf3e](https://github.com/carefree0910/carefree-drawboard/commit/cf0cf3ede3ad6972b4b82c0dadaa84a54d0acfc8)).
* Fixed & Enhanced `workflow` stuffs for the [Live Demo](https://drawboard-demo.nolibox.com/) ([c1d4cbd](https://github.com/carefree0910/carefree-drawboard/commit/c1d4cbd92acf9650abaa8866ae550688dc1373bb), [4cbb002](https://github.com/carefree0910/carefree-drawboard/commit/4cbb002ab7d1331c23e8748822b142baa4b0a3cd), etc.).

## 2023-06-11

* [Documentation](/docs/getting-started) is now available!
* Now trace stack will be logged when exception ([bbdb810](https://github.com/carefree0910/carefree-drawboard/commit/bbdb8105be01889d72a6c3f18a5752fc1d5cd2ed)).
> Which is extremely useful for debugging.
* Implemented `workflow` stuffs for the [Live Demo](https://drawboard-demo.nolibox.com/) ([260f7c7](https://github.com/carefree0910/carefree-drawboard/commit/260f7c79a59692c118bd7de5735b1a3b1617ae1c), [20cf989](https://github.com/carefree0910/carefree-drawboard/commit/20cf9894c52ed9bcb87e5302034c63858f701bbe), [9772184](https://github.com/carefree0910/carefree-drawboard/commit/97721840e3fda14529a8e2f190cdca51d5bfa295), etc.).
* Allowed `None` response ([f905b34](https://github.com/carefree0910/carefree-drawboard/commit/f905b3432430660b59d5332fbe3ee5a3d95030fe)).
> This is useful when we detect exceptions during `process` and decide to manually `send_exception`. In which case, we can return `None` at the `process` method, and the frontend will only toast the exception message without doing anything else.
* Enhanced `TextField` ([a35fe10](https://github.com/carefree0910/carefree-drawboard/commit/a35fe10f91c3cc5c9f5574722fdb7f7525107acd)).
> Now we can select a `TextNode` as the binding of the `TextField`, in which case the [Injections](/docs/reference/terminology#injections) will be maintained automatically.

## 2023-06-04

* Simplified `MetaPlugin` ([8710160](https://github.com/carefree0910/carefree-drawboard/commit/8710160eaa6e7cf284558db981826136a625f9b2)).
* Optimized rendering of `Floating` ([2b25baa](https://github.com/carefree0910/carefree-drawboard/commit/2b25baa5d828a42b17c0170edac15c87f37060e1)).
> This is a significant and important optimization, which makes sure that the rendering stay smooth even tens of plugins are used.
* Supported `no_offload` ([8cb2fc8](https://github.com/carefree0910/carefree-drawboard/commit/8cb2fc8d66b8aaf44c0ca451a83eb4afdce20a7e)).
* Supported specifying `requirements.txt` ([3cd9b39](https://github.com/carefree0910/carefree-drawboard/commit/3cd9b3912016ab5f8cadee12296de655989127e3)).
* Supported hot-reloading options of `I18NSelectField` ([201b3bc](https://github.com/carefree0910/carefree-drawboard/commit/201b3bc362a072decb3a3dcf8eb175e5f66cd507)).

## 2023-05-28

* Supported adding `frame` ([056e006](https://github.com/carefree0910/carefree-drawboard/commit/056e0066f8aafa9910997667b57c112d6f0fa4a8)).
* Supported `keepOpen` ([8272f26](https://github.com/carefree0910/carefree-drawboard/commit/8272f2601652064c9e8023b54b9384583907170f)), which can let certain plugins stay expanded even if we click on the drawboard 🎨.
* Bundled some icons to boost loading speed.
* Enhanced styles of `CFSelect` & `CFTextarea`, to make them more consistent with other components.
* Allowed to load the page after timeout ([d01041b](https://github.com/carefree0910/carefree-drawboard/commit/d01041b19316b898ca40b678150b6efdd52cfe97)).
* Unified `CFFormLabel` ([d2a8f8d](https://github.com/carefree0910/carefree-drawboard/commit/d2a8f8d2b1129bfabd06c6d1921c572ef8ae857e)).
* Supported `ImageField` ([8555c33](https://github.com/carefree0910/carefree-drawboard/commit/8555c330414896a25a096f4ed64cecc067cb9d70), [75a5c11](https://github.com/carefree0910/carefree-drawboard/commit/75a5c110f89b30ae4314ba2af99ce4cb746f3659)).
* Implemented `I18NSelectField` ([ddde4d8](https://github.com/carefree0910/carefree-drawboard/commit/ddde4d8a4f855e425c25675c5f02423996492455)).
* Implemented `BasicEditorPlugin` ([1cae642](https://github.com/carefree0910/carefree-drawboard/commit/1cae64278900abd0eccf98cc06bb9fc2f99be65f)).
> Now we can adjust `x`, `y`, `w`, `h` of the selected `Node` elegantly.

## 2023-05-21

* Improved accessibility, now we can use runtime environment variables, so deployment will be much easier.
> Beware that these variables shoud **NOT** contain any sensitive information, since they will be exposed to the frontend!
* Supported `IListField` ([392c027](https://github.com/carefree0910/carefree-drawboard/commit/392c027c342d167ee507820be68dbdd6ab79ddad)).
* Supported editing text color in `TextEditor` ([010d7e5](https://github.com/carefree0910/carefree-drawboard/commit/010d7e539f72f23d4f1e259fe430936583946e9e)).
* Supported editing the text align in the `TextEditor` ([6e3e7b0](https://github.com/carefree0910/carefree-drawboard/commit/6e3e7b03a2977577ed589d7895bbf381d4145c3d)).
* Supported 'input & search' in `SelectField` ([6d6073d](https://github.com/carefree0910/carefree-drawboard/commit/6d6073d744b6607a622cf362b9d4232fbce78330)).
* Fixed project management system with `FileLock` ([97ca37d](https://github.com/carefree0910/carefree-drawboard/commit/97ca37da737f7e04a34d4d722e9b74e667f19dc7) and some following commits).
* Supported `I18N` in `ISelectField` ([607fef4](https://github.com/carefree0910/carefree-drawboard/commit/607fef4837c04cafac62f56f6fa6c1c5f5e3a232)).
* Implemented `PythonMarkdownPlugin` ([d33e097](https://github.com/carefree0910/carefree-drawboard/commit/d33e0976bb3d2779e076f7692972515a152ae2dd)).
> As the name indicates, it can show a piece of markdown sent from the backend.
* Implemented `ShortcutsPlugin` ([5fef73b](https://github.com/carefree0910/carefree-drawboard/commit/5fef73ba501407aa1bc1e68a60a0706aeb5336bf)).
> Now there will be a bulb at the `lb` (left bottom) corner of the drawboard. After you click it, you can see most of the shortcuts.

## 2023-05-14

* Implemented `ISelectLocalField` ([102a887](https://github.com/carefree0910/carefree-drawboard/commit/102a887daafba4c8b6632821acc35794146df44e)).
* Extracted some common settings to the env (see [Environment Variables](https://github.com/carefree0910/carefree-drawboard/wiki/Production#environment-variables) for more details).
* Wrote [Design Details](/docs/reference/design-philosophy#design-details) of the plugin system.
* Supported `requirements` & `notification` ([b295e03](https://github.com/carefree0910/carefree-drawboard/commit/b295e03a69083279899294379da02dbacec190c8)).
* Improved accessibility, now the [`--unified`](https://github.com/carefree0910/carefree-drawboard/wiki/Hosting#--unified) mode can let you deploy `carefree-drawboard` 🎨 to your own server with **zero** modifications.
* Improved user experience by hiding plugins when users:
    * clicked on the drawboard 🎨.
    * pressed the `Esc` key.

## 2023-05-07

* Supported `PluginGroup` (which is also a plugin), so we can manage plugins better ([605eabd](https://github.com/carefree0910/carefree-drawboard/commit/605eabd41fda1b4715af2ce83870246009e20a86)).
* Introduced `nodeConstraintRules` system ([ecaf5fd](https://github.com/carefree0910/carefree-drawboard/commit/ecaf5fdf2e754e79c9f62bb620a2f5a006edebb2)).
* Supported socket-based constraints (i.e., send socket message to the backend to see if we should show the plugin or not) ([8dd450b](https://github.com/carefree0910/carefree-drawboard/commit/8dd450bb31a9359532101a993ffd35dd839ae0c2)).
> This serves as a universal fallback.
* Replaced some events with mobx store, which improves the performance/maintainability quite a lot.
* Implemented `cfdraw build` CLI, which can be used to build the frontend assets.
* Supported `extra_responses`.
> So we can deliver some extra data to the frontend.
* Implemented `send_exception`.
> So we can send exceptions to the frontend more easily.
* Optimized the positioning system ([a6e8501](https://github.com/carefree0910/carefree-drawboard/commit/a6e85019af330bc8df4e004f69e49c0267b1f41a) and some commits around it).
* Supported `i18n` stuffs at backend side ([e3c8ce4](https://github.com/carefree0910/carefree-drawboard/commit/e3c8ce42bddaf6020fc5cd0d76cfaf070b712a00)).
> So we can specify the `label`, `tooltip`, and (almost) any other messages in an internationalized way at backend side (e.g., `Python`).
* Implemented a (simple) `ChatPlugin` ([`cbe5911`](https://github.com/carefree0910/carefree-drawboard/commit/cbe5911478c4aff5cd95b2e92c91f34d3566cb56)).
* Unified `useOnMessage` ([f2dd7cf](https://github.com/carefree0910/carefree-drawboard/commit/f2dd7cfe16380827beba03a92576cdb8043dc1ce)), so now implementing new plugins will be much easier and much less error-prone.
* Implemented the [`carefree-creator`](https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/carefree_creator) example.
> And therefore launched the first public available, production ready, AI magics powered drawboard 🎨 (click [here](https://drawboard-demo.nolibox.com/) to try it out).
* Supported adding blank canvas.
> Which is essential for techniques such as `outpainting`.
* Implemented `ISelectLocalField` ([102a887](https://github.com/carefree0910/carefree-drawboard/commit/102a887daafba4c8b6632821acc35794146df44e)).

## 2023-04-30

* Some nice `CircularProgress` are introduced at `pending` status & `working` status ([6899641](https://github.com/carefree0910/carefree-drawboard/commit/68996415503d5d34273731e162c3696287b825bd)).
* Internal plugins (e.g., `sync`) can now bypass the [`RequestQueue`](https://github.com/carefree0910/carefree-drawboard/wiki/Details#requestqueue) and be executed immediately ([5f60042](https://github.com/carefree0910/carefree-drawboard/commit/5f6004267d9e293d8b7ec54a670f9772f2ad77c8)).
* Introduced `ElapsedTimes` system ([ceab3d4](https://github.com/carefree0910/carefree-drawboard/commit/ceab3d4ac45e866df17571821e60e043b7b15779)).
* Supported `tooltip` for plugins ([ae5d114](https://github.com/carefree0910/carefree-drawboard/commit/ae5d114ff055cce9a04fd17286932b1e6c72b0ff)).
* Upgraded general styles ([c544865](https://github.com/carefree0910/carefree-drawboard/commit/c5448653ec40c1f9b5bae1a12eef89c1677ba469), [a6e6f38](https://github.com/carefree0910/carefree-drawboard/commit/a6e6f381eae7bff3484ea1ec616e97cafa7c8b0b)).
* Fixed known issue: interactions on the drawboard 🎨 will be interrupted if the mouse slipped pass any plugin ([be1b433](https://github.com/carefree0910/carefree-drawboard/commit/be1b43389e5db24b1ade3d973c45b24a3d944d30)).
* Supported specifying more settings via backend (i.e., `Python`) ([c4853b2](https://github.com/carefree0910/carefree-drawboard/commit/c4853b2505e821dbede0c28b693ab4b485448af2)).
* Some meta data will now be injected to the `PNG` images processed by the drawboard 🎨 ([cec4195](https://github.com/carefree0910/carefree-drawboard/commit/cec419518d87a83e02bb60fc9c1a8fa6dff20737), [5cfb178](https://github.com/carefree0910/carefree-drawboard/commit/5cfb178025c55083b8d83e577015f043610fba90)).
* Introduced authentication system (now will only check for `userId`).
* Introduced loading page ([2029161](https://github.com/carefree0910/carefree-drawboard/commit/2029161053b937f10f2e67f0d08f887898d19a03)).
* Supported deleting projects ([56edbe5](https://github.com/carefree0910/carefree-drawboard/commit/56edbe53f595ce5708d01b6ae8df3ab657f1920a)).
* Introduced [Auto Save](https://github.com/carefree0910/carefree-drawboard/wiki/Features#auto-save).
* Supported guarding the loading page until target resources are loaded (See [Loading Page](https://github.com/carefree0910/carefree-drawboard/wiki/Production#loading-page) for more details).
* Supported icon loading animation ([1a16b2d](https://github.com/carefree0910/carefree-drawboard/commit/1a16b2d1861b836663868cc8f3727244219f2f7d)).
* Supported specifying `numRows` ([815409f](https://github.com/carefree0910/carefree-drawboard/commit/815409f84a7012cb667202cbae3ee5a5490a0577)).
> So we can make some fields (typically, the `ITextField`) larger, which may provide better user experience.
* Supported `IBooleanField` & `ISelectField` ([2cd8c95](https://github.com/carefree0910/carefree-drawboard/commit/2cd8c95ea1afb0d2148c49cd9ff25b97ff9b7603), [0c28ff3](https://github.com/carefree0910/carefree-drawboard/commit/0c28ff34ec5235576e40056d16a0c91637132b53)).

## 2023-04-23

* [Hosting](https://github.com/carefree0910/carefree-drawboard/wiki/Hosting) is now supported.
* [Google Colab](https://colab.research.google.com/github/carefree0910/carefree-drawboard/blob/dev/examples/server.ipynb) example is now provided.
* [Tornado](https://github.com/carefree0910/carefree-drawboard/wiki/Hosting#--tornado) integration is now supported.
* Removed `tornado` stuffs and replaced them with `FastAPI`.
> Rapid changes, huh?
* `http` stuffs are deprecated, `socket` stuffs are ready.
* [`RequestQueue`](https://github.com/carefree0910/carefree-drawboard/wiki/Details#requestqueue) is implemented (pretty nicely).

## 2023-04-16

* Implemented `SyncSocketPlugin` &  `useSyncPython` ([4c06392](https://github.com/carefree0910/carefree-drawboard/commit/4c063924e7e5e3d82c241488edde92091fe2347c)).
    * Now we can send Definitions & Settings from `Python` to `React` via WebSocket instead of file system.
    * This also ease the migration from `Python` to other programming languages, because all communications between frontend and backend are now based on a static set of APIs (see [Extensibility](https://github.com/carefree0910/carefree-drawboard/wiki/Design-Philosophy#extensibility) for more details).
* Somehow wrote a brief guide on how to write plugins in other programming languages (the [Extensibility](https://github.com/carefree0910/carefree-drawboard/wiki/Design-Philosophy#extensibility) section).
* Supported `Hide All` / `Show All` plugins ([516b0f3](https://github.com/carefree0910/carefree-drawboard/commit/516b0f3e937042f8e3754adaddc5a31a105d6a6d)).
