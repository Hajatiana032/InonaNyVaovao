<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Home', ['categories' => Category::latest()->with(['posts' => fn($query) => $query->limit(4)->latest()->get()])->limit(4)->get()]);
    }
}
