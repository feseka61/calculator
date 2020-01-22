function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    switch (operator) {
        case 'add':
            operatorSym = ' + '
            return add(num1, num2);
            break;
        case 'subtract':
            operatorSym = ' - '
            return subtract(num1, num2);
            break;
        case 'multiply':
            operatorSym = ' x '
            return multiply(num1, num2);
            break;
        case 'divide':
            operatorSym = ' / '
            return divide(num1, num2);
            break;
        case 'default':
            return num1;
            break;
    }
}

let operand1 = 0;
let operand2 = 0;
let tempResult = 0;
let operatorSym = ''

let displayScreen = document.getElementById('display');
let historyScreen = document.getElementById('history')

let numberButtons = Array.from(document.querySelectorAll('button.number'));

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', (e) => {
        if (displayScreen.textContent === '0') {
            displayScreen.textContent = numberButtons[i].value;
        } else {
            displayScreen.textContent += numberButtons[i].value;
        };
    });
};

let operatorButtons = Array.from(document.querySelectorAll('button.operator'));
let currentOperator = 'default';

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', (e) => {
        operand1 = +displayScreen.textContent;
        currentOperator = operatorButtons[i].value;
        displayScreen.textContent = '0';
    });
};

let functionButtons = Array.from(document.querySelectorAll('button.func'));

for (let i = 0; i < functionButtons.length; i++) {
    functionButtons[i].addEventListener('click', (e) => {
        switch (functionButtons[i].value) {
            case 'equals':
                operand2 = +displayScreen.textContent;
                displayScreen.textContent = operate(currentOperator, operand1, operand2);
                break;
            case 'clear':
                operand1 = 0;
                operand2 = 0;
                displayScreen.textContent = 0;
                historyScreen.textContent = 0;
                break;
            case 'delete':
                displayScreen.textContent = displayScreen.textContent.slice(0,-1);
                if (displayScreen.textContent === '') {
                    displayScreen.textContent = 0;
                };
                break;
        };
    });
};