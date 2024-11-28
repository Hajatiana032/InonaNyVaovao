<?php

use App\Http\Controllers\ContactMailController;
use Illuminate\Support\Facades\Route;

// Homepage
Route::inertia('', 'Home/Home');

// About 
Route::inertia('à-propos', 'About/About');

// Contact
Route::inertia('contact', 'Contact/Contact');
Route::post('/envoyer', [ContactMailController::class, "store"])->name('send');
