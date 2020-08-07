<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();
            $table->string('password');
            $table->string('register_type');
            $table->string('name');
            $table->string('picture_url');
            $table->string('email')->unique();
            $table->string('phone')->unique();
            $table->string('gender');
            $table->boolean('email_validated')->default(false);
            $table->boolean('email_notify')->default(true);
            $table->boolean('app_notify')->default(true);
            $table->json('coupon')->nullable();
            $table->json('live_address')->nullable();
            $table->json('transport_address')->nullable();
            $table->integer('points')->default(0);
            $table->string('member_level')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('members');
    }
}
