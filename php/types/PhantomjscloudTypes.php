<?php
declare(strict_types=1);

// Typed models for the Phantomjscloud SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** RenderPageGet entity data model. */
class RenderPageGet
{
    public ?string $content = null;
    public ?array $page_response = null;
    public ?int $status_code = null;
}

/** Request payload for RenderPageGet#load. */
class RenderPageGetLoadMatch
{
    public string $id;
}

/** RenderPagePost entity data model. */
class RenderPagePost
{
    public ?string $content = null;
    public ?bool $output_as_json = null;
    public ?string $overseer_script = null;
    public ?array $page_response = null;
    public ?string $proxy = null;
    public ?string $render_type = null;
    public ?array $request_setting = null;
    public ?int $status_code = null;
    public ?array $suppress_json = null;
    public string $url;
}

/** Request payload for RenderPagePost#create. */
class RenderPagePostCreateData
{
    public string $id;
}

