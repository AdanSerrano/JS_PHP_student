

// siclos


const carros = ['ford', 'mazda', 'honda', 'toyota'];

let i = 0;

// while (i < carros.length) {
//     console.log(carros[i]);
//     // i = i + 1;
//     i++;
// }

// undefined
// null
// false


// salta la iteracion sigue con la funcion
while (carros[i]) {
    if (i === 2) {

        // break; // rompe el ciclo
        i++;
        continue; // salta la iteracion sigue con la funcion
    }
    console.log(carros[i]);
    i++;

};


let j = 0;
do {
    console.log(carros[j]);
} while (carros[j++]) {

}