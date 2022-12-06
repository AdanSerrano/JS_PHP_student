<?php include 'includes/header.php';

// comparacion
$num1 = 20;
$num2 = 30;
$num3 = 30;
$num4 = "30";

var_dump($num1 > $num2);
echo "<br>"; // salto de linea 

var_dump($num1 < $num2);
echo "<br>"; // salto de linea

var_dump($num1 >= $num2);
echo "<br>"; // salto de linea 

var_dump($num1 <= $num2);
echo "<br>"; // salto de linea

var_dump($num2 === $num3);
echo "<br>"; // salto de linea

// 0 si es igual y -1 si el de la izquierda es menor y 1 si el de la derecha es menor
var_dump($num2 <=> $num3); 
echo "<br>"; // salto de linea

var_dump($num1 <=> $num2);
echo "<br>"; // salto de linea

var_dump($num3 <=> $num1);
echo "<br>"; // salto de linea



include 'includes/footer.php';