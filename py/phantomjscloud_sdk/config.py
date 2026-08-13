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
            "active": True,
            "name": "events",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "render_page_get",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "ak-012345-abcde-012345-abcde-012345",
                      "kind": "param",
                      "name": "id",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "request",
                      "orig": "request",
                      "reqd": False,
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "events",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "outputAsJson",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "overseerScript",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "proxy",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "renderType",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "requestSettings",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "suppressJson",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "url",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
        ],
        "name": "render_page_post",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "ak-012345-abcde-012345-abcde-012345",
                      "kind": "param",
                      "name": "id",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
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
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
