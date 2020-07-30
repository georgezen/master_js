"use strict";

/**EJERCICIO 1 */

/*el programa que pida u2 numeros y diga cual es el mayor cual el menor o si son iguales */

// while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
//   var num1 = prompt("numero 1");
//   var num2 = prompt("numero2");
// }

// if (num1 > num2) {
//   console.log("el numero " + num1 + " es mayor");
//   console.log("el numero " + num2 + " es menor");
// } else if (num2 > num1) {
//   console.log("el numero " + num2 + " es mayor");
//   console.log("el numero " + num1 + " es menor");
// } else if (num1 == num2) {
//   console.log("son iguales perro");
// } else {
//   console.log("nada resulta puto");
// }

/** FIN EJERCICIO 1 */

/**EJERCICIO 2 */
// var suma = 0,
//   acumulador = 0,
//   media = 0;

// do {
//   var num3 = 0;

//   num3 = parseInt(prompt("dame un numero"));

//   if (num3 <= 0) {
//     break;
//   }else if (isNaN(num3)) {
//     alert('ponga un puto numero');
//     break;
//   }

//   suma = suma + num3;
//   acumulador++;

// } while (num3 > 0);

// media = suma / acumulador;

// console.log("la media es " + media + " y la suma de todo es" + suma);
/** FIN EJERCICIO 2 */

/**EJERCICIO 3 */

var numAp = prompt('numero apertura');
var numC = prompt("numero cierre");

if (numAp > numC || isNaN(numAp) || isNaN(numC)) {
  console.log("reinicia");
}
console.log(numAp +' y '+ numC);
while (numAp <= numC) {
  console.log(numAp);
  numAp++;
}

/**FIN EJERCICIO 3 */
