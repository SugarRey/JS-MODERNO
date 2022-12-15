const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito2 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
// Forma Manual
meses2.forEach((mes1, i) => {
    if(mes1 === 'Mayo'){
        console.log('El mes de ' + mes1 + ' esta en la posicion '+ i);  
    }
})
meses2.forEach((mes2, i) => {
    if(mes2 === 'Julio'){
        console.log('El mes de ' + mes2 + ' esta en la posicion ' + i)
    }
});

//Encontrar el indice de abril
//La funcion FINDINDEX() manda a llamar la posicion del indice
//Forma resumida cando solo tiene un solo parametro.
const indicel = meses2.findIndex( mes => mes === 'Julio');
console.log(indicel);

// Forma completa
const indice = meses2.findIndex((mes) => {
    if (mes === 'Abril') {
        return mes;
    }
});
console.log(indice);

//ENCONTRAR UN INDICE DE UN ARREGLO DE OBJETOS
const indiceO = carrito2.findIndex( (producto => {
    if(producto.precio === 500){
        return producto.precio;
    }
}));
console.log(indiceO);
