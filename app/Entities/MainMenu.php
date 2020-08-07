<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class MainMenu extends Model
{
    protected $fillable = [
        'name', 'icon', 'route', 'sort',
        'functions', 'is_active'
    ];

    public function relatedSubManu()
    {
        return $this->hasMany('App\Entities\SubMenu', 'main_menu_id', 'id');
    }
}
