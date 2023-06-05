---
id: production
title: Production
---

## tl;dr

* If you just want a quick deploy, use the [`--unified`](/docs/user-guides/hosting#--unified) mode and you are all set.
* If you want it more production ready, you should at least modify the [`upload`](#upload) logic.

## Introduction

`carefree-drawboard` 🎨 is not designed to be production ready out of the box, because Infinite Drawboard is so powerful that it contains many business logics which may vary from project to project. Currently we implement these logics based on local file system to make it easy for quick start and development, but in order to put it into production, you'll need to implement some core interfaces and replace the default implementations with your own. This page is to guide you through the process.

:::tip
Good news is `carefree-drawboard` 🎨 already abstracted the core interfaces into a single folder - `cfdraw/app/endpoints`, and each logic is implemented in a single file, so your modifications can be organized easily.
:::

## Guidelines

The **minimum** modifications you need to make are:
1. Nothing (if you use the [`--unified`](/docs/user-guides/hosting#--unified) mode), congrats!

The suggested modifications are:
1. The [`upload`](#upload) logic.
2. The [`project`](#project) logic.

The extra modifications you may need to make are:
1. The [Environment Variables](#environment-variables).
2. The [User Management](#user-management) logic.
3. The [Loading Page](#loading-page) logic.
4. The [Hosting](#hosting) logic.

## Environment Variables

* **[optional]** `CFDRAW_API_URL`: The url of your backend server.
  * To make things easier, we suggest using the [`--unified`](/docs/user-guides/hosting#--unified) mode. In this case, this will also be the url of the frontend server. And since we will use current `origin` as the default value, you can safely ignore this.
  * This is only useful when you split frontend and backend into two servers.
* **[optional]** `CFDRAW_ALLOWED_ORIGINS`: You should specify The actual product url as this value, there are mainly two cases:
  * If you are hosting `carefree-drawboard` 🎨 directly, you can set it to the `CFDRAW_API_URL`.
    * And since we will use current `origin` as the default value, you can safely ignore this.
    * But for safety concerns, you should still set it to the actual product url. In this case, we will **NOT** use current `origin` anymore, so it can serve as a simple security layer.
  * If you are using `carefree-drawboard` 🎨 in an `<iframe>` or something like that, you should set it to the url of the page that contains the `<iframe>` (because in this case you should `postMessage` to `carefree-drawboard` 🎨 with your page, see [`useAuth`](#useauth) for more details).
* **[optional]** `CFDRAW_UPLOAD_ROOT`: The root directory of the uploaded stuffs (images, projects, ...).
* If you customized the upload logics, you can safely ignore this.

## `upload`

:::info
Source codes: [cfdraw/app/endpoints/upload.py](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/app/endpoints/upload.py).
:::

This is a good starting point, because it is important, not complicated, and you often have already implemented the related SDKs already.

### `upload_image`

#### tl;dr

Modify the [`ImageUploader`](https://github.com/carefree0910/carefree-drawboard/blob/1f59e518e856061e6aeef86b460e13a045072e14/cfdraw/app/endpoints/upload.py#L37) class locates at [`cfdraw/app/endpoints/upload.py`](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/app/endpoints/upload.py).

#### Details

The default `add_upload_image` function implements three endpoints:

1. `/upload_image`, to 'upload' the image to the local file system, and get the image URL (based on the saved path).
2.  `/fetch_image`, which is used in `Download` plugin in `carefree-drawboard` 🎨. It accepts an image URL and some parameters and should return the corresponding image.
3.  `get_image`, to accept the image URL as a `GET` request and return the image (by parsing the image path from the URL and then read it from the local file system). This is used when we set the `src` property of an `<img>` HTML tag.

If you want to put it into production, you can:

1. Choose your cloud storage service, and implement the `upload_image` method of `ImageUploader` based on the SDKs.
2. Based on the corresponding SDKs, implement the `fetch_image` method of `ImageUploader`.
3. **Ignore** the `GET` request (`get_image`), because the image URL will now point to the cloud storage, so you don't need to parse it yourself.

## `project`

:::info
Source codes: [cfdraw/app/endpoints/project.py](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/app/endpoints/project.py).
:::

`carefree-drawboard` 🎨 supports project management, which makes it easy to save/load/share/rename your projects. The default implementations are again based on the local file system, so in order to put it into production, you may need to replace it with a database based one.

Here are the endpoints that you need to consider (we omit the `userId` parameter here for simplicity):

1. `/save_project`, to save the given project to your database. Every project in `carefree-drawboard` 🎨 is guaranteed to be JSON-serializable and the fields are rather static, so you can either use Relational Database or Document Database (or other kinds of database you like) to store it.
2. `/get_project/{uid}`, to get a project based on the given `uid`.
3. `/all_projects`, to get all available projects. Notice that only meta information of each project will be returned here to reduce the response size.
4. (`DELETE`) `/projects/{uid}`, to delete the project based on the given `uid`.

:::note
The input/output schema of each endpoint is defined in the `Python` file with `pydantic`.
:::

## Hosting

Currently `carefree-drawboard` 🎨 is using `uvicorn.run` to start the backend server no matter what, which might not be sufficient for production. Here's the corresponding code:

```python title="cfdraw/utils/exec.py"
def run_backend(module: str, *, log_level: constants.LogLevel) -> None:
    console.rule("[bold green]Launching Backend")
    config = get_config()
    # I'm not familiar with production stuffs of `uvicorn`, so currently
    # only the `reload` flag is different.
    uvicorn.run(
        f"{module}:{config.entry}.{constants.API_VAR}",
        host=constants.DEV_BACKEND_HOST,
        port=int(config.backend_port),
        log_level=log_level,
        reload=not config.prod,
    )
```

Unfortunately, as the comment says, I'm not familiar with production stuffs of `uvicorn`. So if you are an expert, you can modify these codes based on the `config.prod` flag.

> Also see [Hosting](/docs/user-guides/hosting) for more details.

## User Management

`carefree-drawboard` 🎨 supports user management by putting all user-related information into the `userStore` (locates at [`cfdraw/.web/src/stores/user.ts`](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/.web/src/stores/user.ts)), which is a `mobx` store. If you would like to use your own user system, you may align your user information to the [Properties](#properties) of this store (e.g., set the `userId` as your own user ID).

After that, you may need to further adjust the endpoints mentioned above to make them work with your user system.

### `useAuth`

`carefree-drawboard` 🎨 suggests using `<iframe>` for quick production, so it implements a `useAuth` hook natively. You don't actually need to know about the details behind it, what you need to do are only:
1. Modify the `CFDRAW_ALLOWED_ORIGINS` environment variable to your page's URL (this page should contain the `<iframe>`).
2. Use `postMessage` to post `{ userId }` to `carefree-drawboard` 🎨 (see [`userId`](#userid) for more details).

And `carefree-drawboard` 🎨 will recognize the `userId` and handle the rest for you.

### Properties

#### `userId`

In `carefree-drawboard` 🎨, each user should have a unique `userId`, which is used to:

* Manage projects.
* Manage uploaded images.
* Assign a unique `UserRequestQueue` to each user (see [`RequestQueue`](/docs/user-guides/features#requestqueue) for more details).

If you want to use your own `userId`, you may use an `<iframe>` which points to `carefree-drawboard` 🎨, and then use `postMessage` to send the `userId` to the `<iframe>`.

We provided an example of the above process: the [`postPseduoUserId`](https://github.com/carefree0910/carefree-drawboard/blob/19bfaf89cb9c9b284a0633b674888f01fb5ac3bf/cfdraw/.web/src/hooks/useSetup.ts#L38) function, which locates at [`cfdraw/.web/src/hooks/useSetup.ts`](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/.web/src/hooks/useSetup.ts).

## Loading Page

`carefree-drawboard` 🎨 provides a loading page, and you can customize the fade out timing if you want. By default, we will fade out the loading page when all icons of react plugins have loaded. If you want to wait for other resources to load, here's a brief guide:

* The loading page will fade out when the [`isReady`](https://github.com/carefree0910/carefree-drawboard/blob/b405bab0557dcb8f37d012b6a9ad6ea9b99af22b/cfdraw/.web/src/hooks/useSetup.ts#L70) flag of `setupStore` (locates at [`cfdraw/.web/src/hooks/useSetup.ts`](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/.web/src/hooks/useSetup.ts)) returns `true`.
* if you want to wait for other resources to load, you can:
    * add a field to `ISetupStore`, `SetupStore` & `makeObservable`.
    * set this field to `true` only when the resources are loaded.
    * modify the `isReady` property, and make it return `true` only when this field is `true`.

You may refer the [`useCheckIconLoaded`](https://github.com/carefree0910/carefree-drawboard/blob/b405bab0557dcb8f37d012b6a9ad6ea9b99af22b/cfdraw/.web/src/hooks/useSetup.ts#L291) to see how we wait for all initial icons to load.

