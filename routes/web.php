<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactMailController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

// Homepage
Route::get('', [HomeController::class, 'index'])->name('home');

// About 
Route::inertia('/à-propos', 'About/About');

// Category
Route::get('/catégories', [CategoryController::class, 'index'])->name('category.index');
Route::get('/catégorie/{category:slug}', [CategoryController::class, 'show'])->name('category.show');

// Contact
Route::inertia('/contact', 'Contact/Contact');
Route::post('/envoyer', [ContactMailController::class, "store"])->name('send');

// Post
Route::get('/article/{post:slug}', [PostController::class, 'show'])->name('post.show');

// Comment
Route::prefix('/article/{post:slug}/commentaire')->controller(CommentController::class)->name('comment.')->middleware('auth')->group(function () {
    Route::post('/ajouter', 'store')->name('store');
    Route::delete('/supprimer/{comment:slug}', 'destroy')->name('destroy');
});

// Login and logout
Route::inertia('/connexion', 'Security/Login');
Route::post('/connexion', [LoginController::class, 'authenticate'])->name('login');
Route::get('/déconnexion', [LoginController::class, 'logout'])->name('logout');
