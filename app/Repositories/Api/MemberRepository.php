<?php

namespace App\Repositories\Api;

use App\Entities\Article;
use App\Entities\Member;
use App\Entities\PhoneValidate;
use App\Entities\PasswordReset;
use App\Entities\EmailValidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MemberRepository
{
    public function checkPhoneCodeTime($phone)
    {
        $record = PhoneValidate::where('phone', $phone)
            ->orderBy('updated_at', 'desc')
            ->first();

        if ($record) {
            $nowTime = strtotime("now");
            $expiredTime = strtotime($record->updated_at);
            $permitTime = $nowTime - $expiredTime;
            return $permitTime <= 300 ? [true, $permitTime] : [false, 0];
        } else {
            return [false, 0];
        }
    }

    public function createPhoneCode($phone, $code)
    {
        PhoneValidate::updateOrCreate(
            ['phone' => $phone],
            ['validator_code' => $code]
        );
    }

    public function checkPhoneValidatorCode($phone, $validatorsCode)
    {
        return PhoneValidate::where('phone', $phone)
            ->where('validator_code', $validatorsCode)
            ->orderBy('updated_at', 'desc')
            ->first();
    }

    public function checkExistsUser($params)
    {
        return Member::where('username', $params['username'])
            ->where('phone', $params['phone'])
            ->first();
    }

    public function createForgotPasswordRecord($phone, $code)
    {
        PasswordReset::updateOrCreate(
            ['phone' => $phone],
            ['forgot_password_code' => $code]
        );
    }

    public function resetPassword($params)
    {
        Member::where('username', $params['username'])
            ->where('phone', $params['phone'])
            ->update([
                'password' => Hash::make($params['password'])
            ]);

        PhoneValidate::where('phone', $params['phone'])->delete();
        PasswordReset::where('phone', $params['phone'])->delete();
    }

    public function setRegisterInfo($params)
    {
        Member::create([
            'username' => $params['username'],
            'password' => Hash::make($params['password']),
            'register_type' => 'web',
            'name' => isset($params['name']) ? $params['name'] : '',
            'picture_url' => '[]',
            'email' => isset($params['email']) ? $params['email'] : '',
            'phone' => $params['phone'],
            'gender' => isset($params['sex']) ? $params['sex'] : '',
            'email_validated' => 0,
            'email_notify' => 0,
            'app_notify' => 0,
            'coupon' => '[]',
            'live_address' => '[]',
            'transport_address' => '[]',
            'points' => 0,
            'member_level' => 'silver',
            'is_active' => 1,
        ]);

        PhoneValidate::where('phone', $params['phone'])->delete();
    }
    
    public function getMemberList()
    {
        return Member::orderBy('id')
                        ->get();
    }

    public function searchMemberData($data)
    {
        return Member::where('username', $data)
                        ->orWhere('name', $data)
                        ->orWhere('phone', $data)
                        ->first();
    }

    public function getMemberById($memberId)
    {
        return Member::where('id', $memberId)->first();
    }

    public function updateName($memberId, $type, $data, $ip, $userId, $apiUrl)
    {
        $member = $this->getMemberById($memberId);

        switch ($type) {
            case 'name':
                $updateName = Member::where('id', $memberId)
                        ->update([
                            'name' => $data,
                        ]);
                break;
            case 'phone':
                $updateName = Member::where('id', $memberId)
                        ->update([
                            'phone' => $data,
                        ]);
                break;
            case 'email':
                $updateName = Member::where('id', $memberId)
                        ->update([
                            'email' => $data,
                        ]);
                break;
        }

        $newMember = $this->getMemberById($memberId);

        return $updateName;
    }

    public function deleteMemberById($userId)
    {
        $member = $this->getMemberById($userId);
        
        return Member::where('id', $userId)
                        ->update([
                            'is_active' => '0'
                        ]);
    }
}
