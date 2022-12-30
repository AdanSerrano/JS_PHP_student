/*
dias de semanas abrimos a las 11, cerramos a las 20
pero los fines de semanas abrimos a las 9 y cerramos a las 24
*/

// ENTRA A UN SITIO WEB, PARA CONSULTAR SI ESTA ABIERTO HOY...

const dia = new Date().getDay();
const horaActual = new Date().getHours();

let horaApertura;
let horaCierre;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos a las XX


if ([0, 6].includes(dia)) {
    const FinSemana = {
        0: "Domingo",
        6: "Sabado",
    };
    // es fin de semana
    horaApertura = 9;
    horaCierre = 18;
    // switch (!true) {
    //     case horaApertura <= horaActual && horaActual < horaCierre:
    //         mensaje = "abierto";
    //         break;
    //     case horaApertura > horaActual || horaActual > horaCierre:
    //         mensaje = "cerrado";
    //         break;
    // };
    mensaje = (horaActual >= horaApertura && horaActual < horaCierre) ? "Esta abierto" : "Esta cerrado";
    console.log(`Hoy es ${FinSemana[dia]} Abrimos a las ${horaApertura} y cerramos a las ${horaCierre} el local se encuentra ${mensaje}`);
} else {
    const diaSemana = {
        1: "Lunes",
        2: "Martes",
        3: "Miercoles",
        4: "Jueves",
        5: "Viernes",
    };
    // es dia de semana
    horaApertura = 11;
    horaCierre = 20;
    // switch (true) {
    //     case horaApertura <= horaActual && horaActual < horaCierre:
    //         mensaje = "abierto";
    //         break;
    //     case horaApertura > horaActual || horaActual > horaCierre:
    //         mensaje = "cerrado";
    //         break;
    // };
    mensaje = (horaActual >= horaApertura && horaActual < horaCierre) ? "Esta abierto" : "Esta cerrado";
    console.log(`Hoy es ${diaSemana[dia]} Abrimos a las ${horaApertura} y cerramos a las ${horaCierre} el local se encuentra ${mensaje}`);
};