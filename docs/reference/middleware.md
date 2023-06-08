---
id: middleware
title: Middleware
---

A `Middleware` is basically an instance that will do something beforehand and postprocess the results afterwards. In `carefree-drawboard` 🎨, we need `Middleware` because:

* We want to define a powerful interface (i.e., [`ISocketMessage`](/docs/api-reference/ISocketMessage)) that can handle most of the applications.
* We want to make it convenient to use the framework and let users to do as less things as possible.

And `Middleware` is designed to be the bridge between these two targets. Here's the interface:

```python title="cfdraw/schema/plugins.py"
class Subscription(str, Enum):
    ALL = "__all__"


class IMiddleware(ABC):
    hash: str
    plugin: IPlugin

    # abstract

    @property
    @abstractmethod
    def subscriptions(self) -> Union[List[PluginType], Subscription]:
        pass

    @abstractmethod
    async def process(self, response: Any) -> ISocketMessage:
        """
        If `can_handle_message` is `False`, the `response` here could be anything except
        `ISocketMessage`, because in this case if `response` is already an `ISocketMessage`,
        it will be returned directly in the `__call__` method.
        """

    # optional callbacks

    @property
    def can_handle_message(self) -> bool:
        return False

    async def before(self, request: ISocketRequest) -> None:
        self.hash = request.hash

    # api

    def __init__(self, plugin: IPlugin) -> None:
        self.plugin = plugin

    async def __call__(self, response: Any) -> Any:
        if (
            self.subscriptions != Subscription.ALL
            and self.plugin.type not in self.subscriptions
        ):
            return response
        if isinstance(response, ISocketMessage) and not self.can_handle_message:
            return response
        return await self.process(response)
```

And here's an example of how we use it:

```python
async def __call__(self, data):
    middlewares = [...]
    for middleware in middlewares:
        await middleware.before(data)
    response = ...
    for middleware in middlewares:
        await response = middleware(response)
    return response
```

## Built-in Middlewares

### `ResponseMiddleware`

:::info
Source codes: [cfdraw/plugins/middlewares/response.py](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/plugins/middlewares/response.py)
:::

This middleware is used to convert the raw response from the plugins to an [`ISocketMessage`](/docs/api-reference/ISocketMessage) instance.

:::tip
Currently, it handles `str`, `PIL.Image`, or list of them.
:::

### `SendSocketMessageMiddleware`

:::info
Source codes: [cfdraw/plugins/middlewares/send_message.py](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/plugins/middlewares/send_message.py)
:::

After the [`ISocketMessage`](/docs/api-reference/ISocketMessage), we need to send it to the frontend. In order to avoid manually sending it here and there, we use this middleware to send it automatically.

:::tip
This middleware also injects some special attributes to the response data:

```python title="cfdraw/plugins/middlewares/send_message.py"
class SendSocketMessageMiddleware(IMiddleware):
    @property
    def subscriptions(self) -> Union[List[PluginType], Subscription]:
        return Subscription.ALL

    @property
    def can_handle_message(self) -> bool:
        return True

    async def process(self, response):
        if response is None:
            return None
        # highlight-start
        if self.plugin.extra_responses:
            if response.data.final is None:
                response.data.final = {}
            response.data.final["extra"] = self.plugin.extra_responses
            response.data.injections = self.plugin.injections
        # highlight-end
        await self.plugin.send_message(response)
        return response
```
:::

### `TimerMiddleware`

:::info
Source codes: [cfdraw/plugins/middlewares/timer.py](https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/plugins/middlewares/timer.py)
:::

This middleware only serves [`IFieldsPlugin`](/docs/plugins/IFieldsPlugin), and it is relatively simple:

```python title="cfdraw/plugins/middlewares/timer.py"
class TimerMiddleware(IMiddleware):
    @property
    def can_handle_message(self) -> bool:
        return True

    @property
    def subscriptions(self) -> List[PluginType]:
        return [PluginType.FIELDS]

    async def process(self, response: ISocketMessage) -> ISocketMessage:
        # highlight-start
        self.plugin.elapsed_times.end()
        response.data.elapsedTimes = self.plugin.elapsed_times
        # highlight-end
        return response
```

:::info
Check [ElapsedTimes](/docs/api-reference/ISocketMessage#elapsedtimes) for the API reference.
:::

## Customize Middlewares

To define your own middleware, you can:
1. Go to `cfdraw/plugins/middlewares`, create a file, and implement it.
2. Go to `cfdraw/plugins/base.py`, create a new class which inherits from the `ISocketPlugin` class.
3. Re-implement the `middlewares` property of the new class, make sure include your new middleware in the list.

