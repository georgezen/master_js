'use strict';


var presioname = document.querySelector("#presioname");
var texto = document.querySelector("#texto");
presioname.addEventListener('click', () => llamadoTexto());

function llamadoTexto() {
    setTimeout(() => {
        texto.innerHTML += "hola" + "\n";    
    }, 5000);
    
}