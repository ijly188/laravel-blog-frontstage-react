<?php

use App\Entities\Group;
use App\Entities\Operation;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class GroupSeeder extends Seeder
{
    public function run(Faker $faker)
    {
        //// 清空資料表 ////
        Group::truncate();
        //// 取得關聯資料表的全部資訊 ////
        $operation = Operation::all();
        //// 建立假資料 ////
        $group = [
            'ParentCompanyManager',
            'ParentCompanyMarketing',
            '7teaBrand',
            '7teaCustomerServiceAllStores',
        ];
        $groupZh = [
            '總公司管理',
            '總公司行銷',
            '七盞茶品牌',
            '七盞茶總客服',
        ];
        for ($i = 0; $i < sizeof($group); $i++) {
            $randomOperation = $faker->randomElements($operation->pluck('id'), mt_rand() % $operation->count());
            $randomOperation = array_map('strval', $randomOperation);
            sort($randomOperation);
            Group::create([
                'group_name' => $group[$i],
                'group_zh' => $groupZh[$i],
                'functions' => json_encode($randomOperation),
            ]);
        }
        // 建立工程師權限群組 with 所有權限
        Group::create([
            'group_name' => 'Root',
            'group_zh' => '工程師',
            'functions' => json_encode(array_map('strval', $operation->pluck('id')->toArray())),
        ]);
    }
}
