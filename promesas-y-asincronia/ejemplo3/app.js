'use strict';

var numero = document.querySelector('#numero');
var base = document.querySelector('#base');
var save_form = document.querySelector('#btn2');
var res = document.querySelector('.res-api');

save_form.addEventListener('click',() => save());

var save = () =>  {

    var divisor = base.value;
    var dividendo = numero.value;
    var resultin;
    var resudio = 0;
    var arra = [];
    
    res.innerHTML = "";
    do{

    
        resultin = Math.trunc(dividendo / divisor);
        resudio = dividendo % divisor;
        dividendo = resultin;
        arra.push(resudio);
        console.log('el residuo es ' + resudio);
        console.log('el resultado es ' + resultin);
    
    }
    while(dividendo >= divisor )
    arra.push(dividendo);
    
    res.append('Los numeros ordenados son '+ arra.reverse());
    // localStorage.setItem('numero',numero.value);
    // localStorage.setItem('base',base.value);
};