<?php

namespace App\Services\Api;

use App\Repositories\Api\SystemUserRepository;
use App\Support\Collection;

class SystemUserService
{
    protected $systemUserRepository;

    public function __construct(SystemUserRepository $systemUserRepository)
    {
        $this->systemUserRepository = $systemUserRepository;
    }

    public function getMenu($user, $userMainMenuId, $userSubMenuId)
    {
        $allMainMenu = $this->systemUserRepository->getMenu();
        $mainMenuIds = json_decode($userMainMenuId);
        $subMenuIds = json_decode($userSubMenuId);

        foreach ($allMainMenu as $singleMainMenu) {
            $subMenu = [];
            $relatedSubMenuRule = $singleMainMenu
                                    ->relatedSubManu
                                    ->where('is_active', true)
                                    ->sortBy('sort');
            //篩選有存在於system_user裡的main_menu_id
            if (in_array($singleMainMenu['id'], $mainMenuIds)) {
                //有的話再進一步做關聯篩選
                foreach ($relatedSubMenuRule as $singleSubMenu) {
                    //篩選有存在於system_user裡的sub_menu_id
                    if (in_array($singleSubMenu['id'], $subMenuIds)) {
                        $subMenu[] = [
                            'name' => $singleSubMenu['name'],
                            'route' => $singleSubMenu['route']
                        ];
                    }
                }
                $mainMenu[] = [
                    'name' => $singleMainMenu['name'],
                    'icon' => $singleMainMenu['icon'],
                    'route' => $singleMainMenu['route'],
                    'children' => $subMenu
                ];
            }
        }
        $data = [
            'user' => $user->username,
            'main_menu' => $mainMenu
        ];

        return $data;
    }

    public function getDeliveryManTag()
    {
        $deliveryManTags = $this->systemUserRepository->deliveryManTags();
        foreach ($deliveryManTags as $deliveryManTag) {
            $data[] = [
                'id' => $deliveryManTag->id,
                'name' => $deliveryManTag->username,
            ];
        }

        return $data;
    }

    public function createSystemUser($params)
    {
        $this->systemUserRepository->createSystemUser($params);
    }

    public function getSystemUserList($sortTag)
    {
        $systemUserData = $this->systemUserRepository->getSystemUserList();
        $finalData = [];

        foreach ($systemUserData as $key => $memberInfo) {
            $created_at = '';
            
            $getSystemUserData[] = [
                'id' => $memberInfo->id,
                'eip_member_id' => $memberInfo->eip_member_id,
                'username' => $memberInfo->username,
                'group' => $memberInfo->group,
                'main_menu_id' => $memberInfo->main_menu_id,
                'sub_menu_id' => $memberInfo->sub_menu_id,
                'functions' => $memberInfo->functions,
            ];
        }
        //根據篩選器篩選資料
        $collectSystemUserData = $this->sortCollection($getSystemUserData, $sortTag);
        $pagination = [
            'current_page' => $collectSystemUserData->currentpage(),
            'total_page' => $collectSystemUserData->lastPage(),
            'has_pre' => $collectSystemUserData->currentPage() == 1 ? false : $collectSystemUserData->currentPage() - 1,
            'has_next' => $collectSystemUserData->currentPage() == $collectSystemUserData->lastPage() ? false : $collectSystemUserData->currentPage() + 1,
        ];
        if ($collectSystemUserData->currentpage() > $collectSystemUserData->lastPage()) {
            return '超出頁數';
        }
        // 取得經過分頁函數的data資訊
        $finalData = $collectSystemUserData->items();
        //除了第一頁的data有去除key值，其他頁都沒有，所以要再做以下處理
        if ($collectSystemUserData->currentpage() != 1) {
            // 利用values()去除排序完的key，不然吐出來的data會有key值
            $finalData = $collectSystemUserData->values();
        }
        $total = [
            'pagination' => $pagination,
            'member_list' => $finalData,
        ];
        return $total;
    }

    public function sortCollection($SystemUserData, $sortTag)
    {
        switch ($sortTag) {
            // 依照會員編號(舊到新)
            case 'all':
                return (new Collection($SystemUserData))->sortByDesc('id')->values()->paginate(15);
                break;
            // 依照會員編號(新到舊)
            case '1':
                return (new Collection($SystemUserData))->sortBy('id')->values()->paginate(15);
                break;
            // 依照消費金額（高到低)
            case '2':
                return (new Collection($SystemUserData))->sortByDesc('totalCost')->values()->paginate(15);
                break;
            // 依照累積訂單數（多到少)
            case '3':
                return (new Collection($SystemUserData))->sortByDesc('total_order')->values()->paginate(15);
                break;
        }
    }

    public function getSystemUserDetail($id)
    {
        //傳入會員Id，顯示會員資訊
        $getSystemUser = $this->systemUserRepository->getSystemUserById($id);

        if ($getSystemUser == null) {
            return false;
        } else {
            return $showSystemUser = [
                'id' => $getSystemUser->id,
                'eip_member_id' => $getSystemUser->eip_member_id,
                'username' => $getSystemUser->username,
                'group' => $getSystemUser->group,
                'main_menu_id' => $getSystemUser->main_menu_id,
                'sub_menu_id' => $getSystemUser->sub_menu_id,
                'functions' => $getSystemUser->functions,
                'is_active' => $getSystemUser->is_active,
            ];
        }
    }

    public function getSearchSystemUser($data)
    {
        $systemUserInfo = $this->systemUserRepository->getSearchSystemUser($data);
        if ($systemUserInfo == null) {
            return '查無資訊';
        } else {
            $created_at = '';
            
            return $getsystemUserData[] = [
                'id' => $systemUserInfo->id,
                'eip_member_id' => $systemUserInfo->eip_member_id,
                'username' => $systemUserInfo->username,
                'group' => $systemUserInfo->group,
                'main_menu_id' => $systemUserInfo->main_menu_id,
                'sub_menu_id' => $systemUserInfo->sub_menu_id,
                'functions' => $systemUserInfo->functions,
                'is_active' => $systemUserInfo->is_active,
            ];
        }
    }

    public function updateSystemUser($params, $systemuserId)
    {
        $this->systemUserRepository->updateSystemUser($params, $systemuserId);
    }

    public function deleteSystemUser($data, $systemUserId)
    {
        $this->systemUserRepository->deleteSystemUser($data, $systemUserId);
    }
}
