<?php
declare(strict_types=1);

// Phantomjscloud SDK utility: prepare_body

class PhantomjscloudPrepareBody
{
    public static function call(PhantomjscloudContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
