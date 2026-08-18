# Phantomjscloud SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Phantomjscloud",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://phantomjscloud.com/api/browser/v2",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "render_page_get": {},
                "render_page_post": {},
            },
        },
        "entity": {
      "render_page_get": {
        "fields": [
          {
            "name": "events",
            "type": "`$ARRAY`",
          },
        ],
        "name": "render_page_get",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "ak-012345-abcde-012345-abcde-012345",
                      "kind": "param",
                      "name": "id",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "request",
                      "orig": "request",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{apiKey}/",
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "apiKey": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "request",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.pageResponses`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "render_page_post": {
        "fields": [
          {
            "name": "events",
            "type": "`$ARRAY`",
          },
          {
            "name": "outputAsJson",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "overseerScript",
            "type": "`$STRING`",
          },
          {
            "name": "proxy",
            "type": "`$STRING`",
          },
          {
            "name": "renderType",
            "type": "`$STRING`",
          },
          {
            "name": "requestSettings",
            "type": "`$OBJECT`",
          },
          {
            "name": "suppressJson",
            "type": "`$ARRAY`",
          },
          {
            "name": "url",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "render_page_post",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "ak-012345-abcde-012345-abcde-012345",
                      "kind": "param",
                      "name": "id",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/{apiKey}/",
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "apiKey": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.pageResponses`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
