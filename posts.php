<?php

$n = isset($_GET['n']) ? intval($_GET['n']) : 10;

$posts = [];

for ($i = 0; $i < $n; $i++) {
    $posts[] = [
        'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni earum cum voluptatibus placeat omnis nulla pariatur ipsa optio similique consequatur, inventore accusamus eum tempora. Delectus fuga laudantium sunt asperiores officiis.',
        'author' => [
            'name' => 'Lorem Ipsum',
            'image' => 'cat.png',
            'url' => '#'
        ],
        'date' => time(),
    ];
}
header('Content-type: application/json');
echo json_encode($posts, JSON_PRETTY_PRINT);