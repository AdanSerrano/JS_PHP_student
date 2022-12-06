// objetos
const producto = {
  nombreProduct: 'Monitor 20"',
  precio: 300,
  disponible: true,
};


const medidas = {
    peso: '1 kg',
    medida: '1m',   
}


// uniendo objetos 
const nuevoProducto = { ...medidas, ...producto };

console.log(nuevoProducto);