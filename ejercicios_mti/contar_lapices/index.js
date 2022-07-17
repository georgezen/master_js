let tot_medidas_lapiz = parseInt(prompt('Cuantas medidas de lapiz ocupas buscar?'));
let tamano_lapiz = parseInt(prompt('Que medida quieres buscar?'));

let array_med_lapices = [];

for (let index = 1; index <= tot_medidas_lapiz; index++) {
    var medida_lapiz = parseInt(prompt('Medida de lapiz '+index));
    array_med_lapices.push(medida_lapiz);
}

let cont = 0;
for (let index = 0; index < array_med_lapices.length; index++) {
    if (array_med_lapices[index] == tamano_lapiz) {
        cont ++;
    }
    
}

document.querySelector('.result').innerHTML = 'Los lapices con la medida '+tamano_lapiz+' son '+ cont;
