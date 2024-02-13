
const respuesta = document.querySelector('#respuesta');

let num1 = 0;
let num2 = 1;
let total = 0;
let limit = prompt('Ingrese el limite de la serie de fibonacci');
let anteriorNum = 0;

for(let i = 0;i < limit; i++){

        total = num1 + num2;
        num1 = num2;
        num2 = total;

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = `iteraccion ${i+1} ${total}`;
        li.appendChild(span);
        ul.appendChild(li);
        respuesta.appendChild(ul);

        
        console.log('iteraccion '+ (i+1) + ' ' + total);

}