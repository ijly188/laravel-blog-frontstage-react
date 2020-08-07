<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $fillable = [
        'group_name', 'group_zh', 'functions', 'parent_group', 'children_group'
    ];
}
