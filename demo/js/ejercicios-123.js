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

// var numAp = prompt('numero apertura');
// var numC = prompt("numero cierre");

// if (numAp > numC || isNaN(numAp) || isNaN(numC)) {
//   console.log("reinicia");
// }
// console.log(numAp +' y '+ numC);
// while (numAp <= numC) {
//   console.log(numAp);
//   numAp++;
// }

/**FIN EJERCICIO 3 */

/**EJERCICIO 4 */
// var numAp2 = prompt("numero apertura");
// var numC2 = prompt("numero cierre");

// if (isNaN(numAp2) || isNaN(numC2) || numAp2 > numC2) {
//   console.log("repitelo");
// }

// for (let index = numAp2; index <= numC2; index++) {
//   if (index % 2 == 1) {
//     console.log(index);
//   }
// }

/** FIN EJERCICIO 4 */

/** EJERCICIO 5 */
// var cero = parseInt(prompt("numero a dividir"));
// for (let index = 0; index < cero; index++) {
//   if (cero % index == 0) {
//     console.log(index);
//   }
// }

/**FIN EJERCICIO 5 */

/** EJERCICIO 6 */

// while (isNaN(numero)) {
//   var numero = parseInt(prompt("dame el puto numero"));
// }

// if (numero % 2 == 0) {
//   console.log("el numero " + numero + " es par");
// } else {
//   console.log("el numero " + numero + " es impar");
// }
/**FIN EJERCICIO 6 */

/** EJERCICIO 7 */

// while (isNaN(capturaN)) {
//   var capturaN = parseInt(prompt("dame el numero", 0));
// }
// var result = document.querySelector(".resultado");

// for (let index = 0; index <= 10; index++) {
//   console.log(
//     "el numero " +
//       capturaN +
//       " se multiplica por " +
//       index +
//       " el resultado es: " +
//       capturaN * index
//   );
    
//     var impreso = document.write("los resultados son: " + capturaN * index + "<br>");    
    
// }
// result.innerHTML = impreso;
/**FIN EJERCICIO 7 */

/** EJERCICIO 8 */
var suma, resta, multiplicacion, division;
while (isNaN(num1f) || isNaN(num2f)) {
    var num1f = parseInt(prompt('dame el primer numero',0));
var num2f = parseInt(prompt("dame el segundo numero", 0));
}

suma = num1f + num2f;
resta = num1f - num2f;
multiplicacion = num1f * num2f;
division = num1f / num2f;
document.write("los numeros son " + num1f + " y " + num2f + "<br>");
document.write('el resultado de la suma es ' + suma+'<br>');
document.write("el resultado de la resta es " + resta + "<br>");
document.write("el resultado de la multiplicacion es " + multiplicacion + "<br>");
document.write("el resultado de la suma es " + division + "<br>");

console.log("el resultado de la suma es" + suma);
console.log("el resultado de la resta es" + resta);
console.log("el resultado de la multiplicacion es" + multiplicacion);
console.log("el resultado de la division es" + division);




/**FIN EJERCICIO 8 */
