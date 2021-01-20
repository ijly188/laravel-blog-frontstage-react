<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'cors'], function () {
    // 前台 api
    Route::post('/login', 'Api\MemberController@postLogin');

    // 前台 api 會員註冊發送驗證碼
    Route::post('/send-phone-sms', 'Api\MemberController@sendPhoneSms');

    // 前台 api 確認會員手機驗證碼是否相符
    Route::post('/check-register-code', 'Api\MemberController@checkRegisterCode');
    
    // 前台 api 註冊會員
    Route::post('/register', 'Api\MemberController@registerMember');

    // 寄前台 api 送忘記密碼驗證碼
    Route::post('/send-forgot-password-sms', 'Api\MemberController@sendForgotPasswordSms');

    // 前台 api 確認忘記密碼資料驗證碼
    Route::post('/check-forgot-password-code', 'Api\MemberController@checkForgotPasswordCode');

    // 前台 api 重設密碼
    Route::post('/reset-password', 'Api\MemberController@resetPassword');

    // 前台 api 文章列表
    Route::get('/articles-list/{tag?}', 'Api\ArticleController@getAllArticleList');

    // 前台 api 文章細節
    Route::get('/article-detail/{articleId}', 'Api\ArticleController@getArticleDetail');

    Route::group(['middleware' => ['token.auth']], function () {
        // 前台 api
        Route::post('/logout', 'Api\MemberController@postLogout');

        // 前台 api 個人資訊
        Route::get('/member-info', 'Api\MemberController@getMemberInfo');

        // 前台 api 個人文章列表
        Route::get('/member-articles-list/{tag?}', 'Api\ArticleController@getMemberArticleList');

        // 前台 api 新增個人文章
        Route::post('/create-article', 'Api\ArticleController@createArticle');

        // 前台 api 更新個人文章
        Route::post('/update-article/{articleId}', 'Api\ArticleController@updateArticle');

        // 前台 api 刪除個人文章
        Route::post('/delete-article/{articleId}', 'Api\ArticleController@deleteArticle');

        // 後台 api
        Route::post('/backstage-logout', 'Api\SystemUserController@postLogout');

        Route::get('/get-aside-menu', 'Api\SystemUserController@getAsideMenu');

        // Route::post('/upload-picture', 'Api\UploadController@uploadPicture');

        Route::group(['middleware' => 'function.permission'], function () {
            // system function
            // 這裡的 route 要可以 work 就要去 OperationSeeder 裡面去產對應的 route
            // 取得服務狀態
            Route::get('/check-service', 'Api\SystemController@getServiceStatus');
            
            Route::post('/update-service', 'Api\SystemController@updateServiceStatus');

            //取得會員列表
            Route::get('/get-members-list/{tag?}', 'Api\MemberController@getAllMemberList');

            Route::get('/get-member-detail/{memberId?}', 'Api\MemberController@getMemberDetail');

            Route::get('/search-member/{data?}', 'Api\MemberController@searchMember');

            Route::post('/update-member-detail', 'Api\MemberController@updateMemberDetail');

            Route::post('/delete-member', 'Api\MemberController@deleteMember');

            // 取得系統使用者列表
            Route::post('/create-systemuser', 'Api\SystemUserController@createSystemUser');

            Route::get('/get-systemusers-list/{tag?}', 'Api\SystemUserController@getAllSystemUserList');

            Route::get('/get-systemuser-detail/{systemuserId}', 'Api\SystemUserController@getSystemUserDetail');

            Route::get('/search-systemuser/{data?}', 'Api\SystemUserController@searchSystemUser');

            Route::post('/update-systemuser-detail/{systemuserId}', 'Api\SystemUserController@updateSystemUserDetail');

            Route::post('/delete-systemuser/{systemuserId}', 'Api\SystemUserController@deleteSystemUser');
            

            // root 處理文章
            Route::post('/root-post-article', 'Api\ArticleController@rootcreateArticle');

            Route::post('/root-update-article-detail/{articleId}', 'Api\ArticleController@rootupdateArticle');

            Route::post('/root-delete-article/{articleId}', 'Api\ArticleController@rootDeleteArticle');
        });
    });
});
