<?php

use App\Http\Controllers\ContactMailController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

// Homepage
Route::get('', [HomeController::class, 'index'])->name('home');

// About 
Route::inertia('/à-propos', 'About/About');

// Contact
Route::inertia('/contact', 'Contact/Contact');
Route::post('/envoyer', [ContactMailController::class, "store"])->name('send');

Route::get('/article/{post:slug}', [PostController::class, 'show'])->name('post.show');
