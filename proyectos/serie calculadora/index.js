const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const resultado = document.querySelector('#resultado');
const lista = document.querySelector('#operacion');
const btnSumar = document.querySelector('#calcular');

btnSumar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('hola');
    
    const n1 = parseInt(num1.value);
    const n2 = parseInt(num2.value);

    const verificado = validaciones(n1,n2,resultado);
    if (!verificado) return;
        

    const operacionSeleccionada = lista.value;

    const res = calcularOperacion(n1, n2, operacionSeleccionada);
    seteResultado(res);

});

const calcularOperacion = (n1, n2, operacion) => {
    switch (operacion) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        case '**':
            return n1 ** n2;            
        default:
            return 0;
    }
}

const seteResultado = (res) => {
    resultado.value = res;
}

const validaciones = (n1,n2,resultado) => {
    if (!n1 || !n2) {
        alert('Ingrese ambos números');
        return false;
    }
    if (isNaN(n1) || isNaN(n2)) {
        alert('Ingrese números válidos');
        return false;
    }

    if (n1 < 0 || n2 < 0) {
        alert('Ingrese números positivos');
        return false;
    }

    
    
    return true;
}

