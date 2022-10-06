//declarar funciones

function saludar (nombre){
    console.log( arguments );
    console.log( 'Hola Mundo saludar1s'+ nombre  );
}

const saludar2 = function(nombre){
    console.log( 'hola mundo saludar2' + nombre );
};

//otra manera de hacer un function+
const saludarFlecha = nombre => {
    console.log( 'hola' + nombre );
}


saludarFlecha ('Hola');
saludar('fernando', 40, true );
saludar2('nombre');
saludar2();
saludar2();

const button = document.querySelector('button');

button.onclick= function() {
  let name = prompt/* It's a function call. */
  ('¿Cuál es tu nombre?');
  alert('¡Hola ' + name + ', encantado de verte!');
}