<?php include 'includes/header.php';

$nombreCliente = "    Adan Serrano     ";


// conocer la longitud de un string
echo strlen($nombreCliente); // 12
// salto de linea
echo "<br>";
var_dump($nombreCliente); // string(12) "Adan Serrano"
echo "<br>";

// eliminar espacios en blanco
$texto = trim($nombreCliente);
echo strlen($texto); // 11

// convertir a mayusculas
echo strtoupper($texto); // ADAN SERRANO

// convertir a minusculas
echo strtolower($texto); // adan serrano


$mail = "correo@correo.com";
$mail2 = "Correo@correo.com";

var_dump($mail == $mail2); // false
var_dump(strtolower($mail) === strtolower($mail2));


// reemplazar texto
echo str_replace('Adan', 'Ulisses', $texto); // Ulisses Serrano


// revisar si un string existe o no 
echo strpos($texto, 'Adan'); // 0



// concatenar
$tipoCliente = "Premium";
// salto de linea
echo "<br>";
echo "El cliente ".$nombreCliente." es ".$tipoCliente; // El cliente Adan Serrano es Premium
echo "El cliente {$nombreCliente} es {$tipoCliente}";// El cliente Adan Serrano es Premium

// incluir archivos
include 'includes/footer.php';