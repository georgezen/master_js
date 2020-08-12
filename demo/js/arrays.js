"use strict";

var array1 = ["212121", "212121", 4, 2121];

for (let index = 0; index < array1.length; index++) {
  document.write("<h3>" + array1[index] + "</h3>");
}

var array2 = ["212121", "21212121w", 4, 2121, "2121212223E", true, array1,'dona pelos'];


// do {
// var  adicionado = prompt("ingrese el siguiente elemento del array");
//   array2.push(adicionado); // el .push añade en el ultimo indice otro elemento al array
// } while (adicionado != "fin");

// array2.pop();//este metodo el .pop borra el ultimo elemento de un array
// console.log(array2);

console.log(array2.sort());//este metodo ordena un array en orden alfabetico

