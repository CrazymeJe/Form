<?php

$email = trim(@$_POST['email']);

if (empty($email)) {
    echo json_encode([
        'valid' => false,
        'error' => 'No email sent!'
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
        if ($user['email'] == $email) {
            echo json_encode([
                'valid' => false,
                'error' => 'Email already used!'
            ]);
            exit;
        }
    }
}

echo json_encode([
    'valid' => true,
]);