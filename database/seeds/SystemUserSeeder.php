<?php

use App\Entities\SystemUser;
use App\Entities\Group;
use App\Entities\MainMenu;
use App\Entities\Submenu;
use App\Entities\Operation;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class SystemUserSeeder extends Seeder
{
    public function run(Faker $faker)
    {
        //// 清空資料表 ////
        SystemUser::truncate();
        //// 取得關聯資料表的全部資訊 ////
        $group = Group::all();
        $mainMenu = MainMenu::all();
        $subMenu = SubMenu::all();
        //// 建立群組名稱陣列 ////
        $groupName = $group->pluck('group_name');
        //// 建立假資料 ////
        $time = $faker->dateTime('now', null);
        for ($i = 0; $i < sizeof($groupName) - 1; $i++) {
            // 隨機主選單權限 //
            $randomMainMenu = $faker->randomElements($mainMenu->pluck('id'), mt_rand() % $mainMenu->count());
            sort($randomMainMenu);
            // 隨機子選單權限 //
            $randomSubMenu = $faker->randomElements($subMenu->pluck('id'), mt_rand() % $subMenu->count());
            sort($randomSubMenu);
            // 隨機額外功能 //
            // 將本次建立的群組已擁有的功能除外 //
            $groupFunction = json_decode($group[$i]->functions);
            $operations = Operation::all()->except($groupFunction);
            $functions = $faker->randomElements($operations->pluck('id'), mt_rand() % sizeof($operations));
            for ($j = 0; $j < sizeof($groupFunction); $j++) {
                array_push($functions, $groupFunction[$j]);
            }
            sort($functions);
            SystemUser::create([
                'eip_member_id' => $faker->randomLetter . $faker->randomNumber(9),
                'username' => $faker->userName,
                'password' => Hash::make('123456'),
                'group' => $groupName[$i],
                'main_menu_id' => json_encode(array_map('strval', $randomMainMenu)),
                'sub_menu_id' => json_encode(array_map('strval', $randomSubMenu)),
                'functions' => json_encode(array_map('strval', $functions)),
                'is_active' => $faker->boolean,
            ]);
        }
        $allOperations = Operation::all();
        SystemUser::create([
            'eip_member_id' => $faker->randomLetter . $faker->randomNumber(9),
            'username' => 'admin',
            'password' => Hash::make('123456'),
            'group' => 'Root',
            'main_menu_id' => json_encode(array_map('strval', $mainMenu->pluck('id')->toArray())),
            'sub_menu_id' => json_encode(array_map('strval', $subMenu->pluck('id')->toArray())),
            'functions' => json_encode(array_map('strval', $allOperations->pluck('id')->toArray())),
            'is_active' => true,
        ]);
    }
}
