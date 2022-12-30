let a = 10;

if (a >= 10) {
  console.log("a es igual a 10");
} else {
  console.log("a es diferente a 10");
};

// console.log( 'Fin del programa' );

const hoy = new Date(); //trae el dia y hora actual
let dia = hoy.getDay(); //trae el dia de la semana en numero del 0 al 6 (0 es domingo)
console.log(dia);

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miercoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === 5) {
  console.log("Viernes");
} else if (dia === 6) {
  console.log("Sabado");
} else {
  console.log("No es un dia de la semana");
};

// sin usar if else, o switch, unicamente objetos 
dia = 3; 

const diaLetra = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miercoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sabado'
};

// const diaLetra = {
//   0: () => "Domingo - 0",
//   1: () => "Lunes - 1",
//   2: () => "Martes - 2",
//   3: () => "Miercoles - 3",
//   4: () => "Jueves - 4",
//   5: () => "Viernes - 5",
//   6: () => "Sabado - 6",
// };
// console.log(diaKetra[dia]() || "Dia no es valido");

const diaLetra2 = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
//dia de la semana 
console.log( diaLetra[dia] || 'Dia no es valido');