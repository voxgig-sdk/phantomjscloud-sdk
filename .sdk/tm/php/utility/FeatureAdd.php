<?php
declare(strict_types=1);

// Phantomjscloud SDK utility: feature_add

class PhantomjscloudFeatureAdd
{
    public static function call(PhantomjscloudContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
