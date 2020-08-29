"use strict";
var json = document.querySelector(".json");
var objeto = document.querySelector("#objeto");

objeto.addEventListener('click', () => impreso());



function impreso() {
  console.time("ciclo");
  var nopor = {
    pagina: "youporn",
    anio: 2010,
    visitantes: 1000000,
  };
  var cadena = "";

  for (var index in nopor) {
    json.innerHTML += nopor[index] + "<br>";
  }



  console.log(cadena);
  console.timeEnd("ciclo");
}

