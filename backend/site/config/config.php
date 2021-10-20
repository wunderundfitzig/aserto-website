<?php

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
        ]
    ],
    'debug' => true,
];
