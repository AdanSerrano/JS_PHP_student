

const elMayor = (a, b) => (a > b) ? a : b;


const tieneMenbresia = (mienbro) => (mienbro) ? '2 dolares' : '10 dolares';

console.log(elMayor(20, 15));

console.log(tieneMenbresia(false));

const amigo = false;

const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
];

console.log(amigosArr);

const notas = 65;
const grado = notas >= 95 ? 'A+' :
                notas >= 90 ? 'A' :
                notas >= 85 ? 'B+' :
                notas >= 80 ? 'B' :
                notas >= 75 ? 'C+' :
                notas >= 70 ? 'C' : 'F';


console.log(grado);