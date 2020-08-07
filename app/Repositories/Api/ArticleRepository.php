<?php

namespace App\Repositories\Api;
use Illuminate\Database\Eloquent\Model;

use App\Entities\Article;
use App\Entities\Member;

class ArticleRepository extends Model
{
    public function getArticleList()
    {
        return Article::orderBy('id')
                    ->where('is_active', true)
                    ->get();
    }

    public function getArticleById($articleId)
    {
        return Article::where('id', $articleId)->first();
    }

    public function getArticleListByMemberId($memberId)
    {
        return Member::with('relatedArticle')
                    ->where('id', $memberId)
                    ->where('is_active', true)
                    ->get();
    }

    public function getArticleByMemberId($memberId)
    {
        return Member::with('relatedArticle')
                    ->where('id', $memberId)
                    ->where('is_active', true)
                    ->first();
    }

    public function createArticle($params, $memberId)
    {
        return Article::create([
            'member_id' => $memberId,
            'title' => $params['title'],
            'content' => $params['content'],
            'content_image_url' => $params['content_image_url'],
            'is_active' => 1,
        ]);
    }

    public function updateArticle($params, $memberId, $articleId)
    {
        Article::where('id', $articleId)
                ->where('member_id', $memberId)
                ->update([
                    'member_id' => $memberId,
                    'title' => $params['title'],
                    'content' => $params['content'],
                    'content_image_url' => $params['content_image_url'],
                    'is_active' => $params['is_active'],
                ]);
    }

    public function rootUpdateArticle($params, $memberId, $articleId)
    {
        Article::where('id', $articleId)
                ->update([
                    'member_id' => $memberId,
                    'title' => $params['title'],
                    'content' => $params['content'],
                    'content_image_url' => $params['content_image_url'],
                    'is_active' => $params['is_active'],
                ]);
    }

    public function deleteArticle($params, $memberId, $articleId)
    {
        Article::where('id', $articleId)
                ->where('member_id', $memberId)
                ->update([
                    'is_active' => 0,
                ]);
    }

    public function getArticleByMemberIdArticleId($params, $memberId, $articleId)
    {
        return Article::where('id', $articleId)
                ->where('member_id', $memberId)
                ->first();
    }

    public function rootDeleteArticle($params, $memberId, $articleId)
    {
        Article::where('id', $articleId)
                ->where('member_id', $memberId)
                ->delete();
    }
}
