// creacion de funcion

function nuevaFuncion() {
    console.log( 10 * 10 );
};

nuevaFuncion();

//expresion de la funcion
const sumar = function () {
    console.log(3 + 3);
};

sumar();

//IIFE sirve  para proteger variables de otros archivos
(function () {
    console.log('esto es una funcion');
})();