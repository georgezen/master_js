"use strict";

var texto = document.querySelector("#texto");
var mayuscula = document.querySelector("#mayuscula");
var minuscula = document.querySelector("#minuscula");
var cadena = document.querySelector("#cadena");
var resultado = document.querySelector(".resultado");
var tipo = 0;
var texto_val = "";

mayuscula.addEventListener("click", function (params) {
  texto_val = texto.value;
  tipo = 1;
  mostrar_texto(texto_val, tipo);
});

minuscula.addEventListener("click", function (params) {
  texto_val = texto.value;
  tipo = 2;
  mostrar_texto(texto_val, tipo);
});

cadena.addEventListener("click", function (params) {
  texto_val = texto.value;
  tipo = 3;
  mostrar_texto(texto_val, tipo);
});

function mostrar_texto(texto_val, tipo) {
  switch (tipo) {
    case 1:
      resultado.innerHTML = texto_val.toUpperCase();
      break;

    case 2:
      resultado.innerHTML = texto_val.toLowerCase();
      break;

    case 3:
      resultado.innerHTML = texto_val.length;
      break;

    default:
      break;
  }
}


