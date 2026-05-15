<?php
declare(strict_types=1);

// Phantomjscloud SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class PhantomjscloudMakeContext
{
    public static function call(array $ctxmap, ?PhantomjscloudContext $basectx): PhantomjscloudContext
    {
        return new PhantomjscloudContext($ctxmap, $basectx);
    }
}
