<?php include 'includes/header.php';
// arreglos asociativos 
$clientes = [
    'nombre' => 'Adan',
    'saldo' => 200,
    'informacion' => [
        'tipo' => 'Premium',
        'disponible' => 100
    ]
];

echo "<pre>";
var_dump($clientes['nombre']);
echo "</pre>";


// acceder a valores de un array asociativo 
echo $clientes['nombre'];
echo $clientes['saldo'];

echo $clientes['informacion']['tipo'];


//
$clientes['codigo'] = 12345;
echo "<pre>";
var_dump($clientes);
echo "</pre>";

include 'includes/footer.php';