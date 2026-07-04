// Typed models for the Phantomjscloud SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface RenderPageGet {
  content?: string
  page_response?: Record<string, any>
  status_code?: number
}

export interface RenderPageGetLoadMatch {
  id: string
}

export interface RenderPagePost {
  content?: string
  output_as_json?: boolean
  overseer_script?: string
  page_response?: Record<string, any>
  proxy?: string
  render_type?: string
  request_setting?: Record<string, any>
  status_code?: number
  suppress_json?: any[]
  url: string
}

export interface RenderPagePostCreateData {
  id: string
}

