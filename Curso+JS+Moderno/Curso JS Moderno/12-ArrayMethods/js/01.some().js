const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
//FORMA MANUAL
// comprobar sin un valor existe en el array 
// en la funcion arrow funcion cuando es solo un parametro ya no va los parentesis


meses.forEach( (mes) => { 
    if (mes === 'Enero'){
        console.log('Enero si existe');
    }
});

//UTILIZANDO UN ARRAY METHOD
const resultado = meses.includes('diciembre');
// El método includes() determina si una matriz incluye un determinado elemento, 
// Devuelve true o false según corresponda.
console.log(resultado);
// el metodo includes() solo va funcionar en el array meses solo funcion aen ese tipo.


//en un arreglo de objestos se utiliza .some()
const existe = carrito.some( producto => {
    return producto.nombre === 'Celular';
})
console.log(existe);
const existe2 = meses.some( mes => {
    return mes === 'Febrero';
});
console.log(existe2);
