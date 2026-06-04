# Phantomjscloud SDK configuration


def make_config():
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
            "name": "content",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "page_response",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "status_code",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "render_page_get",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "request",
                      "orig": "request",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "render_page_post": {
        "fields": [
          {
            "name": "content",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "output_as_json",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "overseer_script",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "page_response",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "proxy",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "render_type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "request_setting",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "status_code",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "suppress_json",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "url",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "render_page_post",
        "op": {
          "create": {
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
                      "active": True,
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
