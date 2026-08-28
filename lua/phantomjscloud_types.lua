-- Typed models for the Phantomjscloud SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class RenderPageGet
---@field events? table
---@field id? string

---@class RenderPageGetLoadMatch
---@field id string
---@field request? string

---@class RenderPagePost
---@field events? table
---@field id? string
---@field outputAsJson? boolean
---@field overseerScript? string
---@field proxy? string
---@field renderType? string
---@field requestSettings? table
---@field suppressJson? table
---@field url string

---@class RenderPagePostCreateData
---@field id string
---@field events? table
---@field outputAsJson? boolean
---@field overseerScript? string
---@field proxy? string
---@field renderType? string
---@field requestSettings? table
---@field suppressJson? table
---@field url string

local M = {}

return M
