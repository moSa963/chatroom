<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();

            $table->foreignId("user_id")->nullable()->constrained()->nullOnDelete();

            $table->foreignId("room_id")->constrained()->cascadeOnDelete();

            $table->string("title", 1600);

            $table->string("path")->nullable()->default(null);

            $table->string("name")->default("");

            $table->integer('size')->default(0);

            $table->boolean("deleted")->default(false);

            $table->string('mime_type')->default("");

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
        Schema::dropIfExists('messages');
    }
};
