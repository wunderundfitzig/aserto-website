<?php

\Beebmx\KirbyEnv::load(dirname(dirname(__DIR__)));

return [
    'api' => [
        'basicAuth' => true,
        'allowInsecure' => true,
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
        'assetFolder' => 'instagram',
        'mediaFolder' => 'media/instagram',
        'db' => 'instagram.json',
    ],
    'debug' => true,
];
