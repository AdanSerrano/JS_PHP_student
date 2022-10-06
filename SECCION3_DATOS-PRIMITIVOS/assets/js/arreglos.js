

const arr = new Array(10);
console.log( arr );

// otra manera de inicializar arreglos
const arr2 = [];
console.log( arr2 );

let videoJuegos = ['MARIO 3', 'MEGAMAN','MARIO KART' ];

console.log( videoJuegos );
 
//IMPRIMIR LA PRIMERA POSICION
console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'fernado',
    1 + 2,
    function(){},
    () => {},
    { a : 1},
    ['x', 'Megaman', 'zero', 'dr. ligth',[
            'dr. willy',
            'woodman'   
        ]]
];

console.log( arregloCosas );

console.log( arregloCosas[7][3] );

console.log( arregloCosas[7][4][1] );


