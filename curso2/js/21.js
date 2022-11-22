//arrow funcions
const sumar = (n1, n2) =>
  console.log(n1 + n2);

sumar(5, 10);

const aprendiendo = (tecnologia) =>
    console.log( `aprendiendo ${tecnologia}` );

aprendiendo('JavaScrip');

//array methods
const meses = ["enero", "febrero", "marzo", "abril", "mayo"];

const carrito = [
    { nombre: 'Monitor de "20', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Abanico', precio: 50 },
    { nombre: 'Bocinas', precio: 200 },
    { nombre: 'Laptop', precio: 600 },
    { nombre: 'Celular', precio: 570 },
];

//foreach
meses.forEach(function (mes) {
    console.log(mes);
});

meses.forEach( mes => {
    if (mes == 'marzo') {
        console.log( 'Marzo si existe' );
    }
});

// some ideal para arreglo de objetos
const resultado2 = carrito.some(producto =>
    producto.nombre === 'Celular');
console.log(resultado2);

// imprimir el resultado total de precio
const resultado3 = carrito.reduce((total, producto) =>
    total + producto.precio, 0)
console.log( resultado3 );

//filter
const resultado4 = carrito.filter( producto => producto.precio > 400);
console.table( resultado4 );


//los que  son iguales a un vaslor de un arreglo 
const resultado5 = carrito.filter( producto => producto.nombre === 'Bocinas');
console.table( resultado5 );


//los que  son diferente a un vaslor de un arreglo 
const resultado6 = carrito.filter(function (producto) {
  return producto.nombre !== 'Celular';

});
console.table( resultado6 );
