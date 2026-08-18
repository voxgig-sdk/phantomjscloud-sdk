
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Phantomjscloud',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://phantomjscloud.com/api/browser/v2",

    auth: {
      prefix: '',
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
          "name": "events",
          "type": "`$ARRAY`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "request",
                    "orig": "request",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
                "res": "`body.pageResponses`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "render_page_post": {
      "fields": [
        {
          "name": "events",
          "type": "`$ARRAY`"
        },
        {
          "name": "outputAsJson",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "overseerScript",
          "type": "`$STRING`"
        },
        {
          "name": "proxy",
          "type": "`$STRING`"
        },
        {
          "name": "renderType",
          "type": "`$STRING`"
        },
        {
          "name": "requestSettings",
          "type": "`$OBJECT`"
        },
        {
          "name": "suppressJson",
          "type": "`$ARRAY`"
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
                "res": "`body.pageResponses`"
              }
            }
          ]
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

