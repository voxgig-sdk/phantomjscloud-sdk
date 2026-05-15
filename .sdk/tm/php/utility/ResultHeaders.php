<?php
declare(strict_types=1);

// Phantomjscloud SDK utility: result_headers

class PhantomjscloudResultHeaders
{
    public static function call(PhantomjscloudContext $ctx): ?PhantomjscloudResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
