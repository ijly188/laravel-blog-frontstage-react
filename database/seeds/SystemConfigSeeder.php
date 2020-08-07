<?php

use App\Entities\SystemConfig;
use Illuminate\Database\Seeder;

class SystemConfigSeeder extends Seeder
{
    public function run()
    {
        //// 清空資料表 ////
        SystemConfig::truncate();
        //// 建立假資料 ////
        SystemConfig::create([
            'config' => 'maintain_mode',
            'status' => false,
        ]);
    }
}
