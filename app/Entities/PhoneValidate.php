<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class PhoneValidate extends Model
{
    protected $fillable = [
        'phone', 'validator_code'
    ];
}
