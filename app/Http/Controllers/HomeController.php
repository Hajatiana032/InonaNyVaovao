<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Home', ['categories' => Category::query()->latest()->limit(4)->get()]);
    }
}
