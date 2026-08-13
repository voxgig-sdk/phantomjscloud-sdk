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
# @!attribute [rw] events
#   @return [Array, nil]
RenderPageGet = Struct.new(
  :events,
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
# @!attribute [rw] events
#   @return [Array, nil]
#
# @!attribute [rw] outputAsJson
#   @return [Boolean, nil]
#
# @!attribute [rw] overseerScript
#   @return [String, nil]
#
# @!attribute [rw] proxy
#   @return [String, nil]
#
# @!attribute [rw] renderType
#   @return [String, nil]
#
# @!attribute [rw] requestSettings
#   @return [Hash, nil]
#
# @!attribute [rw] suppressJson
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String]
RenderPagePost = Struct.new(
  :events,
  :outputAsJson,
  :overseerScript,
  :proxy,
  :renderType,
  :requestSettings,
  :suppressJson,
  :url,
  keyword_init: true
)

# Request payload for RenderPagePost#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] events
#   @return [Array, nil]
#
# @!attribute [rw] outputAsJson
#   @return [Boolean, nil]
#
# @!attribute [rw] overseerScript
#   @return [String, nil]
#
# @!attribute [rw] proxy
#   @return [String, nil]
#
# @!attribute [rw] renderType
#   @return [String, nil]
#
# @!attribute [rw] requestSettings
#   @return [Hash, nil]
#
# @!attribute [rw] suppressJson
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String]
RenderPagePostCreateData = Struct.new(
  :id,
  :events,
  :outputAsJson,
  :overseerScript,
  :proxy,
  :renderType,
  :requestSettings,
  :suppressJson,
  :url,
  keyword_init: true
)

