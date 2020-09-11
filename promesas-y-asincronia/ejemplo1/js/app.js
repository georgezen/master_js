'use strict';

var api = document.querySelector('#api');
const resultado = document.querySelector('.resultado');
api.addEventListener('click',()=> resultado1());

var resultado1 = () => {
    resultado.innerHTML += "llamada a la api" + '<br>';
    const url = 'https://pokeapi.co/api/v2/pokemon/2';

    setTimeout(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resultado.innerHTML += data.name + '<br>';
        })
        .catch(error => console.log(error));
        
    }, 2000);
    
};
