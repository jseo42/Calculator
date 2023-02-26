const numButton = document.querySelectorAll('.num-button');
const operationButton = document.querySelectorAll('.operation');
const clearButton = document.querySelector('#all-clear');
const delButton = document.querySelector('.delete');
const equalsButton = document.querySelector('#equals');
const previousOutput = document.querySelector('.previous-ouput');
const output = document.querySelector('.output');

numButton.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
    });
});

operationButton.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
    });
});

clearButton.addEventListener('click', () => {
    console.log(clearButton.textContent);
});

delButton.addEventListener('click', () => {
    console.log(delButton.textContent);
});

equalsButton.addEventListener('click', () => {
    console.log(equalsButton.textContent);
});






function add(a,b) {
    console.log(a + b);
}

function subtract(a,b) {
    console.log(a - b);
}

function multiply(a,b) {
    console.log(a * b);
}

function divide(a,b) {
    if (b == 0) {
        console.log("Error! Dividing by 0 will break the matrix!")
    }
    else {
        console.log(a / b);
    }
}



function operate(operator, a, b) {
    let aNum = parseFloat(a);
    let bNum = parseFloat(b);
    switch (operator) {
        case '+':
            return add(aNum, bNum);
        case '-':
            return subtract(aNum, bNum);
        case '&#215;':
            return multiply(aNum, bNum);
        case '÷':
            return divide(aNum, bNum);
        default:
            return null;
    }
 
}





