'use strict';


var presioname = document.querySelector("#presioname");
var texto = document.querySelector("#texto");
var llamadoTexto1 = document.querySelector("#llamadoTexto");
var recarga = document.querySelector("#recarga");

presioname.addEventListener('click', () => llamadoTexto());

recarga.addEventListener("click", () => recargaPagina());

var llamadoTexto = () => {
    
    var texto1 = document.createTextNode("hola pinche putita" + "\n");
    llamadoTexto1.appendChild(texto1);

};


//Esta parte es para manejar el bom, o sea la ventana del navegador
var recargaPagina = () => window.location.reload();


