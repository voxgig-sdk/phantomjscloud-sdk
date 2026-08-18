package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Phantomjscloud",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://phantomjscloud.com/api/browser/v2",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"render_page_get": map[string]any{},
				"render_page_post": map[string]any{},
			},
		},
		"entity": map[string]any{
			"render_page_get": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "events",
						"type": "`$ARRAY`",
					},
				},
				"name": "render_page_get",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "ak-012345-abcde-012345-abcde-012345",
											"kind": "param",
											"name": "id",
											"orig": "api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "request",
											"orig": "request",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{apiKey}/",
								"parts": []any{
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"apiKey": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"request",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.pageResponses`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"render_page_post": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "events",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "outputAsJson",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "overseerScript",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "proxy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "renderType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "requestSettings",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "suppressJson",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "render_page_post",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "ak-012345-abcde-012345-abcde-012345",
											"kind": "param",
											"name": "id",
											"orig": "api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/{apiKey}/",
								"parts": []any{
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"apiKey": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.pageResponses`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
