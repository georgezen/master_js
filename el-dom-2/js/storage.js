'use strict';

if (typeof(Storage) !== 'undefined') {
    console.log("disponible");
} else {
    console.log("no disponible");
}

//Guardar datos del localstorage

// var cadena_json = 'hola pinche putita';

// localStorage.setItem('cadena', cadena_json);

// //Se rescatan valores de localstorage y se imprime como putas quieras
// document.write(localStorage.getItem('cadena'));

// var obj_json = {
//     nombre: cadena_json,
//     apellidos: 'garcia robles',
//     edad:90
// }

// //forma de guardar dentro de local storage un objeto
// localStorage.setItem('obj', JSON.stringify(obj_json));

var storage = document.querySelector("#storage");
var buton = document.querySelector("#buton");
var resaltado = document.querySelector("#deposito");

buton.addEventListener('click',() => agregando());

var agregando = () => {
    var cadena = storage.value;

    if ( cadena == "") {
        alert('rellene un valor');
        return false;
    }

    var objeto2 = {
        nombre : cadena
    }

    //depositar objetos en localstorage
    localStorage.setItem("storage", JSON.stringify(objeto2));
    decodificacion();
    storage.innerHTML = "";
};

function decodificacion() {
  //obtener nombres de objetos en localstorage
  var decodificado = JSON.parse(localStorage.getItem("storage"));
  resaltado.innerHTML += decodificado.nombre + "\n";
  
}





