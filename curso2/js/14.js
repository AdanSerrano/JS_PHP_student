//arrays

const numero = [10, 20, 30, 40, 50];

console.log(numero);
console.table({ numero });

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
console.table( meses );

// aceder a los valores de un arreglo
console.log( numero[0] );
console.log( numero[1] );
console.log(numero[2]);
console.log(numero[3]);
console.log(numero[4]);

//conocer extencion de un arreglo 
console.log(meses.length);

//recorrer arreglo 
numero.forEach( function (numero) {
        console.log( numero )
    }
);

// agregar nuevos elementos 
numero[5] = 60;
console.table(numero);

//push agregar un elemnto al final del arreglo
numero.push(70);
numero.push(80);
numero.push(90);

console.table({ numero });

//unshift agregar un elemnto al inicio del arreglo
numero.unshift(-20, -10, 0)
console.table(numero);

// eliminar elementos de un arreglo 
const meses1 = ["enero", "febrero", "marzo", "abril", "mayo"];
// meses1.pop();// elimina el ultimo elemento de un arreglo
// meses1.pop(2);// elimina del ultimo elemento hacia atras
// meses1.shift();// elimina del primer elemento
// meses1.shift(1);// elimina del primer elemento hacia delante

meses1.splice(2, 1); // elimina un  valor en especifico

console.table(meses1);


// rest   operator or spread operator 
const nuevoArreglo = [...meses, 'junio']
console.log( nuevoArreglo );