<?php include 'includes/header.php'; // sirve para llamar el archivo php para evitar la duplicidad del codigoo


// // require 'includes/funciones.php';
// require 'includes/funciones.php';// requiere que el archivo exista y que este funcionando bien, si no existe o no funciona no va a funcionar el codigo de abajo

// // require_once 'includes/funciones.php';// si el archivo ya fue llamado no lo vuelve a llamar
// require_once 'includes/funciones.php';// si el archivo ya fue llamado no lo vuelve a llamar

require 'funciones.php';
iniciarApp();

// include : si el archico no existe sigue ejecutando el codigo 
// require : si el archivo no existe no ejecuta el codigo de abajo
// include_once : si el archivo ya fue llamado no lo vuelve a llamar


include 'includes/footer.php';//utiliza include cuando quieras incluir otro tamplate