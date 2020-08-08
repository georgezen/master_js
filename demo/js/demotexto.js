"use strict";

var texto = document.querySelector("#texto");
var mayuscula = document.querySelector("#mayuscula");
var minuscula = document.querySelector("#minuscula");
var cadena = document.querySelector("#cadena");
var resultado = document.querySelector(".resultado");
var tipo = 0;
var texto_val = "";
var reemplazar = document.querySelector("#reemplazar");
var search = document.querySelector("#search");
var search_string = document.querySelector("#search_string");

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

search_string.addEventListener("click", function (params) {
  texto_val = texto.value;
  
  tipo = 4;
  mostrar_texto(texto_val, tipo);
});

reemplazar.addEventListener("click", function (params) {
  texto_val = texto.value;

  tipo = 5;
  mostrar_texto(texto_val, tipo);
});

function mostrar_texto(texto_val, tipo) {
  if (texto_val == "") {
    texto_val = "ponga texto perro";
    resultado.innerHTML = texto_val;
  }
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
    case 4:
      //parte de busqueda de caracteres string
      resultado.innerHTML = texto_val.includes(search.value);

      break;
    case 5:
      //parte de reemplazo de caracteres string o cadenas enteras de texto
      resultado.innerHTML = texto_val.replace(texto_val,"212121");

      break;

    default:
      break;
  }
}


