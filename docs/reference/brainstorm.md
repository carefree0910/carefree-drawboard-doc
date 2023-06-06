---
id: brainstorm
title: Brainstorm
---

The reason why I create this project is that I believe the **Infinite Drawboard** can unleash **Infinite Possibilities**. I'll put my thoughts here whenever they popped up. They might sound ridiculous but who knows? 😆

## The 'AI Operation System'

:::info
The following examples may demonstrate this idea to some extent:
* [Caption & Diffusion](https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/caption_and_diffusion), which combines the `Image Captioning` model and the `Stable Diffusion` model.
* [Stable Diffusion ControlNet](https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion_controlnet), which decouples complicated workflows like `ControlNet` into separate, lightweight, and reusable plugins.
* [Stable Diffusion Inpainting](https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion_inpainting), which handles different types of data easily.
:::

AI is making progress **RAPIDLY** recently. Hundreds of Thousands of models are being released every day. How can we enjoy these models in a comfotable way?

Yes, we can make WebUIs to interact with every single model, but what if we want to utilize them together?

Since `carefree-drawboard` 🎨 itself is a browser-based infinite space, we can integrate multiple models at the backend and put their responses together in the frontend. In this way, we can treat the `carefree-drawboard` 🎨 as the 'AI Operation System', and the AI models are the 'softwares' we may want to use.

You may ask: what about the awesome projects like [`JARVIS`](https://github.com/microsoft/JARVIS) (or [`HuggingGPT`](https://huggingface.co/spaces/microsoft/HuggingGPT)) and [`AutoGPT`](https://github.com/Torantulino/Auto-GPT)? They can integrate AI models on its own.

Yes indeed, but what if we want to keep track on the whole generation process?

That's where `carefree-drawboard` 🎨 can also come to rescue. In `carefree-drawboard` 🎨, every `Node` will not only contain its own parameters, but will also contain a `from` field in its meta data, indicating the source of its generation. Since the `from` field is recursive, we can trace back to the very original `Node` (typically it will be an `upload` `Node`) of every `Node`!

## Games

The first 'impossible' idea that comes into my head is that: can `carefree-drawboard` 🎨 make games? Currently the answer is surely NO, but what if:
* We can control the `Node`s on the drawboard 🎨 directly with `Python` logics.
* We can use WebSocket to communicate with the drawboard 🎨 in (almost) real time.
* We can transfer ANY key-value data by modifying the `meta` of every `Node`.
* We can keep track of every `Node`'s history by inspecting the `meta`.

Then maybe, just maybe, we at least can write some simple games with it!

:::note
These features are all on my [Roadmap](/docs/about/roadmap), but the priority is not high though. 🤣
:::
