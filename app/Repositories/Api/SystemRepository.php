<?php

namespace App\Repositories\Api;

use App\Entities\SystemConfig;

class SystemRepository
{
    public function getSystemConfigs()
    {
        return SystemConfig::where('status', false)->get();
    }

    public function updateSystemConfigs($updateSystemConfig, $updateSystemConfigStatus)
    {
        return SystemConfig::where('config', $updateSystemConfig)
                            ->update([
                                'status' => $updateSystemConfigStatus
                            ]);
    }
}
