"use strict";

console.log("dsds");

var puntaje = 500;
var ronda = [];
var dardo_puntos = 0;
var resultados = document.querySelector(".resultados");
var buton = document.querySelector("#buton");
var new1 = document.querySelector("#new");
var contador = 0;

buton.addEventListener('click', () => ronda_dardos());
new1.addEventListener("click", () => new_game());

function ronda_dardos() {

  
  if (puntaje > 0) {
    
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
      

      if (puntaje == 0) {
        ronda.push(dardo_puntos);
        break;
      }
      ronda.push(dardo_puntos);

      console.log(ronda);
      console.log("tu puntaje restante es: " + puntaje);
    }
    contador = contador + 1;

    resultados.innerHTML += "tu puntaje restante es: " + puntaje + "<br>";
    resultados.innerHTML += "Tus puntos de los dardos son: " + ronda + "<br>";
    resultados.innerHTML += "Has concluido la ronda: " + contador + "<br>";

    if (puntaje == 0) {
      resultados.innerHTML += "juego terminado ";
      buton.style.display = "none";
      new1.style.display = 'block';
      contador = 0;
    }

    ronda = [];
    
  }
}

  
var new_game = () => { 
  resultados.innerHTML = "";
  puntaje = 500;
  resultados.innerHTML += "Tu puntaje ha sido reseteado"+ "<br>";
  buton.style.display = "block";
  new1.style.display = "none";
};



