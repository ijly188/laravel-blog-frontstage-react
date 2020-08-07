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
        $registerType = ['web', 'app'];
        $gender = ['male', 'female'];
        $memberLevel = ['silver', 'gold', 'platinum', 'diamond'];
        //// 讀取taiwan_zipcode.json ////
        $taiwanZipcode = Storage::get('taiwan_zipcode.json');
        $taiwanZipcode = json_decode($taiwanZipcode, true);
        for ($i = 0; $i < 200; $i++) {
            // 隨機地址及店名 //
            $randomCity = $faker->numberBetween(0, sizeof($taiwanZipcode) - 1);
            $randomDistrict = $faker->numberBetween(0, sizeof($taiwanZipcode[$randomCity]['districts']) - 1);
            $zipcode = $taiwanZipcode[$randomCity]['districts'][$randomDistrict]['zip'];
            $address = $taiwanZipcode[$randomCity]['name'] . $taiwanZipcode[$randomCity]['districts'][$randomDistrict]['name'];
            $fullAddress = [
                'id' => $faker->randomDigit() . $faker->randomNumber(8, true) . $faker->randomDigit(),
                'zipcode' => $zipcode,
                'address' => $address,
            ];
            $fullAddressArr = [];
            array_push($fullAddressArr, $fullAddress);
            Member::create([
                'username' => $faker->userName,
                'password' => Hash::make($faker->password),
                'register_type' => $registerType[$faker->numberBetween(0, sizeof($registerType) - 1)],
                'name' => $faker->unique()->firstName,
                'picture_url' => json_encode($faker->url),
                'email' => $faker->unique()->email,
                'phone' => $faker->regexify('09[0-9]{8}'),
                'gender' => $gender[$faker->numberBetween(0, sizeof($gender) - 1)],
                'email_validated' => $faker->boolean,
                'email_notify' => $faker->boolean,
                'app_notify' => $faker->boolean,
                'coupon' => '[]',
                'live_address' => json_encode($fullAddressArr),
                'transport_address' => json_encode($fullAddressArr),
                'points' => $faker->numberBetween(0, 100),
                'member_level' => $memberLevel[$faker->numberBetween(0, sizeof($memberLevel) - 1)],
                'is_active' => $faker->boolean,
            ]);
        }
        Member::create([
            'username' => 'test',
            'password' => Hash::make(123456),
            'register_type' => $registerType[$faker->numberBetween(0, sizeof($registerType) - 1)],
            'name' => $faker->unique()->firstName,
            'picture_url' => json_encode($faker->url),
            'email' => $faker->unique()->email,
            'phone' => $faker->regexify('09[0-9]{8}'),
            'gender' => $gender[$faker->numberBetween(0, sizeof($gender) - 1)],
            'email_validated' => $faker->boolean,
            'email_notify' => $faker->boolean,
            'app_notify' => $faker->boolean,
            'coupon' => '[]',
            'live_address' => json_encode($fullAddressArr),
            'transport_address' => json_encode($fullAddressArr),
            'points' => $faker->numberBetween(0, 100),
            'member_level' => $memberLevel[$faker->numberBetween(0, sizeof($memberLevel) - 1)],
            'is_active' => $faker->boolean,
        ]);
    }
}
