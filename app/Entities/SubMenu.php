<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class SubMenu extends Model
{
    protected $fillable = [
        'name', 'main_menu_id', 'route', 'sort', 'functions',
        'is_active'
    ];
}
