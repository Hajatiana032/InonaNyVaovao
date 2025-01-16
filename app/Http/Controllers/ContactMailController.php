<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactMailRequest;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactMailController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact.Contact');
    }

    public function store(ContactMailRequest $request)
    {
        Mail::send(new ContactMail($request->validated()));
        return redirect('/contact')->with('success', 'Votre a été envoyé.')->with('success', 'Votre email a été envoyé.');
    }
}
