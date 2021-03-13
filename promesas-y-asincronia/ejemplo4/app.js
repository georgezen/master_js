'use strict';

var res = document.querySelector('.result-promise');
var buton = document.querySelector('#buton');

buton.addEventListener('click',()=> execute());


function execute() {
    var numero = parseInt(prompt('Dame un puto numero',0));
    res.innerHTML = "";
    var prom = new Promise((resolver,reyect) =>{
        
        if (numero == 3) {
            return resolver('Acierto');
        } else {
            return reyect('Error 1');
        }
    
    });
    
    prom.then(data => {
        res.append(data);

        return segunda_promesa();
    })
    .then(timer =>  res.append(timer))
    .catch(error => {
        res.append(error);
        return tercer_promesa();
    })
    .then(timer2 =>  res.append(timer2));
}

function segunda_promesa() {
    return new Promise((resolve,reyect) => {
        var timer = Math.random() * 100;
        if (timer > 50) {
            return resolve(timer);
        } else {
            return reyect('El tiempo de quemado es de ' + timer +' segundos' );
        }
    });
    
}

function tercer_promesa() {
    return new Promise((resuelto,fallado) => {
    var timer = Math.random() * 10;
    if (timer > 5) {
        return resuelto(timer);
    } else {
        return fallado('El tiempo de quemado2 es de ' + timer +' segundos de la tercera' );
    }
    });
}
