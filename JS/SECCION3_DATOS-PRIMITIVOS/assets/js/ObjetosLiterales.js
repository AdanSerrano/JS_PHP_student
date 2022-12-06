let personaje = {
    nombre: 'tony stark',
    codeName: 'iron man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.34,

        lng: -118.70
    },
    trajes: ['mark 1', 'mark 5', 'hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'malibu, california'
    },
};

console.log( {personaje} )

//imprimir solo un valor
console.log( 'Nombre', personaje.nombre );
console.log( 'Nombre', personaje['nombre'] );
//imprimir edad 
console.log( 'Edad', personaje.edad);
//imprimir cordenadas 
console.log( 'cordenadas:', personaje.coords );
//imprimir latitud
console.log( 'lat:',  personaje.coords.lat  );
//numeros de trajes que tiene iron man 
console.log( 'No. Trajes de iron man:', personaje.trajes.length );
console.log( 'ultimo traje de iron man:', personaje.trajes[ personaje.trajes.length - 1]  );
//imprimir si esta vivo
const x = 'vivo';
console.log( 'Vivo', personaje[x] );

//eliminar una propiedad 
delete personaje.edad;
console.log( personaje );

//hacer un arreglo de una propiedad ya definida
const entriesPares = Object.entries(personaje);
console.log( entriesPares );

//bloquear propiedades congela la propiedad principal
Object.freeze( personaje );

//listado de todas las propiedades que tiene ese objeto
const propiedades = Object.getOwnPropertyNames( personaje );
console.log( {propiedades} );