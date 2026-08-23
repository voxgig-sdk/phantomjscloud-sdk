<?php
declare(strict_types=1);

// Phantomjscloud SDK configuration

class PhantomjscloudConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Phantomjscloud",
                "slug" => "phantomjscloud",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://phantomjscloud.com/api/browser/v2",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "render_page_get" => [],
                    "render_page_post" => [],
                ],
            ],
            "entity" => [
        'render_page_get' => [
          'fields' => [
            [
              'name' => 'events',
              'short' => 'Array of events that occurred during page load',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'render_page_get',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'ak-012345-abcde-012345-abcde-012345',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'request',
                        'orig' => 'request',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{apiKey}/',
                  'parts' => [
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'apiKey' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'request',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.pageResponses`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'render_page_post' => [
          'fields' => [
            [
              'name' => 'events',
              'short' => 'Array of events that occurred during page load',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'outputAsJson',
              'short' => 'Return response metadata as JSON including page events, resources loaded, errors, etc.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'overseerScript',
              'short' => 'JavaScript code for page automation (ES2018 syntax).',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'proxy',
              'short' => 'Proxy configuration: \'anon-any\' (anonymous worldwide), \'anon-{country}\' (country-specific), \'geo-{country}\' (static IP), or \'custom-{url}:{port}:{user}:{pass}\'',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'renderType',
              'short' => 'Output format: plainText (web scraping), jpg/jpeg/png (screenshots), pdf (archiving), html (native form), automation (advanced control)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'requestSettings',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'suppressJson',
              'short' => 'List of JSON response fields to suppress for reduced verbosity',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'short' => 'The URL of the page to render',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'render_page_post',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'ak-012345-abcde-012345-abcde-012345',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/{apiKey}/',
                  'parts' => [
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'apiKey' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.pageResponses`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return PhantomjscloudFeatures::make_feature($name);
    }
}
