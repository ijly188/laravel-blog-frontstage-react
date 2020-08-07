<?php

namespace App\Repositories\Api;

use App\Entities\MainMenu;
use App\Entities\SystemUser;
use Illuminate\Support\Facades\Hash;

class SystemUserRepository
{
    public function getMenu()
    {
        return MainMenu::with('relatedSubManu')
                        ->where('is_active', true)
                        ->orderBy('sort', 'asc')
                        ->get();
    }

    public function deliveryManTags()
    {
        return SystemUser::where('group', '7teaStoreManager')
                            ->orWhere('group', '7teaStoreClerk')
                            ->get();
    }

    public function getStatusChangeNotifySystemUser()
    {
        return SystemUser::where('group', '7teaStoreManager')
                            ->orWhere('group', '7teaStoreClerk')
                            ->orWhere('group', 'Root')
                            ->get();
    }

    public function createSystemUser($params)
    {
        return SystemUser::create([
            'eip_member_id' => $params['eip_member_id'],
            'username' => $params['username'],
            'password' => Hash::make($params['password']),
            'group' => 'Root',
            'main_menu_id' => '["1", "2", "3"]',
            'sub_menu_id' => '["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]',
            'functions' => '["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                            "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                            "21", "22", "23"]',
            'is_active' => 1,
        ]);
    }

    public function getSystemUserList()
    {
        return SystemUser::orderBy('id')
                        ->get();
    }

    public function getSystemUserById($systemUserId)
    {
        return SystemUser::where('id', $systemUserId)->first();
    }

    public function getSearchSystemUser($data)
    {
        return SystemUser::where('eip_member_id', $data)
                        ->orWhere('username', $data)
                        ->orWhere('group', $data)
                        ->first();
    }

    public function updateSystemUser($params, $systemuserId)
    {
        SystemUser::where('id', $systemuserId)
                ->update([
                    'eip_member_id' => $params['eip_member_id'],
                    'username' => $params['username'],
                    'password' => Hash::make($params['password']),
                    // 'group' => $params['group'],
                    'group' => 'Root',
                    // 'main_menu_id' => $params['main_menu_id'],
                    'main_menu_id' => '["1", "2", "3"]',
                    // 'sub_menu_id' => $params['sub_menu_id'],
                    'sub_menu_id' => '["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]',
                    // 'functions' => $params['functions'],
                    'functions' => '["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                                    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                                    "21", "22", "23"]',
                    'is_active' => $params['is_active'],
                ]);
    }

    public function deleteSystemUser($data, $systemUserId)
    {
        SystemUser::where('id', $systemUserId)
                ->update([
                    'is_active' => 0,
                ]);
    }
}
