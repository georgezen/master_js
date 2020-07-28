"use strict";
//esta linea de codigo activa el modo estricto de los estandares de ecma 6 y posteriores

var cachonda = "te pones bien cachonda";
var madre = "hija de tu puta madre";

cachonda = "perra";
//se puede sobreescribir los valores iniciales de las variables

console.log("hola pinche putita" + " " + cachonda + " " + madre);
document.write("hola pinche putita" + " " + cachonda + " " + madre);

// la diferencia entre let y var es que solo las variables con let, se definen a nivel de bloque,
// pero la palabra var es a nivel general
let perra = "diferencia entre let y var";
var perra2 = "hola";
perra2 = "hola hija de perra";
console.log(perra2);

if (true) {
  let perra2 = "otra pendejada";
  console.log(perra2);
}

console.log(perra2);


// const y el var el const permanece como un valor estilo variable, pero inmutable

const perra4 = 'yo perreo sola';
var perra5 = 32;

console.log(perra4);
//Recordar que el typeof detecta el tipo de dato de las variables 
console.log(typeof (perra4));
console.log(typeof perra5);
  
