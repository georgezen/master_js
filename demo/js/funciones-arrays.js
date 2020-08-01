"use strict";

function calculadora(numero1, nmerero2, operador) {
  var resultado = 0;
  switch (operador) {
    case "+":
      resultado = numero1 + nmerero2;
      break;
    case "-":
      resultado = numero1 - nmerero2;
      break;
    case "*":
      resultado = numero1 * nmerero2;
      break;

    case "/":
      resultado = numero1 / nmerero2;
      break;
    default:
      console.log("ingrese algo no sea pendejo");
      break;
  }
  return resultado;
}

document.write(calculadora(2, 4, "/"));

//esta funcion cuenta con parametros opcionales las cuales si las putas envias bien, si no ps a la verga
function persona(nombre = "", edad = 0) {
  if (nombre.length > 8 && edad > 18) {
    console.log(nombre, edad);
  } else if (nombre == "") {
    console.log("ponga un puto nombre ");
  }
}

persona();
persona('hola pinche putita',20);
