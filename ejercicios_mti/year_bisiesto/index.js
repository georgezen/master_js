let year = 0;
year= parseInt(prompt('Ingresa el año'));
while (year < 1600 || year > 3000){
    year= parseInt(prompt('Ingresa el año'));
}
let respuesta = ""
if(year % 400 == 0 && year % 100 == 0){
   respuesta = "S";
}else if(year % 4 == 0){
    respuesta = "S";
}else{
    respuesta = "N";
}


document.querySelector('.result').innerHTML = 'El año '+year+' es bisiesto? '+ respuesta;