<?php include 'includes/header.php';

$productos = [
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Televisión',
        'precio' => 300,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor Curvo',
        'precio' => 400,
        'disponible' => false
    ],
];


echo '<pre>';
var_dump($productos);
$json = json_encode($productos, JSON_UNESCAPED_UNICODE); // JSON_UNESCAPED_UNICODE para que no se escape los caracteres especiales
// convertir un arreglo a string JSON

$json_array = json_decode($json, true); // true para que lo convierta a un arreglo asociativo
// convertir un string JSON a un arreglo


var_dump($json);
var_dump($json_array);

echo '</pre>';





include 'includes/footer.php';