let totalMonto = 0;

function agregarCarrito(precio){
    return totalMonto += precio;
}
function calcularImpuesto(total){
    return total * 1.15;
}
totalMonto = agregarCarrito(35);
/* total = agregarCarrito(25);
total = agregarCarrito(15); */

const totalPagar = calcularImpuesto(totalMonto);
console.log(`El total a pagara es ${totalPagar}`);


