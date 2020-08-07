<?php

namespace App\Services\Api;

use App\Repositories\Api\SystemRepository;

class SystemService
{
    protected $systemRepository = null;

    public function __construct(SystemRepository $systemRepository)
    {
        $this->systemRepository = $systemRepository;
    }

    public function systemInfo()
    {
        $infos = $this->systemRepository->getSystemConfigs();

        $data = [];

        foreach ($infos as $key => $info) {
            $data[] = [
                $info->config => $info->status,
            ];
        }

        return $data;
    }

    public function updateSystemInfo($request, $updateSystemConfig, $updateSystemConfigStatus)
    {
        $otherService = app()->make(\App\Services\Api\OtherService::class);
        $apiUrl = $otherService->getApiUrl($request->path());

        return $this->systemRepository->updateSystemConfigs($updateSystemConfig, $updateSystemConfigStatus);
    }
}
