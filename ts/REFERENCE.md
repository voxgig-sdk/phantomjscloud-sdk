# Phantomjscloud TypeScript SDK Reference

Complete API reference for the Phantomjscloud TypeScript SDK.


## PhantomjscloudSDK

### Constructor

```ts
new PhantomjscloudSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PhantomjscloudSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = PhantomjscloudSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `PhantomjscloudSDK` instance in test mode.


### Instance Methods

#### `RenderPageGet(data?: object)`

Create a new `RenderPageGet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RenderPageGetEntity` instance.

#### `RenderPagePost(data?: object)`

Create a new `RenderPagePost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RenderPagePostEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `PhantomjscloudSDK.test()`.

**Returns:** `PhantomjscloudSDK` instance in test mode.


---

## RenderPageGetEntity

```ts
const render_page_get = client.RenderPageGet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `events` | `any[]` | No | Array of events that occurred during page load |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RenderPageGet().load({ id: 'render_page_get_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RenderPageGetEntity` instance with the same client and
options.

#### `client()`

Return the parent `PhantomjscloudSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RenderPagePostEntity

```ts
const render_page_post = client.RenderPagePost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `events` | `any[]` | No | Array of events that occurred during page load |
| `outputAsJson` | `boolean` | No | Return response metadata as JSON including page events, resources loaded, errors, etc. |
| `overseerScript` | `string` | No | JavaScript code for page automation (ES2018 syntax). |
| `proxy` | `string` | No | Proxy configuration: 'anon-any' (anonymous worldwide), 'anon-{country}' (country-specific), 'geo-{country}' (static IP), or 'custom-{url}:{port}:{user}:{pass}' |
| `renderType` | `string` | No | Output format: plainText (web scraping), jpg/jpeg/png (screenshots), pdf (archiving), html (native form), automation (advanced control) |
| `requestSettings` | `Record<string, any>` | No |  |
| `suppressJson` | `any[]` | No | List of JSON response fields to suppress for reduced verbosity |
| `url` | `string` | Yes | The URL of the page to render |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RenderPagePost().create({
  id: 'example_id',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RenderPagePostEntity` instance with the same client and
options.

#### `client()`

Return the parent `PhantomjscloudSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new PhantomjscloudSDK({
  feature: {
    test: { active: true },
  }
})
```

