package core

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
						"active": true,
						"name": "events",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
				},
				"name": "render_page_get",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ak-012345-abcde-012345-abcde-012345",
											"kind": "param",
											"name": "id",
											"orig": "api_key",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "request",
											"orig": "request",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "events",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "outputAsJson",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "overseerScript",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "proxy",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "renderType",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "requestSettings",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "suppressJson",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "url",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
				},
				"name": "render_page_post",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ak-012345-abcde-012345-abcde-012345",
											"kind": "param",
											"name": "id",
											"orig": "api_key",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
