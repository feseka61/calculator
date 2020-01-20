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
        case 'sub':
            return subtract(num1, num2);
            break;
        case 'mult':
            return multiply(num1, num2);
            break;
        case 'div':
            return divide(num1, num2);
            break;
    }
}

