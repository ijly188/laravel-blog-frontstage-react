<?php

use App\Entities\MainMenu;
use App\Entities\Operation;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class MainMenuSeeder extends Seeder
{
    public function run(Faker $faker)
    {
        //// 清空資料表 ////
        MainMenu::truncate();
        //// 取得關聯資料表的全部資訊 ////
        $operation = Operation::all();
        //// 建立假資料 ////
        $name = [
            '會員管理', '文章管理', '系統使用者'
        ];

        $icon = [
            'icon-member', 'icon-article', 'icon-systemuser'
        ];

        $route = [
            '/members-manage', '/articles-manage', 'systemuser-manage'
        ];
        
        for ($i = 0; $i < sizeof($name); $i++) {
            $randomOperation = $faker->randomElements($operation->pluck('id'), mt_rand() % $operation->count() + 1);
            sort($randomOperation);
            MainMenu::create([
                'name' => $name[$i],
                'icon' => $icon[$i],
                'route' => $route[$i],
                'sort' => $faker->unique(true)->numberBetween(1, sizeof($name)),
                'functions' => json_encode(array_map('strval', $randomOperation)),
                'is_active' => true,
            ]);
        }
    }
}
