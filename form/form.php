<?php

// Create new user
$newUser = [
    'firstname' => trim(@$_POST['firstname']),
    'lastname' => trim(@$_POST['lastname']),
    'username' => trim(@$_POST['username']),
    'email' => trim(@$_POST['email']),
    'password' => trim($_POST['password'])
];

// Obtain all users from file
$users = @json_decode(
    @file_get_contents('users.json'),
    true
);

// Add new user
$users[] = $newUser;

// Save the file
file_put_contents(
    'users.json', 
    json_encode($users)
);

echo "Registrazione effettuata con successo!";