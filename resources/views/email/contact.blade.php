@vite('resources/script/email.js')

<div class="container">
    <p>Nom: {{ $data['lastname'] }}</p>
    <p>Prénom: {{ $data['firstname'] ? $data['firstname'] : 'aucun' }}</p>
    <p>Numéro de téléphone: {{ $data['phone'] }}</p>
    <div class="mt-3 border rounded p-3">
        {!! nl2br($data['message']) !!}
    </div>
</div>
