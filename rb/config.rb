# Phantomjscloud SDK configuration

module PhantomjscloudConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Phantomjscloud",
        "slug" => "phantomjscloud",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://phantomjscloud.com/api/browser/v2",
        "auth" => {
          "prefix" => "",
          "in" => "path",
          "name" => "apiKey",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "render_page_get" => {},
          "render_page_post" => {},
        },
      },
      "entity" => {
        "render_page_get" => {
          "fields" => [
            {
              "name" => "events",
              "short" => "Array of events that occurred during page load",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "render_page_get",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "ak-012345-abcde-012345-abcde-012345",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "request",
                        "orig" => "request",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{apiKey}/",
                  "rename" => {
                    "param" => {
                      "apiKey" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                      "request",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.pageResponses`",
                  },
                  "parts" => [
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "render_page_post" => {
          "fields" => [
            {
              "name" => "events",
              "short" => "Array of events that occurred during page load",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "outputAsJson",
              "short" => "Return response metadata as JSON including page events, resources loaded, errors, etc.",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "overseerScript",
              "short" => "JavaScript code for page automation (ES2018 syntax).",
              "type" => "`$STRING`",
            },
            {
              "name" => "proxy",
              "short" => "Proxy configuration: 'anon-any' (anonymous worldwide), 'anon-{country}' (country-specific), 'geo-{country}' (static IP), or 'custom-{url}:{port}:{user}:{pass}'",
              "type" => "`$STRING`",
            },
            {
              "name" => "renderType",
              "short" => "Output format: plainText (web scraping), jpg/jpeg/png (screenshots), pdf (archiving), html (native form), automation (advanced control)",
              "type" => "`$STRING`",
            },
            {
              "name" => "requestSettings",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "suppressJson",
              "short" => "List of JSON response fields to suppress for reduced verbosity",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "url",
              "req" => true,
              "short" => "The URL of the page to render",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "render_page_post",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "ak-012345-abcde-012345-abcde-012345",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "api_key",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/{apiKey}/",
                  "rename" => {
                    "param" => {
                      "apiKey" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.pageResponses`",
                  },
                  "parts" => [
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    PhantomjscloudFeatures.make_feature(name)
  end
end
