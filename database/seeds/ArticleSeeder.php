<?php

use App\Entities\Article;
use App\Entities\Operation;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(Faker $faker)
    {
        //// 清空資料表 ////
        Article::truncate();
        //// 取得關聯資料表的全部資訊 ////
        for ($i = 0; $i < 200; $i++) {
            Article::create([
                'member_id' => $faker->numberBetween(1, 10),
                'title' => $faker->word,
                'content' => $faker->text($maxNbChars = 200),
                'content_image_url' => json_encode($faker->url),
                'is_active' => $faker->boolean,
            ]);
        }
    }
}
