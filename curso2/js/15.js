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

meses.forEach(function (mes) {
    if (mes == 'marzo') {
        console.log( 'Marzo si existe' );
    }
});

// include retorna un boleano
const resultado = meses.includes('marzo')
console.log(resultado);

// some ideal para arreglo de objetos
const resultado2 = carrito.some(function (producto) {
    console.log( producto  ); 
    return producto.nombre === 'Celular'
});
console.log(resultado2);

// imprimir el resultado total de precio
const resultado3 = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0)
console.log( resultado3 );

//filter
const resultado4 = carrito.filter(function (producto) {
    return producto.precio > 400
});
console.table( resultado4 );


//los que  son iguales a un vaslor de un arreglo 
const resultado5 = carrito.filter(function (producto) {
  return producto.nombre === 'Bocinas';
});
console.table( resultado5 );


//los que  son diferente a un vaslor de un arreglo 
const resultado6 = carrito.filter(function (producto) {
  return producto.nombre !== 'Celular';

});
console.table( resultado6 );
