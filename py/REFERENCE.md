# Phantomjscloud Python SDK Reference

Complete API reference for the Phantomjscloud Python SDK.


## PhantomjscloudSDK

### Constructor

```python
from phantomjscloud_sdk import PhantomjscloudSDK

client = PhantomjscloudSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PhantomjscloudSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = PhantomjscloudSDK.test()
```


### Instance Methods

#### `RenderPageGet(data=None)`

Create a new `RenderPageGetEntity` instance. Pass `None` for no initial data.

#### `RenderPagePost(data=None)`

Create a new `RenderPagePostEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## RenderPageGetEntity

```python
render_page_get = client.RenderPageGet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `events` | `list` | No | Array of events that occurred during page load |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RenderPageGet().load({"id": "render_page_get_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RenderPageGetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RenderPagePostEntity

```python
render_page_post = client.RenderPagePost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `events` | `list` | No | Array of events that occurred during page load |
| `outputAsJson` | `bool` | No | Return response metadata as JSON including page events, resources loaded, errors, etc. |
| `overseerScript` | `str` | No | JavaScript code for page automation (ES2018 syntax). |
| `proxy` | `str` | No | Proxy configuration: 'anon-any' (anonymous worldwide), 'anon-{country}' (country-specific), 'geo-{country}' (static IP), or 'custom-{url}:{port}:{user}:{pass}' |
| `renderType` | `str` | No | Output format: plainText (web scraping), jpg/jpeg/png (screenshots), pdf (archiving), html (native form), automation (advanced control) |
| `requestSettings` | `dict` | No |  |
| `suppressJson` | `list` | No | List of JSON response fields to suppress for reduced verbosity |
| `url` | `str` | Yes | The URL of the page to render |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RenderPagePost().create({
    "id": "example_id",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RenderPagePostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = PhantomjscloudSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

