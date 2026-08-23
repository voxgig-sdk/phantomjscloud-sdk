# Phantomjscloud Ruby SDK Reference

Complete API reference for the Phantomjscloud Ruby SDK.


## PhantomjscloudSDK

### Constructor

```ruby
require_relative 'Phantomjscloud_sdk'

client = PhantomjscloudSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PhantomjscloudSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = PhantomjscloudSDK.test
```


### Instance Methods

#### `RenderPageGet(data = nil)`

Create a new `RenderPageGet` entity instance. Pass `nil` for no initial data.

#### `RenderPagePost(data = nil)`

Create a new `RenderPagePost` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## RenderPageGetEntity

```ruby
render_page_get = client.RenderPageGet
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `events` | `Array` | No | Array of events that occurred during page load |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RenderPageGet.load({ "id" => "render_page_get_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RenderPageGetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RenderPagePostEntity

```ruby
render_page_post = client.RenderPagePost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `events` | `Array` | No | Array of events that occurred during page load |
| `outputAsJson` | `Boolean` | No | Return response metadata as JSON including page events, resources loaded, errors, etc. |
| `overseerScript` | `String` | No | JavaScript code for page automation (ES2018 syntax). |
| `proxy` | `String` | No | Proxy configuration: 'anon-any' (anonymous worldwide), 'anon-{country}' (country-specific), 'geo-{country}' (static IP), or 'custom-{url}:{port}:{user}:{pass}' |
| `renderType` | `String` | No | Output format: plainText (web scraping), jpg/jpeg/png (screenshots), pdf (archiving), html (native form), automation (advanced control) |
| `requestSettings` | `Hash` | No |  |
| `suppressJson` | `Array` | No | List of JSON response fields to suppress for reduced verbosity |
| `url` | `String` | Yes | The URL of the page to render |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RenderPagePost.create({
  "id" => "example_id", # String
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RenderPagePostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = PhantomjscloudSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

