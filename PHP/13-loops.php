<?php include 'includes/header.php';

// while loops 

$i = 0;

// primero evalua si la condicion se cumple para que se ejecute el while
while ($i < 10 ){
    echo $i."<br>";

    $i++; // incremento
};

while ($i < 10):
    echo $i . "<br>";

    $i++; // incremento
endwhile;


echo "<br>";

// do while loops
// imprime primero y si cumple la condicion se ejecuta el while
$i = 0; 
do {
    echo $i."<br>";
    $i++;
} while ($i < 10);


/**
 * 3 imprimir Fizz 
 * 5 imprimir Buzz
 * multipo de 3 y 5 imprimir FizzBuzz
 */

// for loops
// hace lo mismo que el while pero es mas facil de leer
echo "<br>";
for ($i = 1 ; $i < 16 ; $i++){
    if ($i % 3 === 0 && $i % 5 === 0) {
        echo $i . "- FizzBuzz <br/>";
    } else if ($i % 3 === 0){
        echo $i."- Fizz <br/>";
    } else if( $i % 5 === 0 ){
        echo $i."- Buzz <br>";
    } else {
        echo $i."<br>";
    }
};


// otra forma de hacer un for loop
echo "<br>";
for ($i = 1; $i < 16; $i++) :
    if ($i % 3 === 0 && $i % 5 === 0) :
        echo $i . "- FizzBuzz <br/>";
    elseif ($i % 3 === 0) :
        echo $i . "- Fizz <br/>";
    elseif ($i % 5 === 0) :
        echo $i . "- Buzz <br>";
    else :
        echo $i . "<br>";
    endif;
endfor;


// foreach loops recorre arreglos 
$clientes = ['pedro', 'Juan', 'Maria'];

foreach ($clientes as $cliente){
    echo $cliente."<br>";
}

// con for loops recorrer arreglos 
echo "<br>";
for ( $i = 0 ; $i < count($clientes); $i++){
    echo $clientes[$i]."<br>";
};

$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200,
    'tipo' => 'Premium'
];

foreach ($clientes as $key => $valor):
    echo $key.' - '.$valor."<br>";
endforeach;

include 'includes/footer.php';