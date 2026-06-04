
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
          "name": "content",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "page_response",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 1
        },
        {
          "name": "status_code",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 2
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "request",
                    "orig": "request",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
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
          "name": "content",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "output_as_json",
          "req": false,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 1
        },
        {
          "name": "overseer_script",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "page_response",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 3
        },
        {
          "name": "proxy",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "render_type",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "request_setting",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 6
        },
        {
          "name": "status_code",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "suppress_json",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 8
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 9
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
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

