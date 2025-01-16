<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use App\Models\Post;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Home', [
            'categories' => Category::latest()->with([
                'posts' => fn($query) => $query->limit(4)->latest()
                    ->with(['likes', 'comments'])
            ])
                ->limit(4)->get(),
            'latests' => Post::query()->with(['likes', 'comments'])->latest()->limit(12)->get()
        ]);
    }
}
