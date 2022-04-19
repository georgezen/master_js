import {heroes,render} from './heroes.js';
import {promesa2} from './promesa2.js';
console.log(); 

const show = document.querySelector('#show');
const result = document.querySelector('.result');
const clear = document.querySelector('#clear');

show.addEventListener('click', () => {

   pintandoRender();
});

clear.addEventListener('click', () => {
    result.innerHTML = '';
});


const pintandoRender = async () => {
    let ul = await render(heroes);
    const num = await promesa2(1);
   result.appendChild(ul);

    result.innerHTML += '<br>';
    result.innerHTML +=  num; 
   
}




