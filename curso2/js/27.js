// POO
// utiliza prototipe


// object literal
const producto = {
    nombre: 'Table',
    precio: 500,
}

// object constructor 
function Producto(nombre, precio /*objetos*/) {
    this.nombre = nombre;
    this.precio = precio;
}

// prototype crea funciones que solo se utilizan en un objeto en especifico 
Producto.prototype.formatearProducto = function() {
  return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

const producto2 = new Producto('monitor de 49"', 880/*parametros*/);
const producto3 = new Producto('Laptop"', 880/*parametros*/);



function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}

console.log( producto2.formatearProducto() );
console.log( producto3.formatearProducto() );



