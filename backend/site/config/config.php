<?php

use Kirby\Http\Remote;

\Beebmx\KirbyEnv::load(dirname(dirname(__DIR__)));

$url = "https://cms.aserto.de";
$trigger_deploy_route = "/trigger-deploy-" . $_ENV['TRIGGER_DEPLOY_KEY'];

return [
    'api' => [
        'basicAuth' => true,
        'allowInsecure' => true
    ],
    'pju.webhook-field.hooks' => [
        'github_deploy_action' => [
            'url' => $url . $trigger_deploy_route
        ]
    ],
    'debug' => true,
    'routes' => [
        [
            'pattern' => $trigger_deploy_route,
            'action'  => function () {
                $url = 'https://api.github.com/repos/wunderundfitzig/aserto-website/dispatches';
                $data = array('event_type' => 'cms_webhook');
                $options = [
                    'headers' => [
                        'Authorization: token ' . $_ENV['GITHUB_ACCESS_TOKEN'],
                        'user-agent: kirby-cms-backend',
                        'Content-Type: application/vnd.github.v3+json'
                    ],
                    'method'  => 'POST',
                    'data'    => json_encode($data)
                ];
                $response = Remote::request($url, $options);
                if ($response->code() === 204) {
                    return ['status' => 204];
                }
                return $response->content();
            },
            'method' => 'POST'
        ]
    ]
];
