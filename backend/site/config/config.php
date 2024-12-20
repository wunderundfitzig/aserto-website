<?php

\Beebmx\KirbyEnv::load(dirname(dirname(__DIR__)));

return [
    'api' => [
        'basicAuth' => true,
        'allowInsecure' => $_ENV['ENVIRONMENT'] == 'development'
    ],
    'routes' => [
        [
            'pattern' => 'images/size/(:num)/assets/(:all)',
            'action'  => function (int $size, string $path) {
                $image = asset("/assets/" . $path);
                if (!$image) return null;
                $originalSize = $image->width();
                $newSize = min($size, $originalSize);
                $resized = $image->resize($newSize);
                return go($resized->url());
            }
        ],
        [
            'pattern' => 'images/size/(:num)/(:all)',
            'action'  => function (int $size, string $path) {
                $image = image('/' . $path);
                if (!$image) return null;
                $originalSize = $image->width();
                $newSize = min($size, $originalSize);
                $resized = $image->resize($newSize);
                return go($resized->url());
            }
        ]
    ],
    'pju.webhook-field.hooks' => [
        'github_deploy_action' => [
            'url' => 'https://publicactiontrigger.azurewebsites.net/api/dispatches/wunderundfitzig/aserto-website',
            'payload' => function () {
                return ['event_type' => 'cms_webhook'];
            }
        ],
    ],
    'debug' => $_ENV['ENVIRONMENT'] == 'development',
];
