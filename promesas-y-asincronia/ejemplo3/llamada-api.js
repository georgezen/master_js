'use strict';

var call_api = document.querySelector('#btn1');
var res = document.querySelector(".res-api");

call_api.addEventListener('click',()=> llamando_pokeApi());

function llamando_pokeApi() {
    res.innerHTML = "";
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(data => data.json())
    .then(pokemon => {
        console.log(pokemon.sprites.back_default);
       let img = document.createElement('img');
       img.width = 250;
       img.height = 150;
       img.src = pokemon.sprites.back_default;
       res.append(img);

    });
}