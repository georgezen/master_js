"use strict";


function calculadora(numero1, nmerero2, operador) {
    
    var resultado = 0;
    switch (operador) {
        case "+":
            resultado = numero1 + nmerero2;
        break;
        case "-":
            resultado = numero1 - nmerero2;
        break;
        case "*":
            resultado = numero1 * nmerero2;
            break;
        
        case "/":
            resultado = numero1 / nmerero2;
        break;
        default:
            console.log('ingrese algo no sea pendejo');
        break;
    }
    return resultado;
}

document.write(calculadora(2, 4, "/"));