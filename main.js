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
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2);
            break;
        case 'divide':
            return divide(num1, num2);
            break;
    }
}

let operand1;
let operand2;
let tempResult;

let displayScreen = document.getElementById('display');

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
let currentOperator;

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