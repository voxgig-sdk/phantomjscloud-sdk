-- Phantomjscloud SDK configuration

local function make_config()
  return {
    main = {
      name = "Phantomjscloud",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://phantomjscloud.com/api/browser/v2",
      auth = {
        prefix = "",
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
            ["active"] = true,
            ["name"] = "events",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 0,
          },
        },
        ["name"] = "render_page_get",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "ak-012345-abcde-012345-abcde-012345",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "api_key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "request",
                      ["orig"] = "request",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{apiKey}/",
                ["parts"] = {
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["apiKey"] = "id",
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["render_page_post"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "events",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "outputAsJson",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "overseerScript",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "proxy",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "renderType",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "requestSettings",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "suppressJson",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "url",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
        },
        ["name"] = "render_page_post",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "ak-012345-abcde-012345-abcde-012345",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "api_key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/{apiKey}/",
                ["parts"] = {
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["apiKey"] = "id",
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
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
