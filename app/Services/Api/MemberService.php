<?php

namespace App\Services\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Api\MemberRepository;
use App\Support\Collection;

class MemberService
{
    protected $memberRepository;

    public function __construct(MemberRepository $memberRepository)
    {
        $this->memberRepository = $memberRepository;
    }

    public function registerMember($params)
    {
        $this->memberRepository->setRegisterInfo($params);
    }

    // 寄送註冊驗證簡訊
    public function sendPhoneSmsCode($phone)
    {
        // 檢查發送手機驗證碼頻率 (5分鐘內不得再發送)
        $checkTime = $this->memberRepository->checkPhoneCodeTime($phone);

        if ($checkTime[0]) {
            return 300 - $checkTime[1];
        }

        $sendService = app()->make(\App\Services\OtherServ\SendsService::class);

        $code = '';

        for ($i = 0; $i < 6; $i++) {
            $tmpData = rand(0, 9);
            $code = $code . $tmpData;
        }

        $this->memberRepository->createPhoneCode($phone, $code);

        $sendService->sendSms($phone, $code, '您的註冊驗證碼為：');

        return 'success';
    }

    // 確認會員手機是否相符
    public function checkValidatorCode($phone, $validatorCode)
    {
        return $this->memberRepository->checkPhoneValidatorCode($phone, $validatorCode) ? 'success' : false;
    }

    // 寄送忘記密碼驗證簡訊
    public function sendForgotSmsCode($params)
    {
        if ($this->memberRepository->checkExistsUser($params)) {
            $checkTime = $this->memberRepository->checkPhoneCodeTime($params['phone']);

            if ($checkTime[0]) {
                $time = 300 - $checkTime[1];
                return response()->json([
                    'success' => false,
                    'message' => '驗證碼發送頻繁，請過' . $time . '秒再試。',
                    'data' => ''
                ]);
            } else {
                $sendService = app()->make(\App\Services\OtherServ\SendsService::class);
                $code = '';
                for ($i = 0; $i < 6; $i++) {
                    $rand = rand(0, 9);
                    $code .= $rand;
                }

                $this->memberRepository->createPhoneCode($params['phone'], $code);
                $this->memberRepository->createForgotPasswordRecord($params['phone'], $code);
                $sendService->sendSms($params['phone'], $code, $params['username'] . '您的忘記密碼手機驗證碼為：');
                return response()->json([
                    'success' => true,
                    'message' => '發送成功',
                    'data' => ''
                ]);
            }
        }

        return response()->json([
            'success' => false,
            'message' => '會員資訊錯誤',
            'data' => ''
        ]);
    }

    // 寄送忘記密碼會員資料
    public function checkForgotPasswordCode($phone, $validatorCode)
    {
        return $this->memberRepository->checkPhoneValidatorCode($phone, $validatorCode) ? 'success' : false;
    }

    // 重設會員密碼
    public function sendResetPasswordInfo($params)
    {
        if ($this->memberRepository->checkExistsUser($params)) {
            $this->memberRepository->resetPassword($params);
            return 'success';
        } else {
            return false;
        }
    }

    public function getMemberList($sortTag)
    {
        $memberData = $this->memberRepository->getMemberList();
        $finalData = [];

        foreach ($memberData as $key => $memberInfo) {
            $created_at = '';
            
            $getMemberData[] = [
                'id' => $memberInfo->id,
                'name' => $memberInfo->name,
                'username' => $memberInfo->username,
                'phone' => $memberInfo->phone,
                'member_level' => $memberInfo->member_level,
                'created_at' => date('Y-m-d', strtotime($created_at)),
            ];
        }
        //根據篩選器篩選資料
        $collectMemberData = $this->sortCollection($getMemberData, $sortTag);
        $pagination = [
            'current_page' => $collectMemberData->currentpage(),
            'total_page' => $collectMemberData->lastPage(),
            'has_pre' => $collectMemberData->currentPage() == 1 ? false : $collectMemberData->currentPage() - 1,
            'has_next' => $collectMemberData->currentPage() == $collectMemberData->lastPage() ? false : $collectMemberData->currentPage() + 1,
        ];
        if ($collectMemberData->currentpage() > $collectMemberData->lastPage()) {
            return '超出頁數';
        }
        // 取得經過分頁函數的data資訊
        $finalData = $collectMemberData->items();
        //除了第一頁的data有去除key值，其他頁都沒有，所以要再做以下處理
        if ($collectMemberData->currentpage() != 1) {
            // 利用values()去除排序完的key，不然吐出來的data會有key值
            $finalData = $collectMemberData->values();
        }
        $total = [
            'pagination' => $pagination,
            'member_list' => $finalData,
        ];
        return $total;
    }

    public function sortCollection($memberData, $sortTag)
    {
        switch ($sortTag) {
            // 依照會員編號(舊到新)
            case 'all':
                return (new Collection($memberData))->sortByDesc('id')->values()->paginate(15);
                break;
            // 依照會員編號(新到舊)
            case '1':
                return (new Collection($memberData))->sortBy('id')->values()->paginate(15);
                break;
            // 依照消費金額（高到低)
            case '2':
                return (new Collection($memberData))->sortByDesc('totalCost')->values()->paginate(15);
                break;
            // 依照累積訂單數（多到少)
            case '3':
                return (new Collection($memberData))->sortByDesc('total_order')->values()->paginate(15);
                break;
        }
    }

    public function getMemberDetail($id)
    {
        //傳入會員Id，顯示會員資訊
        $getMember = $this->memberRepository->getMemberById($id);

        if ($getMember == null) {
            return false;
        } else {
            return $showMember = [
                'id' => $getMember->id,
                'name' => $getMember->name,
                'username' => $getMember->username,
                'phone' => $getMember->phone,
                'member_level' => $getMember->member_level,
                'email' => $getMember->email,
            ];
        }
    }

    public function getSearchMember($data)
    {
        $memberInfo = $this->memberRepository->searchMemberData($data);
        if ($memberInfo == null) {
            return '查無資訊';
        } else {
            $created_at = '';
            
            return $getMemberData[] = [
                'id' => $memberInfo->id,
                'name' => $memberInfo->name,
                'username' => $memberInfo->username,
                'phone' => $memberInfo->phone,
                'member_level' => $memberInfo->member_level,
                'created_at' => date('Y-m-d', strtotime($created_at)),
            ];
        }
    }

    public function updateMemberName(Request $request, $userId)
    {
        $otherService = app()->make(\App\Services\Api\OtherService::class);
        $apiUrl = $otherService->getApiUrl($request->path());

        switch ($request->type) {
            case 'name':
                $validator = validator::make($request->all(), [
                    'data' => 'required|string|max:10',
                ]);
                break;
            case 'phone':
                $validator = validator::make($request->all(), [
                    'data' => 'required|string|unique:members,phone|regex:/^[09]{2}[0-9]{8}$/',
                ]);
                break;
            case 'email':
                $validator = validator::make($request->all(), [
                    'data' => 'required|string|unique:members,email|email',
                ]);
                break;
        }
        if ($validator->fails()) {
            return $validator->errors()->first();
        }
        $memberName = $this->memberRepository->updateName($request->memberId, $request->type, $request->data, $request->ip(), $userId, $apiUrl);
        return $memberName;
    }

    public function deleteMember(Request $request, $userId)
    {
        $otherService = app()->make(\App\Services\Api\OtherService::class);
        $apiUrl = $otherService->getApiUrl($request->path());

        return $this->memberRepository->deleteMemberById($request->memberId);
    }
}
