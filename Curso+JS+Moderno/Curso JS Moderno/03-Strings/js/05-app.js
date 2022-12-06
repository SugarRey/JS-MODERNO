const product = 'monitor de 24 pulgadas';

//la funcion replace.() premite remplazar, esn este caso estamos remplazando pulgadas por " las comillas
console.log(product);
console.log(product.replace('pulgadas','"'));
console.log(product.replace('monitor','Monitor Curvo'));


// .slice permite cortar
console.log(product.slice(0, 10));
console.log(product.slice(5,12));
console.log(product.slice(5));

// alternativa de slice
console.log(product.substring(2,1));

const usuario = 'sugar';
console.log(usuario.substring(0,5));
console.log(usuario.charAt(4 ))

