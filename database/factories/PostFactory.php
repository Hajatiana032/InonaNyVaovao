<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

use function PHPUnit\Framework\fileExists;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $title = fake()->unique()->words(asText: true);
        $content = fake()->paragraphs(mt_rand(3, 5), true);
        $cover = glob(storage_path('app/public/img/pre_save/*.*'));
        $ok = array_rand($cover, 5);
        if ($ok) {
            dd($ok);
            // Storage::disk('public')->copy('img/pre_save', 'img/uploads/posts/' . array_rand($cover));
        }

        return [
            'title' => $title,
            'category_id' => fake()->randomElement(Category::all()),
            'slug' => Str::slug($title),
            'cover' => fake()->image(storage_path('app/public/img/uploads/posts/'), category: 'post', fullPath: false, word: 'cover'),
            'excerpt' => Str::limit($content),
            'content' => $content
        ];
    }
}
