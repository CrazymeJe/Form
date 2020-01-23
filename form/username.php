<?php

$username = trim(@$_POST['username']);

if (empty($username)) {
    echo json_encode([
        'valid' => false,
        'error' => 'No username sent!'
    ]);
    exit;
}

// Obtain all users from file
$users = @json_decode(
    @file_get_contents('users.json'),
    true
);

if (!empty($users) && !is_null($users)) {
    foreach ($users as $user) {
        if ($user['username'] == $username) {
            echo json_encode([
                'valid' => false,
                'error' => 'Username already used!'
            ]);
            exit;
        }
    }
}

echo json_encode([
    'valid' => true,
]);