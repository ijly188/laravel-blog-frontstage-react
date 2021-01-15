<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// 後台 api
// 測試api
Route::get('/backstage-test', 'Api\SystemUserController@test');

Route::post('/login', 'Api\SystemUserController@postLogin');

// Route::group(['middleware' => ['token.auth', 'group.permission']], function () {
    
// });