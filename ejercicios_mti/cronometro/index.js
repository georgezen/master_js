let cant_minutes = 0;
cant_minutes= parseInt(prompt('cuantos minutos quieres?'));
while (cant_minutes < 1 || cant_minutes > 100){
    cant_minutes= parseInt(prompt('cuantos minutos quieres?'));
}

let total_segundos = cant_minutes * 60;

document.querySelector('.minute').innerHTML = cant_minutes;
document.querySelector('.segunde').innerHTML = total_segundos;