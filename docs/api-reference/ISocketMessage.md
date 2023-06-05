---
id: ISocketMessage
title: ISocketMessage
---

import Badget from '@site/src/components/Badget';

### `hash`

<Badget type="str" required />

The hash of the current task.

:::info
This is used internally and should not be used elsewhere.
:::

### `status`

<Badget type={<a href="#socketstatus">SocketStatus</a>} required />

Status of the current task.

### `total`

<Badget type="int" required />

Total number of tasks.

### `pending`

<Badget type="int" required />

Number of pending tasks.

### `message`

<Badget type="str" required />

Message of the current status.

### `data`

<Badget type={<a href="#isocketresponse">ISocketResponse</a>} required />

Response data.

## Reference

### `SocketStatus`

```python title="cfdraw/schema/plugins.py"
class SocketStatus(str, Enum):
    PENDING = "pending"
    WORKING = "working"
    FINISHED = "finished"
    EXCEPTION = "exception"
    INTERRUPTED = "interrupted"
```

### `ISocketResponse`

#### `progress`

<Badget type="float | None" defaultValue="None" appendix="≥0, ≤1" />

Progress of current task, if any.

#### `intermediate`

<Badget type={<><a href="#isocketintermediate">ISocketIntermediate</a> | None</>} defaultValue="None" />

Intermediate responses, if any.

#### `final`

<Badget type="Dict[str, Any] | None" defaultValue="None" />

Final response, if any.

Although not typed here, `final` actually needs to follow the following schema in most cases:

```ts title="cfdraw/.web/src/schema/meta.ts"
export type IPythonResults = (
  | { type: "text"; value: { text: string; safe: boolean; reason: string }[] }
  | { type: "image"; value: { w: number; h: number; url: string; safe: boolean; reason: string }[] }
) & { extra?: Dictionary<any> };
```

:::tip
Luckily, we've already provided the [ResponseMiddleware](/docs/reference/middleware#responsemiddleware) to handle the conversion from raw results to the above schema, so normally you don't need to worry about it.
:::

#### `injections`

<Badget type="Dict[str, Any] | None" defaultValue="None" />

Injections, if any.

:::info
See [Injections](/docs/reference/terminology#injections) for what an 'injection' is.
:::

#### `elapsedTimes`

<Badget type={<><a href="#elapsedtimes-1">ElapsedTimes</a> | None</>} defaultValue="None" />

Elapsed times.

### `ISocketIntermediate`

#### `imageList`

<Badget type="List[str] | None" defaultValue="None" />

Intermediate images, if any.

#### `textList`

<Badget type="List[str] | None" defaultValue="None" />

Intermediate texts, if any.

### `ElapsedTimes`

```python title="cfdraw/schema/plugins.py"
class ElapsedTimes(BaseModel):
    createTime: Optional[float]
    startTime: Optional[float]
    endTime: Optional[float]
    pending: Optional[float]
    executing: Optional[float]
    upload: Optional[float]
    total: Optional[float]

    def __init__(self, **data: Any):
        super().__init__(**data)
        self.createTime = time.time()

    def start(self) -> None:
        start = time.time()
        self.startTime = start
        if self.createTime is not None:
            self.pending = start - self.createTime

    def end(self) -> None:
        end = time.time()
        self.endTime = end
        if self.startTime is not None:
            self.executing = end - self.startTime
            if self.upload is not None:
                self.executing -= self.upload
        if self.createTime is not None:
            self.total = end - self.createTime
```
