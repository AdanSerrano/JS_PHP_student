// metodo de propiedades
const reproductor = {
  reproducir: function (id) {
    console.log(`reproduciendo Cancion con el ID:  ${id}`);
  },
  pausar: function () {
    console.log(`Pausando...`);
  },
  crearPlayList: function (nombre) {
    console.log(`Creando PlayList ${nombre}`);
  },
  reporducirPlayList: function (nombre) {
    console.log(`Reproduciendo PlayList ${nombre}`);
  },
};

reproductor.borrarCancion = function (id) {
    console.log( `eliminando la cancion ${id}` );
}

console.log(reproductor);
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList(`los intocable`);
reproductor.reporducirPlayList(`los intocable`);
