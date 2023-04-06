let array_filas = [];
let array_numeros = [];
let num = 0;
let size_array = 0;
size_array= parseInt(prompt('tamaño de matriz'));
while (size_array < 1 || size_array > 100){
    size_array= parseInt(prompt('tamaño de matriz'));
}

for (let i = 0; i < size_array; i++) {
    for (let j = 0; j < size_array; j++) {

        num = Math.random() * 5;
        array_numeros.push(Math.trunc(num));
    }
    array_filas.push(array_numeros);
    array_numeros = [];
}
let valor_indice_igual = 0;
var cont_num_iguales =0;
var text = "";
console.log(array_filas);
for (x = 0; x < array_filas.length; x++) {
    
    
    for (y = 0; y < array_filas[x].length; y++) {
        text += array_filas[x][y] + "\t";
        console.log(x, y);
        if (x == 0 && y == 0) {
            valor_indice_igual = array_filas[x][y];
            
        }

        if (x == y) {
            console.log('indice igual');
            if (valor_indice_igual == array_filas[x][y]) {
                
                console.log(array_filas[x][y]);
                cont_num_iguales++;
                console.log('contador igual va en '+cont_num_iguales);
            }

        }


    }
    console.log(text);
}

if (cont_num_iguales == size_array ) {
    document.querySelector('.result').innerHTML = 'la diagonal '+text+' es diagonal con numeros iguales';
}else{
    document.querySelector('.result').innerHTML = 'la diagonal '+text+' no es diagonal con numeros iguales';
}

