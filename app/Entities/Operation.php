<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Operation extends Model
{
    protected $fillable = [
        'api_url', 'function_zh', 'is_active'
    ];
}
