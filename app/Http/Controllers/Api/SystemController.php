<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Api\SystemService;

class SystemController extends Controller
{
    protected $systemService;

    public function __construct(SystemService $systemService)
    {
        $this->systemService = $systemService;
    }

    // 取得服務
    public function getServiceStatus()
    {
        return response()->json([
            'success' => true,
            'message' => '取得系統設定',
            'data' => $this->systemService->systemInfo(),
        ], 200);
    }

    // 更新服務
    public function updateServiceStatus(Request $request)
    {
        $updateSystemConfig = $request->systemconfig;
        $updateSystemConfigStatus = $request->systemconfigstatus;
        
        $systemInfo = $this->systemService->updateSystemInfo($request, $updateSystemConfig, $updateSystemConfigStatus);
        
        if ($systemInfo) {
            return response()->json([
                'success' => true,
                'message' => '更新系統設定成功',
                'data' => '',
            ], 200);
        }
        return response()->json([
            'success' => true,
            'message' => '更新系統設定失敗',
            'data' => '',
        ], 200);
    }
}
