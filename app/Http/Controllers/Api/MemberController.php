<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Tymon\JWTAuth\Facades\JWTAuth;

use App\Services\Api\MemberService;

class MemberController extends Controller
{
    protected $memberService;

    public function __construct(MemberService $memberService)
    {
        $this->memberService = $memberService;
    }

    // 會員註冊發送驗證碼
    public function sendPhoneSms(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|unique:members|regex:/^[09]{2}[0-9]{8}$/',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        // 發送會員手機驗證碼 (純數字 6碼)
        $message = $this->memberService->sendPhoneSmsCode($request->phone);

        return response()->json([
            'success' => $message == 'success' ? true : false,
            'message' => $message == 'success' ? '發送成功' : '驗證碼發送頻繁，請過' . $message . '秒再試。',
            'data' => ''
        ], 200);
    }

    // 確認會員手機驗證碼是否相符
    public function checkRegisterCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|unique:members|regex:/^[09]{2}[0-9]{8}$/',
            'validator_code' => 'required|regex:/^[0-9]{6}$/'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        $message = $this->memberService->checkValidatorCode($request->phone, $request->validator_code);

        return response()->json([
            'success' => $message == 'success' ? true : false,
            'message' => $message == 'success' ? '進入設定帳戶資料頁面' : '手機或驗證碼輸入錯誤',
            'data' => ''
        ], 200);
    }

    public function registerMember(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'email' => 'required|string|alpha_num|unique:members|max:30',
            'name' => 'string|max:30',
            'password' => 'required|string|min:6|confirmed',
            'phone' => 'required|regex:/^[09]{2}[0-9]{8}$/|unique:members',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }
        
        $this->memberService->registerMember($data);

        return response()->json([
            'success' => true,
            'message' => '註冊成功',
            'data' => ''
        ], 200);
    }

    // 寄送忘記密碼驗證碼
    public function sendForgotPasswordSms(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'username' => 'required|exists:members',
            'phone' => 'required|exists:members',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        return $this->memberService->sendForgotSmsCode($data);
    }

    // 確認忘記密碼資料驗證碼
    public function checkForgotPasswordCode(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'username' => 'required|exists:members',
            'phone' => 'required|exists:members',
            'validator_code' => [
                'required',
                Rule::exists('phone_validates')->where(function ($query) use ($data) {
                    $query->where('phone', $data['phone'])->where('validator_code', $data['validator_code']);
                })
            ]
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        $message = $this->memberService->checkForgotPasswordCode($request->phone, $request->validator_code);

        return response()->json([
            'success' => $message == 'success' ? true : false,
            'message' => $message == 'success' ? '資料正確驗證成功進入重設密碼頁' : '查無此帳號',
            'data' => ''
        ], 200);
    }

    // 重設密碼
    public function resetPassword(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'username' => 'required|exists:members',
            'phone' => 'required|exists:members',
            'password' => 'required|string|min:6|confirmed',
            'validator_code' => [
                'required',
                Rule::exists('phone_validates')->where(function ($query) use ($data) {
                    $query->where('phone', $data['phone'])->where('validator_code', $data['validator_code']);
                })
            ]
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        // 修改會員密碼
        $message = $this->memberService->sendResetPasswordInfo($data);

        return response()->json([
            'success' => $message == 'success' ? true : false,
            'message' => $message == 'success' ? '重設密碼成功' : '帳號輸入錯誤',
            'data' => ''
        ], 200);
    }

    // 前台人員-登入
    public function postLogin(Request $request)
    {
        $credentials = $request->only('email', 'password');

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

    public function getAllMemberList($sortTag = 'all')
    {
        if ($sortTag != 'all' && $sortTag != '1' && $sortTag != '2' && $sortTag != '3') {
            return response()->json([
                'success' => false,
                'message' => '格式錯誤',
                'data' => '',
            ], 422);
        }
        $showMemberList = $this->memberService->getMemberList($sortTag);
        if (gettype($showMemberList) == 'string') {
            return response()->json([
                'success' => true,
                'message' => $showMemberList,
                'data' => '',
            ], 200);
        }
        return response()->json([
            'success' => true,
            'message' => '成功顯示會員列表',
            'data' => $showMemberList,
        ], 200);
    }

    public function getMemberDetail($id = null)
    {
        if (!is_numeric($id)) {
            return response()->json([
                'success' => false,
                'message' => '格式錯誤',
                'data' => '',
            ], 422);
        }

        $showMemberDetail = $this->memberService->getMemberDetail($id);

        if ($showMemberDetail) {
            return response()->json([
                'success' => true,
                'message' => '成功顯示會員詳細資訊',
                'data' => $showMemberDetail,
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => '查無此會員',
                'data' => '',
            ], 200);
        }
    }

    public function searchMember($data = '')
    {
        if ($data == '') {
            return response()->json([
                'success' => false,
                'message' => '請輸入搜尋條件',
                'data' => '',
            ], 422);
        } else {
            $data = $this->memberService->getSearchMember($data);
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

    public function updateMemberDetail(Request $request)
    {
        $memberData = $this->memberService->updateMemberName($request, JWTAuth::user()->id);
        if (gettype($memberData) == 'string') {
            return response()->json([
                'success' => false,
                'message' => $memberData,
                'data' => '',
            ], 422);
        }
        if ($memberData) {
            return response()->json([
                'success' => true,
                'message' => '成功更新會員資料',
                'data' => '',
            ], 200);
        }
        return response()->json([
            'success' => true,
            'message' => '更新會員資料失敗',
            'data' => '',
        ], 200);
    }

    public function deleteMember(Request $request)
    {
        $memberData = $this->memberService->deleteMember($request, JWTAuth::user()->id);
        if (gettype($memberData) == 'string') {
            return response()->json([
                'success' => false,
                'message' => $memberData,
                'data' => '',
            ], 422);
        }
        if ($memberData) {
            return response()->json([
                'success' => true,
                'message' => '成功更新會員資料',
                'data' => '',
            ], 200);
        }
        return response()->json([
            'success' => true,
            'message' => '更新會員資料失敗',
            'data' => '',
        ], 200);
    }
}
