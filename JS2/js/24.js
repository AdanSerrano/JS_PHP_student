// iteradores
// for
for (let i = 0; i <= 10; i++){
    console.log( i );
}


// identifica del 1 al si el numero actual es par y impar
for (let i = 1; i <= 10; i++) {
    if (i%2 === 0 ) {
      console.log( `el numero ${i} es par` );
    } else {
        console.log(`el numero ${i} no es par`);
  }
}

const carrito = [
  { nombre: 'Monitor de "20', precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Abanico", precio: 50 },
  { nombre: "Bocinas", precio: 200 },
  { nombre: "Laptop", precio: 600 },
  { nombre: "Celular", precio: 570 },
];

for (let i = 0; i < carrito.length; i++){
    console.log( carrito[i].nombre );
};


// while loop
let i = 0;// indice
while (i < 10) { // condicion
    if (i % 2 === 0 ) {
        console.log( `El numero ${i} es par` );
    } else {
        console.log( `El numero ${i} es impar` );
    }
    i++;// incremento 
}

i = 0;
while (i < carrito.length) {
  // condicion
  console.log(carrito[i].nombre);
  i++; // incremento
}


// do while loop
//ejecuta el codigo una vez y depues evalua 

i = 0;
do {
    console.log( i );

    i++;
} while (i < 10);