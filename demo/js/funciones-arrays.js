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
  } else if (nombre.length > 3 && nombre.length < 6) {
    cuatro();
  } else if (nombre.length > 7 && nombre.length < 10) {
    cinco();
  }
}

function cuatro() {
  console.log("cuatro caracteres");
}

function cinco() {
  console.log("cinco caracteres");
}

persona("212122 212121 2121", 20);

//FUNCIONES ANONIMAS Y CALLBACKS

var tipo_teclado = function (nombre) {
  document.write(nombre);
};

//practicando los callbacks

function ejemplo1_callback(nombre, callback1, callback2) {
  callback1(nombre);
  callback2(nombre);
  return "Mi nombre es: " + nombre;
}

ejemplo1_callback(
  "pepe balderas",
  function (nombre1) {
    console.log(nombre1);
  },
  function (datp2) {
    document.write(datp2 + "<br>");
  }
);

function hola(texto1, callback3) {
  var cadena = "esta es una cadena " + texto1;
  console.log(cadena);

  callback3(texto1);
}

hola("hola pinche putita", function (texto1) {
  document.write(texto1 + "<br>");
});

function llamando(cadena, numero, callback4) {
  var trozo = cadena + numero;
  callback4(numero);
  return trozo;
}

// llamando('hola putita', 4, function (trozo) {
//   console.log(trozo);
// });

// fin practicando los callbacks

//funcion que llama a un arrow function
llamando("hola putita", 4, (trozo) => {
  console.log(trozo);
});

//Funciones de flecha que son normalmente anonimas y esta es una funcion flecha de una funcion
var hi = () => "Hello World";

console.log(hi());

var flecha = (ubo, dos) => console.log(ubo + dos);

flecha(2, 3);

function flecha2(apellidos, edad2, callback5, callback6,callback7) {
  var frase = "tus apellidos son " + apellidos + " y tu edad es " + edad2;
  callback5(apellidos);
  callback6(edad2);
  callback7(frase);
  return frase;
}

flecha2(
  "garcia",
  43,
  function (data) {
    document.write(data+'<br>');
  },
  trozo2 => {
    document.write(trozo2 + "<br>");
  }, trozo3 => {
    document.write(trozo3 + "<br>");
  }
);

var flecha3 = () => console.log('solo flecha');
flecha3();
// fin Funciones de flecha
