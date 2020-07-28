"use strict";

console.log('hola');



var la_sopa = 'sopa de codo';
if (la_sopa == "sopa de fideo") {
    console.log('esta muy rica la'+' '+la_sopa);
} else {
    console.log("esta muy culera la" + " " + la_sopa);
}


//el switch solo se usa para valores fijos multiples de una sola variable
switch (la_sopa) {
    case "sopa de estrella":
        console.log('esta muy rica');
    break;
    case "sopa de codo":
        console.log('la sopa esta a toda madre');
    break;

    default:
        console.log('la sopa esta regular');
    break;
}

// bucle for donde se itera un numero finito de veces
var num = 10;
for (var i = 0; i <= num;i++) {
    console.log(i);
    
}