<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class EmailValidate extends Model
{
    protected $fillable = [
        'email', 'email_validate_code'
    ];
}
