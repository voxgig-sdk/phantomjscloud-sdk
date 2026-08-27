
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

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Phantomjscloud',
        slug: "phantomjscloud",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "short": "Array of events that occurred during page load",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
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
          "short": "Array of events that occurred during page load",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "outputAsJson",
          "short": "Return response metadata as JSON including page events, resources loaded, errors, etc.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "overseerScript",
          "short": "JavaScript code for page automation (ES2018 syntax).",
          "type": "`$STRING`"
        },
        {
          "name": "proxy",
          "short": "Proxy configuration: 'anon-any' (anonymous worldwide), 'anon-{country}' (country-specific), 'geo-{country}' (static IP), or 'custom-{url}:{port}:{user}:{pass}'",
          "type": "`$STRING`"
        },
        {
          "name": "renderType",
          "short": "Output format: plainText (web scraping), jpg/jpeg/png (screenshots), pdf (archiving), html (native form), automation (advanced control)",
          "type": "`$STRING`"
        },
        {
          "name": "requestSettings",
          "type": "`$OBJECT`"
        },
        {
          "name": "suppressJson",
          "short": "List of JSON response fields to suppress for reduced verbosity",
          "type": "`$ARRAY`"
        },
        {
          "name": "url",
          "req": true,
          "short": "The URL of the page to render",
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

