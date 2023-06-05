---
id: features
title: Features
---

import Video from "@site/src/components/Video";

This page will introduce some common features provided by `carefree-drawboard` 🎨.

## Operations

### Adjust Global Position (Pan)

By pressing <kbd>Space</kbd>, we can move the drawboard 🎨 by dragging it around.

Panning can also be achieved by Mac users easily (just pan as you always did)!

### Adjust Global Scale (Zoom)

Zooming can be achieved either by pressing <kbd>Command</kbd> and scroll with your mouse, or pinch-to-zoom (Mac users).

Zooming can also be achieved by clicking the `Settings` plugin at the `rt` corner of the drawboard 🎨, where there's a slider for us to adjust global scale.

### Auto Arrangement

When selecting multiple `Node`s, the `AutoArrangement` plugin will pop up (under the `Group` plugin). by clicking it, a nice animation will be played and the `Node`s will be arranged properly!

### Download

Whenever you select a (some) `Node`(s), a `Download` plugin will appear at the `rb` corner:

![image](https://user-images.githubusercontent.com/15677328/231956431-bdc815f1-b6c6-45ed-957a-4f83b61c3855.png)

The green box corresponds to the `Download` plugin, and the red lines are interaction fields we may be interested in when downloading `Node`(s), which will be explained in the following sections.

#### Download Multiple `Node`s

When multiple nodes are selected, the header of the `Download` plugin will show the total number of the selected node, and the caption label above the `Download` button will show `Multiple`, as the above image illustrated.

In this case, `carefree-drawboard` 🎨 will download a `zip` for you containing every (exported) single `Node`.

:::note
For example, an `exported.zip` file containing two images will be downloaded in the above case.
:::

#### Merge Multiple `Node`s

In order to download one single image, we can utilize the `Group` plugin at the `rt` corner (the red box in the above image) to 'group' multiple `Node`s together. Once clicked, the above image should become:

![image](https://user-images.githubusercontent.com/15677328/231959993-9eb4b538-37ef-4107-b533-fe916d058543.png)

As you can see, now the header of the `DownloadPlugin` shows `1` as the total number of the selected node, and the caption label above the `Download` button will show exactly the size of the selected `Group`. If we click `Download` now, one single image will be downloaded.

#### Format

`carefree-drawboard` 🎨 aims to provide full fledged power to creations, so we support 4 download formats:

* `PNG` (default), will download a standard image (with alpha channel).
* `JPG`, will use `jpeg` compression (with the help of the `PIL` library).
* `SVG`, will convert the `Node` to vector graphics.
    * Notice that we are not converting images to svgs on the fly, but are embedding images into svgs, so they are 'fake' svgs if we export `ImageNode`/`Group` in `SVG` format.
    * Currently only `TextNode`/`PathNode` can benefit from downloading in `SVG` format.
* `NOLI`, will download a `.noli` file which contains the internal data structure used by `carefree-drawboard` 🎨.
    * The `.noli` file can be further imported to any existing project via the [`Project`](#project-management) plugin (using the `Import` button).

#### Size

By default, we use `Original Size` as the Size setting, which means:
* If the target `Node` is an `ImageNode`, the size of the downloaded image will be the same as the original size of the image, no matter the size of the `ImageNode` in the drawboard 🎨.
* Otherwise, `Original Size` behaves the same as the `Drawboard Size`, which means the size of the downloaded image will be the same as the size of the `Node` in the drawboard 🎨.

We provide a nice caption above the `Download` button to show the expected download size of the selected `Node`, so if you find it ridiculously large, you can adjust the size of the `Node` in the drawboard 🎨 to make it reasonable.

It's also worth mentioning that the size-caption will be rendered in real time!

<Video url="https://user-images.githubusercontent.com/15677328/231965157-1922dc73-89b0-4a44-82cd-58e46f2da642.mp4" />

## Queueing System

`carefree-drawboard` 🎨 provides a powerful queueing system to manage submitted tasks, it can assign resources to each user in a fair way.

### Single User

:::info
Test codes: [tests/test_statuses.py](https://github.com/carefree0910/carefree-drawboard/blob/dev/tests/test_statuses.py)
:::

When there's only one user, the queueing system is simple: the tasks will be executed in the order of submission.

<Video url="https://user-images.githubusercontent.com/15677328/234001789-1c276a00-bfda-4689-9527-9cee6d1e5bce.mp4" />

### Multiple Users

:::info
Test codes: [tests/test_statuses.py](https://github.com/carefree0910/carefree-drawboard/blob/dev/tests/test_statuses.py)
:::

When it comes to multiple users, the queueing system will become more complicated. In this case, the tasks will be executed in the order of submission, but the tasks submitted by different users will be executed in a round-robin way.

<Video url="https://user-images.githubusercontent.com/15677328/234005484-0aaded9f-77d4-4dbf-9ace-803216bedc8f.mp4" />

### `RequestQueue`

:::info
Source codes: [cfdraw/app/endpoints/queue.py](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/app/endpoints/queue.py).
:::

In order to manage the tasks submitted by users properly - as shown in the previous sections - `carefree-drawboard` 🎨 implements `RequestQueue`, which can assign resources to each user in a fair way. In short:

* The `RequestQueue` maintains many `UserRequestQueue`s, and each `UserRequestQueue` holds the tasks submitted by a user.
* The `RequestQueue` run through all the tasks in the following way:
    * If there aren't any tasks in the `RequestQueue`, exit.
    * Otherwise, it calls the `next` method to get the next target task, execute it, and then remove it from the `RequestQueue`.

Here's the core (pseudo) code of the `next` method:

```python title="cftool/data_structures.py - QueuesInQueue"
def next(self) -> Task | None:
    if self.queues.is_empty:
        return None
    self.cursor %= len(self.queues)
    # get the `UserRequestQueue` at the current cursor
    queue = self.queues.get_index(self.cursor)
    # get the next task in the `UserRequestQueue`.
    # A queue should be first-in-first-out (FIFO), so we use `queue.data.first`
    task = queue.data.first
    if task is None:
        # if the first `task` is `None`, which means the `UserRequestQueue` is not empty,
        # remove the entire `UserRequestQueue` from the `RequestQueue`
        self.queues.remove(queue.key)
        return self.next()
    # otherwise, move the cursor to the next `UserRequestQueue` before returning the `task`
    self.cursor += 1
    return task
```

As you can see, even if a `UserRequestQueue` holds hundreds of tasks, only the first task will be executed, and the `cursor` will move to the next `UserRequestQueue`. This indicates that users can get their tasks done in a more 'even' way.

:::note
Yes, this is the round-robin scheduling.
:::

## Auto Save

`carefree-drawboard` 🎨 will:
* create a project called `Auto Save` when the drawboard 🎨 is **FIRST** entered.
* auto save the current project periodically (currently **every 1 minute**) to the `Auto Save` project.
* duplicate `Auto Save` project when it is loaded, to make sure the `Auto Save` project remains unchanged until the next auto-save-period.
* prevent users from deleting the `Auto Save` project.

With the above machanism, the `Auto Save` project will always exist, be pretty new, and never be manually modified. This means the `Auto Save` project is a relatively high quality backup for us to recover from unexpected crashes.

> Despite the above machanism, we still recommend you to manually download the projects if they are truly important to you.

`carefree-drawboard` 🎨 will also:
* load the latest (i.e., has the largest `updateTime`) project everytime the drawboard 🎨 is entered (it could be the `Auto Save` project, but it could also be a manually saved project).

So users can resume their work from the last time they left.

## `meta`

`meta` is an important design in `carefree-drawboard` 🎨. It not only contains the necessary parameters to construct every `Node`, but also records where did every `Node` 'comes from'.

Typical meta looks like:

```json
{
  "type": "python.fields",
  "data": {
    "identifier": "blur",
    "response": {
      "type": "image",
      "value": {
        "w": 512,
        "h": 512,
        "url": "http://localhost:8123/.images/23570666906718eeb8c1fa2da20275de.png"
      },
      "index": 0
    },
    "elapsedTimes": {
      "pending": 0,
      "executing": 0.11766958236694336,
      "total": 0.11766958236694336
    },
    "from": {
      "type": "upload",
      "data": {
        "w": 512,
        "h": 512,
        "url": "http://localhost:8123/.images/9da5f2d8137b42a943213c99dd1a1411.png",
        "isDrag": false,
        "alias": "upload.233880267",
        "elapsedTimes": {}
      }
    },
    "alias": "python.fields.blur.-363986496"
  }
}
```

As you can see, there's a `from` field in `data`, which represents the `Node`'s 'origin'. In this case, the `Node` is blurred from an image uploaded by the user.

It's worth mentioning that the ability to trace every `Node`'s history is essential for:
* Knowing exactly how every beautiful creation is generated step by step, thus make it possible to re-use some of the steps to create new ones.
* Much more potential possibilities, such as making [Games](/docs/reference/brainstorm#games) with it.

To illustrate the most basic usage of `meta`, our internal [`Meta`](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/.web/src/plugins/_react/MetaPlugin.tsx) plugin can show you the simplified 'history' of each `Node`:

![image](https://user-images.githubusercontent.com/15677328/233593425-61f3ee3d-0148-4cf9-960d-6676e76576ac.png)

### `elapsedTimes`

If you are using the [`IFieldsPlugin`](/docs/plugins/IFieldsPlugin) binding, you will find an `elapsedTimes` field in the `meta` data of the result `Node`s:

```json
{
  "type": "python.fields",
  "data": {
    "elapsedTimes": {
      "createTime": 1682397542.9439876,
      "startTime": 1682397542.9439876,
      "endTime": 1682397543.0616572,
      "pending": 0,
      "executing": 0.11766958236694336,
      "total": 0.11766958236694336
    }
  }
}
```

* `createTime`: timestamp that you create/submit the task.
* `startTime`: timestamp that the task starts.
* `endTime`: timestamp that the task ends.
* `pending`: the pending/waiting duration, should be `startTime` minus `createTime`.
* `executing`: the executing duration, should be `endTime` minus `startTime`.
* `total`: total times spend on the task, should be `endTime` minus `createTime`.

With the help of `elapsedTimes`, we can analyze the performance of the plugin, the server, or even analyze the user experience, if needed.

## ⚡️Lightning Fast

### Positioning

We used pure css property (`transform`) to control the positions of every plugin, so plugin positionings are very fast!

:::info
See [Plugin Positioning](/docs/plugins#plugin-positioning) for more details.
:::

### Text Editor

When a `TextNode` is selected, the `TextEditor` plugin will pop up on the right of it. You'll find that the changes can be made very fast!

<Video url="https://user-images.githubusercontent.com/15677328/234516789-c5931b29-e71c-4f94-9f48-b4a574eca17b.mp4" />

### Reactive

The Text Editor of `TextNode` is just one case of how reactive `carefree-drawboard` 🎨 is. In fact, every plugin is reactive, and every interaction is reactive as well!

## Project Management

By clicking the `Project` plugin at the `rt` corner of the drawboard 🎨, we can:
* Rename project, by typing in your desired project name at the top input field and click the `Save` button.
* Save project, by clicking the `Save` button.
* Load existing project, by selecting the desired project and clicking the `Load` button.
* Download project, by clicking the `Download` button. /save/load/download/import projects easily.
* Import project, by clicking the `Import` button.
    * This can also be used to import the `.noli` data structure!

## Sketch

We can sketch on `carefree-drawboard` 🎨 by using the `Brush` plugin at the `rt` corner of the drawboard 🎨. Here's a demo video of how to utilize it and implement a [`StableDiffusionInpainting`](https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion_inpainting) plugin:

<Video url="https://user-images.githubusercontent.com/15677328/234514648-e026a25a-ea90-4fcd-b94e-55182be69f57.mp4" />

## Show/Hide Plugins

By clicking the `Settings` plugin at the `rt` corner of the drawboard 🎨, we can choose which plugins to show/hide easily.

## Grid Lines

`carefree-drawboard` 🎨 has a nice Grid Lines system as the background, kind of like the famous `miro` product.

## Guideline

`carefree-drawboard` 🎨 has a built-in Guideline system (it is kind of buggy though).
