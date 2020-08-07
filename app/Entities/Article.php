<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'member_id', 'title', 'content', 'content_image_url', 'is_active'
    ];
}
