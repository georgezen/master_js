'use strict';

var nombre = document.querySelector('#nombre');
var apellido = document.querySelector('#apellido');
var buton = document.querySelector('#buton');
var calcado = document.querySelector("#calcado");
var clear = document.querySelector("#clear");
var contador = 0;
var error = '';

buton.addEventListener('click', () => calcar_mamada());
clear.addEventListener('click', () => limpiar());

function calcar_mamada() {
    var calca_nombre = nombre.value;
    var calca_apellido = apellido.value;

    validacion(calca_nombre, calca_apellido);

    if (validacion() != 0) {
        error = "Rellene el formulario hijo de la verga";
        calcado.innerHTML += error;
        
    } else {
        error = "";
        var parrafo = document.createElement("p");
        parrafo.append("El nombre es: " + calca_nombre);
        parrafo.append("El apellido es: " + calca_apellido);

        calcado.append(parrafo);
        
    }
        
    contador = 0;    
    
    
}

var limpiar = () => {
    calcado.innerHTML = '';
};


function validacion(calca_nombre, calca_apellido) {

    if (calca_nombre = "" || calca_apellido == "") {
        contador++;
    } 
    return contador;
}