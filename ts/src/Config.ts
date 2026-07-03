
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://phantomjscloud.com/api/browser/v2',

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      render_page_get: {
      },

      render_page_post: {
      },

    }
  }


  entity = {
    "render_page_get": {
      "fields": [
        {
          "active": true,
          "name": "content",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "page_response",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 1
        },
        {
          "active": true,
          "name": "status_code",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 2
        }
      ],
      "name": "render_page_get",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "example": "ak-012345-abcde-012345-abcde-012345",
                    "kind": "param",
                    "name": "id",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "request",
                    "orig": "request",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/{apiKey}/",
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "apiKey": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "request"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "render_page_post": {
      "fields": [
        {
          "active": true,
          "name": "content",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "output_as_json",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 1
        },
        {
          "active": true,
          "name": "overseer_script",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "page_response",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 3
        },
        {
          "active": true,
          "name": "proxy",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "render_type",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "request_setting",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 6
        },
        {
          "active": true,
          "name": "status_code",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 7
        },
        {
          "active": true,
          "name": "suppress_json",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 8
        },
        {
          "active": true,
          "name": "url",
          "req": true,
          "type": "`$STRING`",
          "index$": 9
        }
      ],
      "name": "render_page_post",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "example": "ak-012345-abcde-012345-abcde-012345",
                    "kind": "param",
                    "name": "id",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "POST",
              "orig": "/{apiKey}/",
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "apiKey": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

