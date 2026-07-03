# Phantomjscloud Lua SDK Reference

Complete API reference for the Phantomjscloud Lua SDK.


## PhantomjscloudSDK

### Constructor

```lua
local sdk = require("phantomjscloud_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `RenderPageGet(data)`

Create a new `RenderPageGet` entity instance. Pass `nil` for no initial data.

#### `RenderPagePost(data)`

Create a new `RenderPagePost` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## RenderPageGetEntity

```lua
local render_page_get = client:RenderPageGet(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | ``$STRING`` | No |  |
| `page_response` | ``$OBJECT`` | No |  |
| `status_code` | ``$INTEGER`` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RenderPageGet():load({ id = "render_page_get_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RenderPageGetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RenderPagePostEntity

```lua
local render_page_post = client:RenderPagePost(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | ``$STRING`` | No |  |
| `output_as_json` | ``$BOOLEAN`` | No |  |
| `overseer_script` | ``$STRING`` | No |  |
| `page_response` | ``$OBJECT`` | No |  |
| `proxy` | ``$STRING`` | No |  |
| `render_type` | ``$STRING`` | No |  |
| `request_setting` | ``$OBJECT`` | No |  |
| `status_code` | ``$INTEGER`` | No |  |
| `suppress_json` | ``$ARRAY`` | No |  |
| `url` | ``$STRING`` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RenderPagePost():create({
  url = --[[ `$STRING` ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RenderPagePostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

