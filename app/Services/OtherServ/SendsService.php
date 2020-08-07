<?php

namespace App\Services\OtherServ;

class SendsService
{
    // 發送簡訊
    public function sendSms($phone, $code, $message)
    {
        // if (config('app.env') != 'local' && 'testing') {
        //     $data = "http://smexpress.mitake.com.tw:9600/SmSendGet.asp?username=" + config('service.SMSUsername') + "&password=" + config('service.SMSPassword') + "&dstaddr=" . $phone . "&encoding=UTF8&smbody=感謝您使用七盞茶 APP，" . $message . $code . "。";
        //     $ch = curl_init();
        //     curl_setopt($ch, CURLOPT_URL, $data);
        //     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        //     curl_exec($ch);
        //     curl_close($ch);
        // }
    }
}
