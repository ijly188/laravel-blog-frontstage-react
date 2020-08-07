<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = [
        'username', 'password', 'register_type', 'name', 'picture_url',
        'email', 'phone', 'gender', 'email_validated', 'email_notify',
        'app_notify', 'coupon', 'live_address', 'transport_address', 'points',
        'member_level', 'is_active'
    ];

    public function relatedArticle()
    {
        return $this->hasMany('App\Entities\Article', 'member_id', 'id');
        // 對應的modal, modal key, 現在的 key
    }
}
