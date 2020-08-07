<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    protected $fillable = [
        'phone', 'forgot_password_code'
    ];
}
