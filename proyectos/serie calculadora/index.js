// Variables para almacenar los valores y operaciones de la calculadora
let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;
// Array para almacenar el historial de cálculos
let calculationHistory = [];

// Referencia al elemento display
const display = document.getElementById('display');
// Referencia al elemento historial
const historyList = document.getElementById('history-list');

// Inicializar el display
const updateDisplay = () => {
    display.value = displayValue;
};
updateDisplay();

// Cargar historial desde localStorage si existe
const loadHistory = () => {
    const savedHistory = localStorage.getItem('calculatorHistory');
    if (savedHistory) {
        calculationHistory = JSON.parse(savedHistory);
        updateHistoryDisplay();
    }
};

// Guardar historial en localStorage
const saveHistory = () => {
    // Limitar a los últimos 10 cálculos para no sobrecargar localStorage
    if (calculationHistory.length > 10) {
        calculationHistory = calculationHistory.slice(-10);
    }
    localStorage.setItem('calculatorHistory', JSON.stringify(calculationHistory));
};

// Actualizar la visualización del historial
const updateHistoryDisplay = () => {
    historyList.innerHTML = '';
    
    calculationHistory.forEach(entry => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const expression = document.createElement('span');
        expression.className = 'expression';
        expression.textContent = entry.expression;
        
        const result = document.createElement('span');
        result.className = 'result';
        result.textContent = entry.result;
        
        historyItem.appendChild(expression);
        historyItem.appendChild(result);
        historyItem.addEventListener('click', () => {
            displayValue = entry.result;
            updateDisplay();
        });
        
        historyList.appendChild(historyItem);
    });
};

// Añadir entrada al historial
const addToHistory = (expression, result) => {
    calculationHistory.push({ expression, result });
    saveHistory();
    updateHistoryDisplay();
};

// Función para ingresar dígitos
const inputDigit = digit => {
    if (waitingForSecondOperand) {
        displayValue = digit;
        waitingForSecondOperand = false;
    } else {
        // Reemplazar '0' con el dígito ingresado utilizando operador ternario
        displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    updateDisplay();
};

// Función para ingresar el punto decimal
const inputDecimal = () => {
    // Si estamos esperando el segundo operando, empezar con '0.'
    if (waitingForSecondOperand) {
        displayValue = '0.';
        waitingForSecondOperand = false;
        updateDisplay();
        return;
    }
    
    // Solo añadir un punto si no hay uno ya presente
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
};

// Función para realizar el cálculo utilizando un objeto de operaciones
const performCalculation = () => {
    const secondOperand = parseFloat(displayValue);
    
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => b === 0 ? 'Err' : a / b,
        '%': (a, b) => (a / 100) * b,
        'pow': (a) => a * a, // Potencia al cuadrado
        'sqrt': (a) => a < 0 ? 'Err' : Math.sqrt(a) // Raíz cuadrada
    };
    
    // Si es potencia o raíz cuadrada, solo necesitamos el primer operando
    if (operator === 'pow' || operator === 'sqrt') {
        return operations[operator](firstOperand);
    }
    
    return operations[operator] ? operations[operator](firstOperand, secondOperand) : secondOperand;
};

// Función para manejar operadores especiales (potencia, raíz)
const handleSpecialOperator = specialOperator => {
    const inputValue = parseFloat(displayValue);
    let result;
    let expression;
    
    if (specialOperator === 'sqrt') {
        // Para la raíz cuadrada, aplicamos directamente
        result = inputValue < 0 ? 'Err' : Math.sqrt(inputValue);
        expression = `√(${displayValue})`;
    } else if (specialOperator === 'pow') {
        // Para la potencia al cuadrado, aplicamos directamente
        result = inputValue * inputValue;
        expression = `(${displayValue})²`;
    }
    
    // Verificar si el resultado es válido
    if (result === 'Err') {
        displayValue = 'Err';
    } else {
        displayValue = String(result);
        // Redondear si el número tiene muchos decimales
        if (displayValue.includes('.')) {
            const [, decimal] = displayValue.split('.');
            if (decimal && decimal.length > 10) {
                displayValue = parseFloat(displayValue).toFixed(10).replace(/\.?0+$/, '');
            }
        }
        // Añadir al historial
        addToHistory(expression, displayValue);
    }
    
    // Reiniciar las variables
    firstOperand = parseFloat(displayValue);
    waitingForSecondOperand = true;
    updateDisplay();
};

// Función para manejar operadores
const handleOperator = nextOperator => {
    const inputValue = parseFloat(displayValue);
    
    // Manejar operadores especiales
    if (nextOperator === 'sqrt' || nextOperator === 'pow') {
        handleSpecialOperator(nextOperator);
        return;
    }
    
    // Si hay un operador pendiente y estamos esperando el segundo operando,
    // simplemente actualizamos el operador
    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        return;
    }
    
    // Si no hay primer operando, guardamos el valor actual
    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        // Si ya hay un primer operando y un operador, realizamos el cálculo
        const result = performCalculation();
        
        // Crear expresión para el historial
        let expression = `${firstOperand} `;
        switch(operator) {
            case '+': expression += '+ '; break;
            case '-': expression += '- '; break;
            case '*': expression += '× '; break;
            case '/': expression += '÷ '; break;
            case '%': expression += '% de '; break;
        }
        expression += `${displayValue}`;
        
        // Verificar si el resultado es válido usando operador ternario
        displayValue = result === 'Err' ? result : String(result);
        firstOperand = result === 'Err' ? null : result;
        
        // Añadir al historial si el resultado es válido
        if (result !== 'Err') {
            addToHistory(expression, displayValue);
        }
    }
    
    waitingForSecondOperand = true;
    operator = nextOperator;
    updateDisplay();
};

// Función para manejar el signo igual
const handleEqual = () => {
    // Si no hay operador, no hacemos nada
    if (!operator) return;
    
    // Realizar el cálculo
    const result = performCalculation();
    
    // Crear expresión para el historial
    let expression = `${firstOperand} `;
    switch(operator) {
        case '+': expression += '+ '; break;
        case '-': expression += '- '; break;
        case '*': expression += '× '; break;
        case '/': expression += '÷ '; break;
        case '%': expression += '% de '; break;
    }
    expression += `${displayValue}`;
    
    // Verificar si el resultado es válido
    if (result === 'Err') {
        displayValue = 'Err';
    } else {
        displayValue = String(result);
        // Redondear si el número tiene muchos decimales usando destructuring
        if (displayValue.includes('.')) {
            const [, decimal] = displayValue.split('.');
            if (decimal && decimal.length > 10) {
                displayValue = parseFloat(displayValue).toFixed(10).replace(/\.?0+$/, '');
            }
        }
        
        // Añadir al historial
        addToHistory(expression, displayValue);
    }
    
    // Reiniciar las variables
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    
    updateDisplay();
};

// Función para reiniciar la calculadora
const resetCalculator = () => {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
};

// Función para manejar el botón de retroceso
const handleBackspace = () => {
    // Usando operador ternario para simplificar la lógica
    displayValue = displayValue.length > 1 ? displayValue.slice(0, -1) : '0';
    updateDisplay();
};

// Función para manejar eventos de teclado
const handleKeyboard = event => {
    const { key } = event; // Uso de destructuring
    
    // Usando Map para tener un mapeo de teclas
    const keyActions = new Map([
        [/^\d$/, () => {
            event.preventDefault();
            inputDigit(key);
        }],
        ['.', () => {
            event.preventDefault();
            inputDecimal();
        }],
        ['Escape', () => {
            event.preventDefault();
            resetCalculator();
        }],
        ['Backspace', () => {
            event.preventDefault();
            handleBackspace();
        }]
    ]);
    
    // Verificar si la tecla es un operador
    const operators = ['+', '-', '*', '/', '%'];
    if (operators.includes(key)) {
        event.preventDefault();
        handleOperator(key);
        return;
    }
    
    // Verificar si la tecla es Enter o igual
    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        handleEqual();
        return;
    }
    
    // Atajos para potencia (^) y raíz (r)
    if (key === '^' || key === 'p') {
        event.preventDefault();
        handleOperator('pow');
        return;
    }
    
    if (key === 'r' || key === 'q') {
        event.preventDefault();
        handleOperator('sqrt');
        return;
    }
    
    // Buscar la acción para la tecla actual
    for (const [keyPattern, action] of keyActions) {
        if (typeof keyPattern === 'string' ? key === keyPattern : keyPattern.test(key)) {
            action();
            return;
        }
    }
};

// Configurar eventos utilizando arrow functions
// Botones numéricos
document.querySelectorAll('.btn-number').forEach(button => {
    button.addEventListener('click', () => inputDigit(button.value));
});

// Botón decimal
document.querySelector('.btn-decimal').addEventListener('click', inputDecimal);

// Operadores
document.querySelectorAll('.btn-operator').forEach(button => {
    button.addEventListener('click', () => {
        // Verificar si es el botón de retroceso
        if (button.id === 'backspace') {
            handleBackspace();
        } else {
            handleOperator(button.value);
        }
    });
});

// Botón igual
document.getElementById('equal').addEventListener('click', handleEqual);

// Botón limpiar
document.getElementById('clear').addEventListener('click', resetCalculator);

// Añadir soporte para teclado
document.addEventListener('keydown', handleKeyboard);

// Cargar historial al iniciar
loadHistory();

