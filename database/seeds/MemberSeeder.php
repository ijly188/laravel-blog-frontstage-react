<?php

use App\Entities\Member;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class MemberSeeder extends Seeder
{
    public function run(Faker $faker)
    {
        //// 清空資料表 ////
        Member::truncate();
        //// 建立假資料 ////
        for ($i = 0; $i < 200; $i++) {
            Member::create([
                'email' => $faker->unique()->email,
                'email_validated' => $faker->boolean,
                'password' => Hash::make($faker->password),
                'name' => $faker->unique()->firstName,
                'picture_url' => json_encode($faker->url),
                'is_active' => $faker->boolean,
            ]);
        }
        
        Member::create([
            'email' => 'test@test.com',
            'email_validated' => $faker->boolean,
            'password' => Hash::make(123456),
            'name' => $faker->unique()->firstName,
            'picture_url' => json_encode($faker->url),
            'is_active' => $faker->boolean,
        ]);
    }
}
