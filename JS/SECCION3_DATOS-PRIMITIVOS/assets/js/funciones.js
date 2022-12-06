//declarar funciones

function saludar (nombre){
    console.log( arguments );
    console.log( 'Hola Mundo saludar1s'+ nombre  );
    return 1;
    //esto no se ejecuta
    console.log( 'Soy un codigo que esta despues de return' );
    
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

// funcion sumar numeros con return
function sumar(a, b){
    return a + b;
}
console.log( sumar(10, 20) );
const sumar2 = (a, b) => {
    return a + b;
}
console.log( sumar(10, 20) );

//cuando solo hay una linea con return se puede hacer asi
const sumar3 = (a, b) => a + b;
console.log( sumar3(10, 20) );

//funcion de un numero aleatorio
function obtenerAleatorio(){
    return Math.random();
}

//numero aleatorio sin llaves
const getAleatorio2 = ()=> Math.random();
console.log( obtenerAleatorio() );

//numero aleatorio entre 2 numeros
const numeroaleatorio = numeroAleatorioEntre(20, 40);
function numeroAleatorioEntre(min, max){
    return Math.random() * (max - min) + min;
}
console.log( numeroaleatorio );
