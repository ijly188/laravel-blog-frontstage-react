<?php

use App\Entities\SubMenu;
use App\Entities\Operation;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class SubMenuSeeder extends Seeder
{
    public function run(Faker $faker)
    {
        //// 清空資料表 ////
        SubMenu::truncate();
        //// 取得關聯資料表的全部資訊 ////
        $operation = Operation::all();
        //// 建立假資料 ////
        $name = [
            '會員列表', '會員資料', '新增會員', '修改會員', '刪除會員',
            '文章列表', '文章資料', '新增文章', '修改文章', '刪除文章',
            '系統使用者列表', '系統使用者資料', '新增系統使用者', '修改系統使用者', '刪除系統使用者',
        ];

        $main_menu_id = [
            '1', '1', '1', '1', '1',
            '2', '2', '2', '2', '2',
            '3', '3', '3', '3', '3',
        ];
        $route = [
            '/member-list', '/member-detail', '/create-member', '/update-member', '/delete-member',
            '/article-list', '/article-detail', '/create-article', '/update-article', '/delete-article',
            '/systemuser-list', '/systemuser-detail', '/create-systemuser', '/update-systemuser', '/delete-systemuser',
        ];
        for ($i = 0; $i < sizeof($name); $i++) {
            $randomOperation = $faker->randomElements($operation->pluck('id'), mt_rand() % $operation->count() + 1);
            sort($randomOperation);
            SubMenu::create([
                'name' => $name[$i],
                'main_menu_id' => $main_menu_id[$i],
                'route' => $route[$i],
                'sort' => $faker->unique(true)->numberBetween(0, sizeof($name)),
                'functions' => json_encode(array_map('strval', $randomOperation)),
                'is_active' => true,
            ]);
        }
    }
}
