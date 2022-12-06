// promise
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('usuario autenticado');// el promise se cumple 
    } else {
      reject('no se pudo iniciar sesion '); // el promise no se cumple
    }
});

usuarioAutenticado
    .then((resultado) => {
        console.log(resultado);
    }).catch((error) => {
        console.log(error);
    });
// en los promise existen 3 valores
// Pending : no se a cumplido pero tampoco se a rechazado
// fulfilled : ya se cumplio
// rejected : se a rechazado o no se  complido
