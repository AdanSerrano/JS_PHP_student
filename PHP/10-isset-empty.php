<?php include 'includes/header.php';

$clientes = [];
$cliente2 = array ();
$cliente3 = array('Pedro', 'Juan', 'Karen');
$cliente = [
    'nombre' => 'Adan',
    'saldo' => 200
];
// empty 
var_dump (empty($clientes));
var_dump (empty($cliente2));
var_dump (empty($cliente3));
// revisar si un arreglo tiene informacioon o esta vacio con empty es super faciil 


// isset - revisar si un arreglo esta creado o una propiedad esta definida
echo "<br>";
var_dump ( isset($cliente4));
var_dump (isset ($clientes));
var_dump (isset ($cliente2));
var_dump (isset ($cliente3));

// si existe la propiedad nombre en el arreglo asociativo cliente
var_dump(isset($cliente['nombre']));
var_dump(isset($cliente['codigo']));



include 'includes/footer.php';