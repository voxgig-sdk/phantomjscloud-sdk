<?php
declare(strict_types=1);

// Phantomjscloud SDK utility: result_body

class PhantomjscloudResultBody
{
    public static function call(PhantomjscloudContext $ctx): ?PhantomjscloudResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
