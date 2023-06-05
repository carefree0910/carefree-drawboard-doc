---
id: hosting
title: Hosting
---

## tl;dr

```bash
cfdraw run --unified
```

And you can visit `https://your-url.com`, which you binded to the backend server, to see your app.


## Stages

In order to fully explain the hosting mechanism, we need to break down our development 'Stages'. In `carefree-drawboard` 🎨, there are typically three stages, which will be explained in the following sections.

### Development

In this stage, you are developing your app locally, and you can use `cfdraw run` to start the app. The default frontend port is `5123` and the default backend port is `8123`. So after `🎉 Backend Server is Ready!` is printed, you can:

1. Visit your app (with hot reload) at `http://localhost:5123`.
2. Visit the API documentation at `http://localhost:8123/redoc`.

This is the most comfortable stage to get start with. No extra requirements, just `cfdraw run` and everything is ready!

### Preview

:::note
This stage can be safely skipped if you are not dealing with large projects.
:::

When you finished developing and want to publish it, it will be safer if you check the production build first. Since you as a developer can be hard to recognize some tricky bugs, you may want to share it with your friends / collaborators in a LAN environment. In this case, you'll need to find out your ip address and assign it to the `CFDRAW_API_URL` env variable:

```bash
export CFDRAW_API_URL=http://your-ip-address:8123
cfdraw run --prod
```

By setting `CFDRAW_API_URL`, `carefree-drawboard` 🎨 will know it should send requests to this specific (**backend**) url instead of local host, which makes LAN hosting possible. After some time, the console will printed out a bunch of (**frontend**) urls. Try them out and there should be one of them that can work in your LAN environment.

### Production

Now everything is ready and you want to expose your app to the public. There are two ways to do it.

#### `--prod`

When using `--prod` for hosting, the behaviour will be exactly the same as the [Preview](#preview) stage, and the performance should be great.

However, it is not very convenient, because you'll need to prepare two public URLs to finish hosting: one for the backend and one for the frontend. Here's a brief introduction of how to do it (suppose using the default ports):

1. bind the frontend url to `5123` port of your frontend server.
2. bind the backend url to `8123` port of your backend server.
3. launch your server with the following commands:

```bash
export CFDRAW_API_URL=https://your-backend-url
cfdraw run --prod
```

Again, after a bunch of urls are printed, you will be able to visit your app publicly at the configured `https://your-frontend-url`.

#### `--unified`

In order to make hosting more convenient, `carefree-drawboard` 🎨 also introduced `AssetsEndpoint`, which can send the frontend assets to the web browser with the `FastAPI` backend server. By doing so, we can now prepare only one public URL and bind it to the `FastAPI` server and everything will be OK:

1. bind your url (e.g., `https://your-url.com`) to `8123` (the default backend port) port of your server.
2. launch your server with the following commands:

```bash
cfdraw run --unified
```

And you can visit `https://your-url.com` to see your app.

:::note
* We don't need to specify `CFDRAW_API_URL` here because `carefree-drawboard` 🎨 will use the current url as the backend url by default.
* **Beware that there are drawbacks**: in a production environment, it's generally recommended to serve static assets using a dedicated web server like Nginx or a Content Delivery Network (CDN) for better performance and scalability. That's why we still provide the `--prod` mode, which separate frontend and backend completely.
  * However, the `--unified` mode is still a good choice for small projects or quick demos, so you can choose the mode that suits you best.
:::

## Reference

* Apart from setting `CFDRAW_API_URL`, you can also set the api url with the [`Config`](/docs/api-reference/Config) object located at the `cfconfig.py` file:

```python title="cfconfig.py"
from cfdraw.config import Config

config = Config(
    backend_hosting_url="https://your-backend-url.com",
)
```

* The [Google Colab](https://colab.research.google.com/github/carefree0910/carefree-drawboard/blob/dev/examples/server.ipynb) example demonstrates all the concepts mentioned in this page. It utilizes `ngrok` to get public URLs. Here are the core codes:

---

```python title="development stage"
import os
from pyngrok import ngrok

fe_url = ngrok.connect(5123, bind_tls=True).public_url
be_url = ngrok.connect(8123, bind_tls=True).public_url
print(f"You app will be running at: {fe_url}")
os.environ["CFDRAW_API_URL"] = be_url
os.system("cfdraw run")
```

---

```python title="--prod mode"
import os
from pyngrok import ngrok

fe_url = ngrok.connect(5123, bind_tls=True).public_url
be_url = ngrok.connect(8123, bind_tls=True).public_url
print(f"You app will be running at: {fe_url}")
os.environ["CFDRAW_API_URL"] = be_url
os.system("cfdraw run --prod")
```

---

```python title="--unified mode"
import os
from pyngrok import ngrok

url = ngrok.connect(8123, bind_tls=True).public_url
print(f"You app will be running at: {url}")
os.system("cfdraw run --unified")
```


