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

        //todo Match each covers by category
        // ? Get one category name randomly
        $category = Category::inRandomOrder()->first();

        // ? Get the cover from the "addCover" function depending on the selected category
        $cover = $this->addCover($category->name, null);


        return [
            'title' => $title,
            'category_id' => $category,
            'slug' => Str::slug($title),
            'cover' => 'img/uploads/posts/' . $cover . '.jpg',
            'excerpt' => Str::limit($content),
            'content' => $content
        ];
    }

    /**
     * todo Create a list of different covers
     *
     * @return array
     */
    public function coversList(): array
    {
        return [
            'Politiques' => ['politiques-1', 'politiques-2'],
            'Economies' => ['économies-1', 'économies-2'],
            'Sports' => ['sports-1', 'sports-2'],
            'Environnements' => ['environnements-1', 'environnements-2'],
            'Cultures' => ['cultures-1', 'cultures-2']
        ];
    }

    /**
     * todo Create a cover according to the selected category
     *
     * @param string $categoryName
     * @param [type] $cover
     * @return string
     */
    public function addCover(string $categoryName, $cover): string
    {
        // ? Add a  cover depending the selected category
        $covers = $this->coversList();

        switch ($categoryName) {
            case "Politiques":
                return $cover = $covers["Politiques"][mt_rand(0, 1)];
                break;
            case "Economies":
                return $cover = $covers["Economies"][mt_rand(0, 1)];
                break;
            case "Sports":
                return $cover = $covers["Sports"][mt_rand(0, 1)];
                break;
            case "Environnements":
                return $cover = $covers["Environnements"][mt_rand(0, 1)];
                break;
            case "Cultures":
                return $cover = $covers["Cultures"][mt_rand(0, 1)];
                break;
            default:
                return $cover === 'default';
                break;
        }
    }
}
