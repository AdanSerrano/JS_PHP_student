<?php 
declare(strict_types=1); // Para que no se pueda pasar un string a una funcion que espera un int
include 'includes/header.php';


function usuarioAutenticado(bool $autenticado) : ?string{ // define el tipo de dato que va a retornar la funcion
    if($autenticado){
        return "El usuario esta autenticado";
    } else {
        return null;
    }
}

$usuario = usuarioAutenticado(true);
echo $usuario;
echo "<br>";

function usuarioAutenticado1(bool $autenticado): string|int
{ // define el tipo de dato que va a retornar la funcion
    if ($autenticado) {
        return "El usuario esta autenticado";
    } else {
        return 20;
    }
}

$usuario2 = usuarioAutenticado1(false);
echo $usuario2;

include 'includes/footer.php';