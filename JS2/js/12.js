// 'use strict'; corre js en modo estricto

// objetos
const producto = {
  nombreProduct: 'Monitor 20"',
  precio: 300,
  disponible: true,
};

// //no permite que agregue ni eliminar mas valores lo congela
// Object.freeze(producto);

// producto.imagen = "imagen.jpg";

// console.log( Object.isFrozen(producto) );

// console.log( producto );



//no te permite agregar pero si modificar
Object.seal(producto);

producto.precio = "Nuevo precio";


console.log(producto);