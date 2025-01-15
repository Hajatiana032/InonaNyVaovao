<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;

class PostController extends Controller
{
    public function show(Post $post)
    {
        return Inertia::render("Post/Show", [
            'post' => $post,
            'category' => $post->category,
            'postsLike' => Post::where('category_id', '=', $post->category_id)->where('slug', '!=', $post->slug)->latest()->limit(3)->get()
        ]);
    }
}
