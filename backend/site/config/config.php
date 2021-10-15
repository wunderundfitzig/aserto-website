<?php

use Kirby\Http\Remote;
// TODO get this from envornment somehow
$site_url = "https://aserto.de/";
$trigger_deploy_rote = "/trigger-deploy-34890sdva-2gv43q3v0-q34f34-0q34fgq43";

return [
    'pju.webhook-field.hooks' => [
        'netlify_deploy' => [
            'url' => $site_url . $trigger_deploy_rote
        ]
    ],
    'debug' => true,
    'routes' => [
        [
            'pattern' => $trigger_deploy_rote,
            'action'  => function () {
                $github_personal_action_token = "verysecuretoken";
                $url = 'https://api.github.com/repos/wunderundfitzig/aserto-website/dispatches';
                $data = array('event_type' => 'cms_webhook');

                $data = [];
                $options = [
                    'headers' => [
                        'Authorization: token ' . $github_personal_action_token,
                        'Content-Type: application/vnd.github.v3+json'
                    ],
                    'method'  => 'POST',
                    'data'    => json_encode($data)
                ];
                $response = Remote::request($url, $options);
                return $response->content();
            },
            'method' => 'POST'
        ]
    ]
];
