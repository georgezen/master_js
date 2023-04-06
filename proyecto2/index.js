import {valid}  from './valid.js';



const save = document.querySelector('#save');

save.addEventListener('click' ,(e)=>{
    e.preventDefault();

const nombre = document.querySelector('#nombre').value;
const apellidos = document.querySelector('#apellidos').value;
    let data = {
        name:nombre,
        last_name:apellidos
    }
    

    valid(data);
});


