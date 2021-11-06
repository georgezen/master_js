import {heroes,render} from './heroes.js';

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
    
   result.appendChild(ul);

    result.innerHTML += '<br>';
    result.innerHTML += 'hola'; 
 
}

