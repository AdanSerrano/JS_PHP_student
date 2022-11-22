// objetos

const nombreProducto = 'Monitor 20\"';
const precio = 300;
const disponible = true;


const producto = {
    nombreProduct: 'Monitor 20"',
    precio: 300,
    disponible: true,
};

console.log(producto);

console.log( producto.precio );
console.log( producto.nombreProduct );
console.log(producto.disponible);
//otra sintaxis
console.log(producto['precio']);


//agregar nuevas propiedades 
producto.imagen = 'imagen.jpg';

// eliminar propiedades
delete producto.disponible;
console.log(producto);

