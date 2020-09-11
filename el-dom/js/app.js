'use strict';

window.addEventListener('load', () => {
    var presioname = document.querySelector("#presioname");
    var texto = document.querySelector("#texto");
    var llamadoTexto1 = document.querySelector("#llamadoTexto");
    var recarga = document.querySelector("#recarga");
    var mostrar_form = document.querySelector("#mostrar_form");
    var form = document.querySelector("#form");
    var nombre = document.querySelector("#nombre");

    presioname.addEventListener("click", () => llamadoTexto());
    recarga.addEventListener("click", () => recargaPagina());
    mostrar_form.addEventListener("click", () => mostrar_form1());
    nombre.addEventListener('keyup', () => calcando_texto());

    var llamadoTexto = () => {
      var texto1 = document.createTextNode("hola pinche putita");
      llamadoTexto1.appendChild(texto1);
    };

    //Esta parte es para manejar el bom, o sea la ventana del navegador
    var recargaPagina = () => window.location.reload();

    function mostrar_form1() {
      if (form.style.display == "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
    }

    function calcando_texto (){
      var calca_recoge = nombre.value;
      llamadoTexto1.innerHTML = calca_recoge;
    };
});// fin de onload


