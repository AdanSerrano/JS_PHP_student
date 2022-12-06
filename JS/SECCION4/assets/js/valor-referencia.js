

let a = 10;
let b = 20;
a = 30;

console.log(a, b);


let adan = {
    nombre: 'Adan',
}

let pedro = adan;
pedro.nombre = 'Pedro';

console.log( adan );


const cambiaNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log( peter, tony );

//imprimir un arreglo mas rapido
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

//añadimos otras frutas
otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });
