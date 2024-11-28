<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['name' => 'Politiques', 'slug' => Str::slug('name', '-')]);
        Category::create(['name' => 'Economies', 'slug' => Str::slug('name', '-')]);
        Category::create(['name' => 'Sports', 'slug' => Str::slug('name', '-')]);
        Category::create(['name' => 'Environnements', 'slug' => Str::slug('name', '-')]);
        Category::create(['name' => 'Cultures', 'slug' => Str::slug('name', '-')]);
    }
}
