
const puntaje = "1000"; 
// si es igual lo que esta dentro de la variable
if (puntaje == 1000) {
    console.log('El puntaje es 1000');
};


// es mas estricto compara las variables
if (puntaje === 1000) {
    console.log('El puntaje es 1000');
} else {
    console.log('el puntaje no es igual' );
};


//diferente y compara
if (puntaje !== "1000") {
    console.log('el puntaje no es igual' );
} else {
    console.log('El puntaje es 1000');
};

const efectivo = 1000;
const carrito = 800;

if (efectivo >= carrito) {
    console.log( 'Puedes hacer la compra' );
} else {
    console.log('no puedes realizar la compraa' );
}

// revisar mas de una condiccion 
let rol = 'Administrador';
rol = 'Editor'

if (rol === 'Administrador') {
    console.log('Acceso al sistema');
} else if (rol === 'Editor') {
        console.log( 'Eres editor, no puedes acceder a eeste sistema' );
} else {
    console.log( 'no tiene acceso' );
};