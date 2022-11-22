let juegos = ['Zelda', 'Mario', 'metroid', 'chrono' ];
console.log( 'Largo:', juegos.length );

//primer elemento
let primero = juegos[juegos.length - juegos.length];


//ultimo elemento
let ultimo = juegos[ juegos.length - 1];

console.log( primero, ultimo );

// forEach
juegos.forEach( (elemento, indice, arr) => {
    console.log( {elemento, indice, arr} );
});


//insertar un dato a un arreglo
let nuevoJuego = juegos.push( 'F-Zero' );
console.log( {nuevoJuego, juegos});

//insertar ubn dato al principio de un arreglo
let nuevoJuegoP = juegos.unshift('fire free');
console.log( {nuevoJuegoP, juegos} );


//ultimo elemento borrado
let juegoBorrado = juegos.pop();
console.log( {juegoBorrado, juegos} );


//cualquier elemento eliminado del arreglo con splice
console.log( juegos )
let pos = 1;
let juegosBorrados = juegos.splice( pos, /*elemtos que quiero borrar*/ 2);
console.log( {juegosBorrados, juegos} );


//encontrar un elemento de un arreglo
let metroidIndex = juegos.indexOf('metroid'); //caseSensitive
console.log( {metroidIndex} )