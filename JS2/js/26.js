// this
const reservacion = {
    nombre: 'Adan',
    apellido: 'Serrano',
    total: 500,
    pagado: false,
    informacion: function (){
        console.log( `El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}` );
    }
}

//pregunta de trabajo Cual es el resultado de esto
// imprime el nombre
const reservacion3 = {
    nombre: 'Adan',
    informacion: function () {
        console.log(
            `${this.nombre}`
        );
    },
};
//imprime ondefile por que estamos llamando a la opcion de windows
const reservacion4 = {
  nombre: "Adan",
  informacion:  () => {
    console.log(`${this.nombre}`);
  }
};

const reservacion2 = {
  nombre: "Adan",
  apellido: "Serrano",
  total: 100,
  pagado: false,
  informacion: function()  {
    console.log(
      `El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`
    );
  },
};

reservacion.informacion();
reservacion2.informacion();
reservacion3.informacion();
reservacion4.informacion();