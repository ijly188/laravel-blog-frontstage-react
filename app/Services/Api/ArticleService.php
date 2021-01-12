<?php

namespace App\Services\Api;

use App\Repositories\Api\ArticleRepository;

use App\Support\Collection;

class ArticleService
{
    protected $articleRepository;

    public function __construct(ArticleRepository $articleRepository)
    {
        $this->articleRepository = $articleRepository;
    }

    public function getArticleList($sortTag, $memberId)
    {
        $created_at = '';

        if($memberId){
            // 帶 memberId
            $articleData = $this->articleRepository->getArticleListByMemberId($memberId);

            foreach ($articleData as $articleMember) {
                foreach ($articleMember->relatedArticle as $articleInfo) {
                    $getarticleData[] = [
                        'id' => $articleInfo->id,
                        'member_id' => $articleInfo->member_id,
                        'title' => $articleInfo->title,
                        'content' => $articleInfo->content,
                        'content_image_url' => $articleInfo->content_image_url,
                    ];
                }
            }
        } else {
            $articleData = $this->articleRepository->getArticleList();

            foreach ($articleData as $key => $articleInfo) {
                $getarticleData[] = [
                    'id' => $articleInfo->id,
                    'member_id' => $articleInfo->member_id,
                    'title' => $articleInfo->title,
                    'content' => $articleInfo->content,
                    'content_image_url' => $articleInfo->content_image_url,
                ];
            }
        }
        $finalData = [];

        //根據篩選器篩選資料
        $collectArticleData = $this->sortCollection($getarticleData, $sortTag);
        $pagination = [
            'current_page' => $collectArticleData->currentpage(),
            'total_page' => $collectArticleData->lastPage(),
            'has_pre' => $collectArticleData->currentPage() == 1 ? false : $collectArticleData->currentPage() - 1,
            'has_next' => $collectArticleData->currentPage() == $collectArticleData->lastPage() ? false : $collectArticleData->currentPage() + 1,
        ];
        if ($collectArticleData->currentpage() > $collectArticleData->lastPage()) {
            return '超出頁數';
        }
        // 取得經過分頁函數的data資訊
        $finalData = $collectArticleData->items();
        //除了第一頁的data有去除key值，其他頁都沒有，所以要再做以下處理
        if ($collectArticleData->currentpage() != 1) {
            // 利用values()去除排序完的key，不然吐出來的data會有key值
            $finalData = $collectArticleData->values();
        }
        $total = [
            'pagination' => $pagination,
            'article_list' => $finalData,
        ];
        return $total;
    }

    public function sortCollection($memberData, $sortTag)
    {
        switch ($sortTag) {
            // 依照會員編號(舊到新)
            case 'all':
                return (new Collection($memberData))->sortBy('id')->values()->paginate(15);
                break;
            // 依照會員編號(新到舊)
            case '1':
                return (new Collection($memberData))->sortBy('id')->values()->paginate(15);
                break;
            // 依照消費金額（高到低)
            case '2':
                return (new Collection($memberData))->sortByDesc('totalCost')->values()->paginate(15);
                break;
            // 依照累積訂單數（多到少)
            case '3':
                return (new Collection($memberData))->sortByDesc('total_order')->values()->paginate(15);
                break;
        }
    }

    public function getArticleDetail($articleId)
    {
        //傳入會員Id，顯示會員資訊
        $getArticleDetail = $this->articleRepository->getArticleById($articleId);
        $getMemberDetail = $this->articleRepository->getArticleByMemberId($getArticleDetail->member_id);

        if ($getArticleDetail == null || $getMemberDetail == null) {
            return false;
        } else {
            return $showMemberList = [
                'username' => $getMemberDetail->username,
                'title' => $getArticleDetail->title,
                'content' => $getArticleDetail->content,
                'content_image_url' => $getArticleDetail->content_image_url,
                'is_active' => $getArticleDetail->is_active,
            ];
        }
    }

    public function createArticle($params, $memberid)
    {
        $this->articleRepository->createArticle($params, $memberid);
    }

    public function updateArticle($params, $memberid, $articleId)
    {
        $this->articleRepository->updateArticle($params, $memberid, $articleId);
    }

    public function rootUpdateArticle($params, $memberid, $articleId)
    {
        $this->articleRepository->rootUpdateArticle($params, $memberid, $articleId);
    }

    public function deleteArticle($params, $memberid, $articleId)
    {
        $this->articleRepository->deleteArticle($params, $memberid, $articleId);
    }

    public function rootDeleteArticle($params, $memberid, $articleId)
    {
        $message = $this->articleRepository->getArticleByMemberIdArticleId($params, $memberid, $articleId);

        if( $message == null ) {
            return false;
        } else {
            $this->articleRepository->rootDeleteArticle($params, $memberid, $articleId);
            return true;
        }
    }
}
