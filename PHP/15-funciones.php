<?php 
declare(strict_types=1); // Para que no se pueda pasar un string a una funcion que espera un int
include 'includes/header.php';


function sumar(int $numero1 = 0, int $numero2 = 0){
    echo $numero1;
    echo $numero1 + $numero2;
}

sumar(numero2: 10,numero1: 200);
sumar(numero1: 10,numero2: 200);






include 'includes/footer.php';