<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PostController extends
Controller
{
    public function show(Post $post)
    {
        return Inertia::render("Post/Show", [
            'article' => $post->load(['category', 'comments' => fn($query) => $query->with(['user'])->latest()]),
            'postsLike' => Post::query()
                ->where('category_id', '=', $post->category_id)
                ->where('slug', '!=', $post->slug)
                ->with(['likes', 'comments'])
                ->latest()->limit(3)->get(),
        ]);
    }
}
