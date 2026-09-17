-- Phantomjscloud SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Phantomjscloud",
      slug = "phantomjscloud",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://phantomjscloud.com/api/browser/v2",
      auth = {
        prefix = "",
        ["in"] = "path",
        name = "apiKey",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["render_page_get"] = {},
        ["render_page_post"] = {},
      },
    },
    entity = {
      ["render_page_get"] = {
        ["fields"] = {
          {
            ["name"] = "events",
            ["short"] = "Array of events that occurred during page load",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "render_page_get",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "ak-012345-abcde-012345-abcde-012345",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "api_key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "request",
                      ["orig"] = "request",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{apiKey}/",
                ["rename"] = {
                  ["param"] = {
                    ["apiKey"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "request",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.pageResponses`",
                },
                ["parts"] = {
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["render_page_post"] = {
        ["fields"] = {
          {
            ["name"] = "events",
            ["short"] = "Array of events that occurred during page load",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "outputAsJson",
            ["short"] = "Return response metadata as JSON including page events, resources loaded, errors, etc.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "overseerScript",
            ["short"] = "JavaScript code for page automation (ES2018 syntax).",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "proxy",
            ["short"] = "Proxy configuration: 'anon-any' (anonymous worldwide), 'anon-{country}' (country-specific), 'geo-{country}' (static IP), or 'custom-{url}:{port}:{user}:{pass}'",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "renderType",
            ["short"] = "Output format: plainText (web scraping), jpg/jpeg/png (screenshots), pdf (archiving), html (native form), automation (advanced control)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "requestSettings",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "suppressJson",
            ["short"] = "List of JSON response fields to suppress for reduced verbosity",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "url",
            ["req"] = true,
            ["short"] = "The URL of the page to render",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "render_page_post",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "ak-012345-abcde-012345-abcde-012345",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "api_key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/{apiKey}/",
                ["rename"] = {
                  ["param"] = {
                    ["apiKey"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.pageResponses`",
                },
                ["parts"] = {
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
