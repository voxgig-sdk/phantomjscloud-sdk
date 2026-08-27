// Typed models for the Phantomjscloud SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface RenderPageGet {
  events?: any[]
  id?: string
}

export interface RenderPageGetLoadMatch {
  id: string
}

export interface RenderPagePost {
  events?: any[]
  id?: string
  outputAsJson?: boolean
  overseerScript?: string
  proxy?: string
  renderType?: string
  requestSettings?: Record<string, any>
  suppressJson?: any[]
  url: string
}

export interface RenderPagePostCreateData {
  id: string
  events?: any[]
  outputAsJson?: boolean
  overseerScript?: string
  proxy?: string
  renderType?: string
  requestSettings?: Record<string, any>
  suppressJson?: any[]
  url: string
}

