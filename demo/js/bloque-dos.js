'use strict';

var array_numeros = [];
for (let index = 0; index <= 5 ; index++) {
    var numeros = parseInt(prompt('dame un puto numero'));

    array_numeros.push(numeros);
}

document.write(array_numeros);
console.log(array_numeros);


console.log('El array ordenado queda asi ' + array_numeros.sort());
console.log("El array ordenado inversamente queda asi " + array_numeros.reverse());
console.log("La longitud del array es " + array_numeros.length);

var flecha = () => {
    console.log('hola');
};

console.log(flecha());
var comparado = parseInt(prompt("dame un puto numero a encontrar"));
var search = array_numeros.some((numero) => numero == comparado);
console.log(search);
if (search == false) {
    document.write("Este numero ingresado no se encuentra");
} else {
    document.write("Este numero ingresado se encuentra");    
}


array_numeros.forEach((element) =>  console.log(element));

var flecha2 = () => console.log('flecha2');
console.log(flecha2());


function imprimir_parametro(num, callback1) {
    var textin = num + 'cadena para callback';
    callback1(num);
    return textin;    
}

imprimir_parametro(5, (textin) => console.log(textin));




