<?php include 'includes/header.php';



// if - else if - else
$autenticado = true;
$admin = true;

if ($autenticado && $admin) {
    echo "el usuario autenticado";
}else{
    echo "el usuario no esta autenticado";
}


// if anidados 
$clientes = [
    'nombre' => 'Adan',
    'saldo' => 0,
    'informacion' => [
        'tipo' => 'Premium',
        'disponible' => 300
    ]
];


echo "<br>";

if (!empty($clientes)) {
    echo "El arreglo de cliente no esta vacio";
    if($clientes['saldo'> 0]){
        echo "El cliente tiene saldo";
    } else {
        echo "El cliente no tiene saldo";
    }
};


echo "<br>";

// else if
if ($cliente['saldo']>0 ){
    echo "El cliente tiene saldo";
} else if ($cliente['informacion']['tipo'] === 'Premiun') {
    echo "El cliente es premium";
} else {
    echo "El cliente tiene un saldo negativo";
}



// switch
echo "<br>";
$tecnologia = 'PHP';
$tecnologia = 'JS';
$tecnologia = 'HTML';

switch ($tecnologia){
    case 'PHP': 
        echo "PHP, un lenguaje de programacion";
        break;
    case 'JS':
        echo "JS, un lenguaje de programacion";
        break;
    case 'HTML':
        echo "HTML, un lenguaje de programacion";
        break;
    default:
        echo "No se encontro la tecnologia";
        break;
};


include 'includes/footer.php';