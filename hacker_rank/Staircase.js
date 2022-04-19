'use strict';

function staircase(n) {
    // Write your code here
    let arra = [];
    let espaciado = " ";
    let total_espacios = n -1;
    let caracter = "#";
    
    if(n > 0 && n < 100){
        for(let i = 1; i <= n; i++){
            arra.unshift(espaciado.repeat(total_espacios)+caracter.repeat(i));
            console.log(arra.join("\n"));
            arra = [];
            total_espacios--;
        }
        
    }
}

staircase(6);