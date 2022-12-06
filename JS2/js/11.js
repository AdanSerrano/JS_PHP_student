// objetos

const producto = {
  nombreProduct: 'Monitor 20"',
  precio: 300,
  disponible: true,
};


const productoPrecio = producto.precio;
const productoNombre = producto.nombreProduct;

console.log(productoPrecio);
console.log(productoNombre);

//destructuring
//cuando usemos destructuring siempre debemos utilizar las llaves
const { precio, disponible, nombreProduct } = producto;
console.log(precio, disponible);
console.log( nombreProduct );
