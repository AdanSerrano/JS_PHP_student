// asyn / await


function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes... espere');
        setTimeout(() => {
            resolve('los clientes fueron descargados')
        },5000)
    });
};

function descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere');
        setTimeout(() => {
            resolve('los pedidos fueron descargados')
        },3000)
    });
};

// // espera la cantidad de segundo y imprime estan en el milisegundo
// setTimeout( (  )=> {
//     console.log( 'set timeOut' );
// }, 5000)

// //espera el tiempo y itera impresin por impresion 
// setInterval(() => {
//   console.log("set timeOut");
// }, 5000);

// async 
async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos= await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log( pedidos );
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log( resultado[0] );
        console.log( resultado[1] );
    } catch (error) {
        console.log( error );
    }
    console.log( `app lista` );
}
app();
