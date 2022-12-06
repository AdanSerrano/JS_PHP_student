const carrito = [
  { nombre: 'Monitor de "20', precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Abanico", precio: 50 },
  { nombre: "Bocinas", precio: 200 },
  { nombre: "Laptop", precio: 600 },
  { nombre: "Celular", precio: 570 },
];

// solo pueden ser utilizados en arreglo
// forEach
carrito.forEach(producto => console.log( producto.nombre ));


// diferencia entre for each y map
// el for each cuando queremos inprimir algo en el html por consola
// el map sirve para crear un nuevo arreglo

// map
let a = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(a)
