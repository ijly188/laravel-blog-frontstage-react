<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Api\SystemUserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Tymon\JWTAuth\Facades\JWTAuth;

class SystemUserController extends Controller
{
    protected $systemUserService;

    public function __construct(SystemUserService $systemUserService)
    {
        $this->systemUserService = $systemUserService;
    }

    // 後台人員-登入
    public function postLogin(Request $request)
    {
        $credentials = $request->only('username', 'password');

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => '帳號或密碼錯誤',
                'data' => ''
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => '登入成功',
            'data' => [
                'token' => $token
            ]
        ], 200);
    }

    public function postLogout()
    {
        JWTAuth::invalidate();

        return response()->json([
            'success' => true,
            'message' => '登出成功',
            'data' => ''
        ], 200);
    }

    public function getAsideMenu()
    {
        if (JWTAuth::user()->is_active) {
            $mainMenuId = JWTAuth::user()->main_menu_id;
            $subMenuId = JWTAuth::user()->sub_menu_id;
            $asideMenu = $this->systemUserService->getMenu(JWTAuth::user(), $mainMenuId, $subMenuId);

            return response()->json([
                'success' => true,
                'message' => '取得Menu',
                'data' => $asideMenu
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => '使用者未啟用',
                'data' => ''
            ], 200);
        }
    }

    public function deliveryManTag()
    {
        $deliveryManTag = $this->systemUserService->getDeliveryManTag();
        if ($deliveryManTag) {
            return response()->json([
                'success' => true,
                'message' => 'success',
                'data' => $deliveryManTag,
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => '查無資料',
                'data' => '',
            ], 200);
        }
    }

    public function createSystemUser(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'eip_member_id' => 'required|string|unique:system_users|max:10',
            'username' => 'required|string|alpha_num|unique:system_users|max:30',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        $message = $this->systemUserService->createSystemUser($data);

        return response()->json([
            'success' => true,
            'message' => '新增後台使用者成功',
            'data' => ''
        ], 200);
    }

    public function getAllSystemUserList($sortTag = 'all')
    {
        if ($sortTag != 'all' && $sortTag != '1' && $sortTag != '2' && $sortTag != '3') {
            return response()->json([
                'success' => false,
                'message' => '格式錯誤',
                'data' => '',
            ], 422);
        }
        $showSystemUserList = $this->systemUserService->getSystemUserList($sortTag);
        if (gettype($showSystemUserList) == 'string') {
            return response()->json([
                'success' => true,
                'message' => $showSystemUserList,
                'data' => '',
            ], 200);
        }
        return response()->json([
            'success' => true,
            'message' => '成功顯示會員列表',
            'data' => $showSystemUserList,
        ], 200);
    }

    public function getSystemUserDetail($id = null)
    {
        if (!is_numeric($id)) {
            return response()->json([
                'success' => false,
                'message' => '格式錯誤',
                'data' => '',
            ], 422);
        }

        $showSystemUserDetail = $this->systemUserService->getSystemUserDetail($id);

        if ($showSystemUserDetail) {
            return response()->json([
                'success' => true,
                'message' => '成功顯示會員詳細資訊',
                'data' => $showSystemUserDetail,
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => '查無此會員',
                'data' => '',
            ], 200);
        }
    }

    public function searchSystemUser($data = '')
    {
        if ($data == '') {
            return response()->json([
                'success' => false,
                'message' => '請輸入搜尋條件',
                'data' => '',
            ], 422);
        } else {
            $data = $this->systemUserService->getSearchSystemUser($data);
            if (gettype($data) == 'string') {
                return response()->json([
                    'success' => true,
                    'message' => $data,
                    'data' => '',
                ], 200);
            }
            return response()->json([
                'success' => true,
                'message' => '成功顯示會員資訊',
                'data' => $data,
            ], 200);
        }
    }

    public function updateSystemUserDetail(Request $request, $systemUserId)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'eip_member_id' => 'required|unique:system_users|string|max:255',
            'username' => 'required|unique:system_users|string|max:255',
            'password' => 'required|string|min:6|confirmed',
            'is_active' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        $message = $this->systemUserService->updateSystemUser($data, $systemUserId);
        
        return response()->json([
            'success' => true,
            'message' => '更新後台使用者成功',
            'data' => ''
        ], 200);
    }

    public function deleteSystemUser(Request $request, $systemUserId)
    {
        $data = $request->all();

        $message = $this->systemUserService->deleteSystemUser($data, $systemUserId);
        
        return response()->json([
            'success' => true,
            'message' => '刪除系統使用者成功',
            'data' => ''
        ], 200);
    }
}
