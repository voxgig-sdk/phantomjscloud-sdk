# frozen_string_literal: true

# Typed models for the Phantomjscloud SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# RenderPageGet entity data model.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] page_response
#   @return [Hash, nil]
#
# @!attribute [rw] status_code
#   @return [Integer, nil]
RenderPageGet = Struct.new(
  :content,
  :page_response,
  :status_code,
  keyword_init: true
)

# Request payload for RenderPageGet#load.
#
# @!attribute [rw] id
#   @return [String]
RenderPageGetLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# RenderPagePost entity data model.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] output_as_json
#   @return [Boolean, nil]
#
# @!attribute [rw] overseer_script
#   @return [String, nil]
#
# @!attribute [rw] page_response
#   @return [Hash, nil]
#
# @!attribute [rw] proxy
#   @return [String, nil]
#
# @!attribute [rw] render_type
#   @return [String, nil]
#
# @!attribute [rw] request_setting
#   @return [Hash, nil]
#
# @!attribute [rw] status_code
#   @return [Integer, nil]
#
# @!attribute [rw] suppress_json
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String]
RenderPagePost = Struct.new(
  :content,
  :output_as_json,
  :overseer_script,
  :page_response,
  :proxy,
  :render_type,
  :request_setting,
  :status_code,
  :suppress_json,
  :url,
  keyword_init: true
)

# Request payload for RenderPagePost#create.
#
# @!attribute [rw] id
#   @return [String]
RenderPagePostCreateData = Struct.new(
  :id,
  keyword_init: true
)

