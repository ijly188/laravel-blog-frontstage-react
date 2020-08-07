<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class SystemConfig extends Model
{
    protected $fillable = [
        'config', 'status'
    ];
}
