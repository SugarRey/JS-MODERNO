//com se comunican las funciones



iniciarApp();

function iniciarApp(){
    console.log('Iniciando App...')
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Sugar Herrera');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando Usuario... espere...');
    console.log(`El usuario ${usuario} fue autenticado exitosamente`)
}