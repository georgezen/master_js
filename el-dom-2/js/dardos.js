"use strict";

console.log("dsds");

var puntaje = 500;
var ronda = [];
var dardo_puntos = 0;
var resultados = document.querySelector(".resultados");

while (puntaje > 0) {
  for (let index = 0; index <= 2; index++) {
    dardo_puntos = parseInt(prompt("dame tu puntaje"));

    while (
      dardo_puntos <= 0 ||
      dardo_puntos > 100 ||
      isNaN(dardo_puntos) ||
      puntaje - dardo_puntos < 0
    ) {
      dardo_puntos = parseInt(prompt("dame tu puntaje correcto pendejo"));
    }

    puntaje -= dardo_puntos;
    ronda.push(dardo_puntos);

    console.log(ronda);
    console.log("tu puntaje restante es: " + puntaje);
  }

  resultados.innerHTML += "tu puntaje restante es: " + puntaje + "<br>";
  resultados.innerHTML += "Tus puntos de los dardos son: " + ronda + "<br>";

  ronda = [];
}
resultados.innerHTML += "juego terminado ";
