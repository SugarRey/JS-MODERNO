//cortar espacion en blanco
const prod = '           Monitor de 20 pulgadas';
console.log(prod);
console.log(prod.length);

//eliminar del inicio

console.log( prod.trimStart());
console.log( prod.trimStart().length);

console.log( prod.trimEnd());
console.log( prod.trimEnd().length);

console.log( prod.trimStart().trimEnd());
console.log( prod.trimStart().trimEnd().length)

console.log(prod.trim().length);