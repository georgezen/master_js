"use strict";
var json = document.querySelector(".json");
var objeto = document.querySelector("#objeto");

objeto.addEventListener('click', () => impreso());

function impreso() {
    var nopor = {
      pagina: "youporn",
      anio: 2010,
      visitantes: 1000000,
    };
    var cadena = "";
    for (var index in nopor) {
      cadena += nopor[index] + "<br>";
    }

    json.innerHTML += cadena;    
}




