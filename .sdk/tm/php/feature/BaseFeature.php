<?php
declare(strict_types=1);

// Phantomjscloud SDK base feature

class PhantomjscloudBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(PhantomjscloudContext $ctx, array $options): void {}
    public function PostConstruct(PhantomjscloudContext $ctx): void {}
    public function PostConstructEntity(PhantomjscloudContext $ctx): void {}
    public function SetData(PhantomjscloudContext $ctx): void {}
    public function GetData(PhantomjscloudContext $ctx): void {}
    public function GetMatch(PhantomjscloudContext $ctx): void {}
    public function SetMatch(PhantomjscloudContext $ctx): void {}
    public function PrePoint(PhantomjscloudContext $ctx): void {}
    public function PreSpec(PhantomjscloudContext $ctx): void {}
    public function PreRequest(PhantomjscloudContext $ctx): void {}
    public function PreResponse(PhantomjscloudContext $ctx): void {}
    public function PreResult(PhantomjscloudContext $ctx): void {}
    public function PreDone(PhantomjscloudContext $ctx): void {}
    public function PreUnexpected(PhantomjscloudContext $ctx): void {}
}
