# Typed models for the Phantomjscloud SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class RenderPageGet:
    content: Optional[str] = None
    page_response: Optional[dict] = None
    status_code: Optional[int] = None


@dataclass
class RenderPageGetLoadMatch:
    id: str


@dataclass
class RenderPagePost:
    url: str
    content: Optional[str] = None
    output_as_json: Optional[bool] = None
    overseer_script: Optional[str] = None
    page_response: Optional[dict] = None
    proxy: Optional[str] = None
    render_type: Optional[str] = None
    request_setting: Optional[dict] = None
    status_code: Optional[int] = None
    suppress_json: Optional[list] = None


@dataclass
class RenderPagePostCreateData:
    id: str

