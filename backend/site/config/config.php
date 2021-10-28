<?php

\Beebmx\KirbyEnv::load(dirname(dirname(__DIR__)));

return [
    'api' => [
        'basicAuth' => true,
        'allowInsecure' => true,
    ],
    'routes' => [
        [
            'pattern' => 'instagram/feed',
            'action'  => function () {
                $feed = instagramFeed();
                return $feed->data();
            }
        ],
        [
            'pattern' => 'images/size/(:num)/(:all)',
            'action'  => function (int $size, string $path) {
                $image = asset($path);
                $resied = $image->resize($size);
                return go($resied->url());
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
    'genxbe.instagram' => [
        'client_id' => '423160286005833',
        'client_secret' => $_ENV['INSTAGRAM_CLIENT_SECRET'],
    ],
    'debug' => true,
];
