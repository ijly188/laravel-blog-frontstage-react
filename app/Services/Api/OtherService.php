<?php

namespace App\Services\Api;

class OtherService
{
    public function getApiUrl($fullUrl)
    {
        $apiUrl = trim($fullUrl, 'api/');
        $findString = strpos($apiUrl, '/');
        if ($findString) {
            $apiUrl = substr($apiUrl, 0, $findString);
        }

        return $apiUrl;
    }
}
