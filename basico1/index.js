
const name1 = document.querySelector('#name');
const last_name = document.querySelector('#last_name');
const save = document.querySelector('#save');
const render = document.querySelector('#render');


let arra = [];


save.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
        nombre: name1.value,
        last_name: last_name.value
    };

    agregando(data);
    
});

render.addEventListener('click', () => {
    
    document.querySelector('.show').innerHTML = '';
    let lista = document.createElement('ul');

    arra.map(({nombre,last_name}) => {
        let punto = document.createElement('li');
        let text1 = document.createTextNode(nombre+" "+last_name);
        punto.append(text1);
        lista.append(punto);
    });
    
    console.log(lista);
    document.querySelector('.show').append(lista);
    arra = [];
});


const agregando = (data) => {
    //let { nombre, last_name } = data;
    
    arra.push(data);
    
}

