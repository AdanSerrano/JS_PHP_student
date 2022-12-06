<?php include 'includes/header.php';


// in_array - buscar un elemento en un arreglo
$carrito = ['tablet', 'television', 'computadora'];
var_dump(in_array('tablet', $carrito));
var_dump(in_array('audifonos', $carrito));


// ordenar elementos de un arreglo 
$numeros = array(1, 9, 4, 6, 20);
sort($numeros); // de menor a mayor 
rsort($numeros); // de mayor a menor


echo "<pre>";
var_dump($numeros);
echo "</pre>";

// ordenar un arreglo asociativo 
$cliente = [
    'saldo' => 200, 
    'tipo' => 'Premium',
    'nombre' => 'Adan'
];

asort($cliente); // ordena de menor a mayor segun el valor // primero los numeros y despues las letras
arsort($cliente); // primero las letras y despues los numeros
ksort($cliente); // ordena de menor a mayor segun la primera letra de la llave de la a a la z
krsort($cliente); // ordena de mayor a menor segun la primera letra de la llave de la z a la a


echo "<pre>";
var_dump($cliente);
echo "</pre>";



include 'includes/footer.php';