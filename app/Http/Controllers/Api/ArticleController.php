<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Tymon\JWTAuth\Facades\JWTAuth;

use App\Services\Api\ArticleService;

class ArticleController extends Controller
{
    protected $articleService;

    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }

    public function getAllArticleList($sortTag = 'all')
    {
        if ($sortTag != 'all' && $sortTag != '1' && $sortTag != '2' && $sortTag != '3') {
            return response()->json([
                'success' => false,
                'message' => '格式錯誤',
                'data' => '',
            ], 422);
        }
        $showArticleList = $this->articleService->getArticleList($sortTag, null);
        if (gettype($showArticleList) == 'string') {
            return response()->json([
                'success' => true,
                'message' => $showArticleList,
                'data' => '',
            ], 200);
        }
        return response()->json([
            'success' => true,
            'message' => '成功顯示文章列表',
            'data' => $showArticleList,
        ], 200);
    }

    public function getMemberArticleList($sortTag = 'all')
    {
        $memberid = JWTAuth::user()->id;

        if ($sortTag != 'all' && $sortTag != '1' && $sortTag != '2' && $sortTag != '3') {
            return response()->json([
                'success' => false,
                'message' => '格式錯誤',
                'data' => '',
            ], 422);
        }
        $showArticleList = $this->articleService->getArticleList($sortTag, $memberid);
        if (gettype($showArticleList) == 'string') {
            return response()->json([
                'success' => true,
                'message' => $showArticleList,
                'data' => '',
            ], 200);
        }
        return response()->json([
            'success' => true,
            'message' => '成功顯示文章列表',
            'data' => $showArticleList,
        ], 200);
    }

    public function getArticleDetail($articleId)
    {
        if (!is_numeric($articleId)) {
            return response()->json([
                'success' => false,
                'message' => '格式錯誤',
                'data' => '',
            ], 422);
        }

        $getArticleDetail = $this->articleService->getArticleDetail($articleId);

        if ($getArticleDetail) {
            return response()->json([
                'success' => true,
                'message' => '成功顯示會員詳細資訊',
                'data' => $getArticleDetail,
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => '查無此會員或文章',
                'data' => '',
            ], 200);
        }
    }

    public function createArticle(Request $request)
    {
        $memberId = JWTAuth::user()->id;

        $data = $request->all();

        $validator = Validator::make($data, [
            'title' => 'required|string|max:255',
            'content' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        $message = $this->articleService->createArticle($data, $memberId);

        if ($message) {
            return response()->json([
                'success' => true,
                'message' => '新增文章成功',
                'data' => ''
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => '新增文章失敗',
                'data' => '',
            ], 200);
        }
    }

    public function updateArticle(Request $request, $articleId)
    {
        $memberId = JWTAuth::user()->id;

        $data = $request->all();

        $validator = Validator::make($data, [
            'title' => 'required|string|max:255',
            'content' => 'required|string|max:255',
            'is_active' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        $message = $this->articleService->updateArticle($data, $memberId, $articleId);
        
        return response()->json([
            'success' => true,
            'message' => '更新文章成功',
            'data' => ''
        ], 200);
    }

    public function deleteArticle(Request $request, $articleId)
    {
        $memberId = JWTAuth::user()->id;

        $data = $request->all();

        $message = $this->articleService->deleteArticle($data, $memberId, $articleId);
        
        return response()->json([
            'success' => true,
            'message' => '刪除文章成功',
            'data' => ''
        ], 200);
    }

    // root
    public function rootcreateArticle(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'member_id' => 'required',
            'title' => 'required|string|max:255',
            'content' => 'required|string|max:255',
        ]);

        $memberid = $data['member_id'];

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        $message = $this->articleService->createArticle($data, $memberid);

        return response()->json([
            'success' => true,
            'message' => '新增文章成功',
            'data' => ''
        ], 200);
    }

    public function rootupdateArticle(Request $request, $articleId)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'member_id' => 'required',
            'title' => 'required|string|max:255',
            'content' => 'required|string|max:255',
            'is_active' => 'boolean'
        ]);

        $memberId = $data['member_id'];

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'data' => ''
            ], 422);
        }

        $message = $this->articleService->rootUpdateArticle($data, $memberId, $articleId);
        
        return response()->json([
            'success' => true,
            'message' => '更新文章成功',
            'data' => ''
        ], 200);
    }

    public function rootDeleteArticle(Request $request, $articleId)
    {
        $data = $request->all();

        $memberId = $data['member_id'];

        $message = $this->articleService->rootDeleteArticle($data, $memberId, $articleId);

        if ($message) {
            return response()->json([
                'success' => true,
                'message' => '刪除文章成功',
                'data' => ''
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => '刪除文章失敗',
                'data' => '',
            ], 200);
        }
    }
}
