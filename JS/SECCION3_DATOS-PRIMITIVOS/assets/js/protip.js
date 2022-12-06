function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}
const persona2 = (nombre, apellido) => ({ nombre, apellido });


const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);


function imprimeArgumentos() {
  console.log(arguments);
}


// ARGUMENTOS DE ARREGLOS CON FUNCION CON FLECHAS
const imprimeArgumentos2 = (edad, ...args) => {
    console.log({ edad, args });
    return args;
}
imprimeArgumentos2(10, true, false, 'Fernando');


//arrelglod de objetos
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({nombre, codeName, vivo,  edad, trajes}) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades( tony );