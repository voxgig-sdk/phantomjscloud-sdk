# Phantomjscloud SDK

Render and automate web pages, returning JPEG/PNG/PDF screenshots, plain text, HTML, or scripted automation results

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About PhantomJsCloud API

[PhantomJsCloud](https://phantomjscloud.com/) is a hosted headless-browser service that exposes a REST-like, JSON-based interface for rendering and automating web pages. You submit a `PageRequest` describing the URL and how to render it, and the service returns the output in the format you ask for.

What you can get from the API:

- **plainText** — fully executed page text, useful for scraping JavaScript-driven sites
- **html** — the rendered HTML
- **jpeg / jpg / png** — screenshots, previews, and thumbnails
- **pdf** — page archives and reports
- **automation** — scripted workflows with keyboard, mouse and touchscreen events, multi-step navigation, element waits, and multiple captured renders; supports a Puppeteer-compatible API inside an ES2018 sandbox

Authentication is by API key embedded in the URL path (`/api/browser/v2/ak-<YOUR-KEY>/`). The docs recommend starting at around 10 parallel requests and ramping up by one every three seconds, backing off for ~45 seconds on HTTP 429 or 503. Response headers expose billing cost, remaining credit, the final URL after redirects, and a suggested download filename. Optional proxy routing through static US IPs or anonymous proxies in 14+ countries is also available.

## Try it

**TypeScript**
```bash
npm install phantomjscloud
```

**Python**
```bash
pip install phantomjscloud-sdk
```

**PHP**
```bash
composer require voxgig/phantomjscloud-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/phantomjscloud-sdk/go
```

**Ruby**
```bash
gem install phantomjscloud-sdk
```

**Lua**
```bash
luarocks install phantomjscloud-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { PhantomjscloudSDK } from 'phantomjscloud'

const client = new PhantomjscloudSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o phantomjscloud-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "phantomjscloud": {
      "command": "/abs/path/to/phantomjscloud-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **RenderPageGet** | Render a page via a GET request, with the `PageRequest` JSON encoded into the URL — convenient for embedding renders directly in `<img>` or `<a>` tags. | `/{apiKey}/` |
| **RenderPagePost** | Render a page via a POST request, sending the full `PageRequest` JSON as the body — the standard way to drive screenshots, PDFs, scraping, and automation scripts. | `/{apiKey}/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from phantomjscloud_sdk import PhantomjscloudSDK

client = PhantomjscloudSDK({})


# Load a specific renderpageget
renderpageget, err = client.RenderPageGet(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'phantomjscloud_sdk.php';

$client = new PhantomjscloudSDK([]);


// Load a specific renderpageget
[$renderpageget, $err] = $client->RenderPageGet(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/phantomjscloud-sdk/go"

client := sdk.NewPhantomjscloudSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Phantomjscloud_sdk"

client = PhantomjscloudSDK.new({})


# Load a specific renderpageget
renderpageget, err = client.RenderPageGet(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("phantomjscloud_sdk")

local client = sdk.new({})


-- Load a specific renderpageget
local renderpageget, err = client:RenderPageGet(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = PhantomjscloudSDK.test()
const result = await client.RenderPageGet().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = PhantomjscloudSDK.test(None, None)
result, err = client.RenderPageGet(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = PhantomjscloudSDK::test(null, null);
[$result, $err] = $client->RenderPageGet(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.RenderPageGet(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = PhantomjscloudSDK.test(nil, nil)
result, err = client.RenderPageGet(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:RenderPageGet(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the PhantomJsCloud API

- Upstream: [https://phantomjscloud.com/](https://phantomjscloud.com/)
- API docs: [https://phantomjscloud.com/docs/](https://phantomjscloud.com/docs/)

- Commercial service from PhantomJsCloud — sign up at [phantomjscloud.com](https://phantomjscloud.com/) for a personal API key.
- Free tier reportedly allows around 500 pages per day; paid plans raise quotas and remove restrictions.
- A shared demo key (`a-demo-key-with-low-quota-per-ip-address`) is provided for testing only and is throttled per IP.
- See the [PhantomJsCloud documentation](https://phantomjscloud.com/docs/) for the latest terms, pricing, and quota details.

---

Generated from the PhantomJsCloud API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
