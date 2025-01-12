<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Home', ['categories' => Category::with(['posts' => fn($query) => $query->limit(4)])->latest()->limit(4)->get()]);
    }
}
