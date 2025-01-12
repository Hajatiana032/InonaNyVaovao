<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;


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


        return [
            'title' => $title,
            'category_id' => fake()->randomElement(Category::all()),
            'slug' => Str::slug($title),
            'cover' => fake()->fileExtension('jpg'),
            'excerpt' => Str::limit($content),
            'content' => $content
        ];
    }
}
