<?php include 'includes/header.php';

// Arrays
// Un array es una coleccion o un conjunto de datos/valores, bajo un unico nombre
$carrito = [];
var_dump($carrito); // array(0) { }


$carrito = ['Tablet', 'Television', 'Computadora'];


// util para ver los contenido de un array
echo "<pre>";
var_dump($carrito); // array(0) { }
echo "</pre>";

// Acceder a un elemento de un array
echo $carrito[1]; // Television

// Agregar elementos a un array
$carrito[3] = 'Audifonos';

// añadir un elemento al final del array
array_push($carrito, 'Audifonos compactos');

// añadir al inicio del array
array_unshift($carrito, 'SmartWhatch');


// util para ver los contenido de un array
echo "<pre>";
var_dump($carrito); // array(0) { }
echo "</pre>";



// otra manera de crear un array
$cliente = array('Cliente 1', 'Cliente 2', 'Cliente 3');
echo "<pre>";
var_dump($cliente);
echo "</pre>";

echo $cliente[2];

include 'includes/footer.php';