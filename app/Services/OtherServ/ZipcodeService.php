<?php

namespace App\Service\OtherServ;

use Illuminate\Support\Facades\Storage;

class ZipcodeService
{
    // 傳縣市、鄉鎮回傳 zipcode array
    public function getzipcodearray($country, $district)
    {
        $taiwanZipcode = Storage::get('taiwan_zipcode.json');
        $taiwanZipcode = json_decode($taiwanZipcode, true);

        $selectedzipcode = [];

        foreach ($taiwanZipcode as $citykey => $city) {
            foreach ($city['districts'] as $areakey => $area) {
                // 比對鄉鎮市區是一樣的狀況下要回傳的zipcode，作為篩選的依據
                if (($city['name'] == $country) && ($area['name'] == $district)) {
                    array_push($selectedzipcode, $area['zip']);
                }
                // 比對城市是一樣的狀況下要回傳的zipcode，作為篩選的依據
                if (($city['name'] == $country) && ($district == null)) {
                    foreach ($city['districts'] as $areakey => $area) {
                        array_push($selectedzipcode, $area['zip']);
                    }
                }
            }
        }
        return $selectedzipcode = collect($selectedzipcode)->unique()->flatten(1);
    }

    // 傳zipcode回傳鄉鎮
    public function getcitydistrict($zipcode)
    {
        $taiwanZipcode = Storage::get('taiwan_zipcode.json');
        $taiwanZipcode = json_decode($taiwanZipcode, true);

        foreach ($taiwanZipcode as $citykey => $city) {
            foreach ($city['districts'] as $areakey => $area) {
                if ($area['zip'] == $zipcode) {
                    return $city['name'] . $area['name'];
                }
            }
        }
    }

    public function zipcodeToAddress($zipcode)
    {
        $taiwanZipcode = Storage::get('taiwan_zipcode.json');
        $taiwanZipcode = json_decode($taiwanZipcode);
        foreach ($taiwanZipcode as $city) {
            foreach ($city->districts as $district) {
                if ($district->zip == $zipcode) {
                    return [
                        'city' => $city->name,
                        'district' => $district->name,
                    ];
                }
            }
        }
    }

    public function cityDistrictToZipcode($city, $district)
    {
        $taiwanZipcode = Storage::get('taiwan_zipcode.json');
        $taiwanZipcode = json_decode($taiwanZipcode);
        foreach ($taiwanZipcode as $cities) {
            foreach ($cities->districts as $districts) {
                if ($cities->name == $city && $districts->name == $district) {
                    return $districts->zip;
                }
            }
        }
    }
}
