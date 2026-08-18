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
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://phantomjscloud.com/api/browser/v2",
        "auth" => {
          "prefix" => "",
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
              "type" => "`$ARRAY`",
            },
          ],
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
                  "parts" => [
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "apiKey" => "id",
                    },
                  },
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
              "type" => "`$ARRAY`",
            },
            {
              "name" => "outputAsJson",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "overseerScript",
              "type" => "`$STRING`",
            },
            {
              "name" => "proxy",
              "type" => "`$STRING`",
            },
            {
              "name" => "renderType",
              "type" => "`$STRING`",
            },
            {
              "name" => "requestSettings",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "suppressJson",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "url",
              "req" => true,
              "type" => "`$STRING`",
            },
          ],
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
                  "parts" => [
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "apiKey" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.pageResponses`",
                  },
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
