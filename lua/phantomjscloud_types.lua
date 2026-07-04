-- Typed models for the Phantomjscloud SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class RenderPageGet
---@field content? string
---@field page_response? table
---@field status_code? number

---@class RenderPageGetLoadMatch
---@field id string

---@class RenderPagePost
---@field content? string
---@field output_as_json? boolean
---@field overseer_script? string
---@field page_response? table
---@field proxy? string
---@field render_type? string
---@field request_setting? table
---@field status_code? number
---@field suppress_json? table
---@field url string

---@class RenderPagePostCreateData
---@field id string

local M = {}

return M
