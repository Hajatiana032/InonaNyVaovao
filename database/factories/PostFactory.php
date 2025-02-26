<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

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

        $category = Category::inRandomOrder()->first();

        $posts = Post::all();
        foreach ($posts as $post) {
            Storage::disk('public')->delete('img/uploads/posts/' . $post->cover);
        }


        return [
            'title' => $title,
            'category_id' => $category,
            'slug' => Str::slug($title),
            'cover' => 'img/uploads/posts/' . fake()->file(storage_path('app/public/img/pre_save/' . $category->slug), storage_path('app/public/img/uploads/posts'), false),
            'excerpt' => Str::limit($content),
            'content' => $content
        ];
    }
}
