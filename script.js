let operator ='';
let previousValue ='';
let currentValue ='';
let result = '';


let output = document.querySelector('.output');
let clear = document.querySelector('.clear');
let deleteButton = document.querySelector('.delete');
let decimal = document.querySelector('.decimal');
let equal = document.querySelector('.equal');
let prev = document.querySelector('.prev');
let current = document.querySelector('.current');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');




operators.forEach((op) => {
    op.addEventListener('click', (e) => {
        handleOp(e.target.textContent);
        prev.textContent = previousValue + ' ' + operator + ' ' + currentValue;
        current.textContent = currentValue;
    });
});

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
        current.textContent = currentValue;
    });
});

deleteButton.addEventListener('click', function() {
    currentValue = currentValue.slice(0, -1);
    current.textContent = currentValue;
});

clear.addEventListener('click', function() {
    previousValue = '';
    currentValue = '';
    operator = '';
    result = '';
    current.textContent = currentValue;
    prev.textContent = currentValue;
    
});


equal.addEventListener('click', function() {
    currentValue = Number(currentValue);
    previousValue = Number(previousValue);
    result = operate(operator, previousValue, currentValue);
    current.textContent = result;
    prev.textContent = result + ' ' + operator;
    previousValue = currentValue;
    currentValue = result;
    console.log(currentValue);
    console.log(previousValue);
    console.log(result);

});

function handleOp(opSign) {
    operator = opSign;
    previousValue = currentValue;
    currentValue = '';


}

function handleNumber(num) {
    if (currentValue.length < 6) {
        currentValue += num;
    }

}

function add(a,b) {
    return(parseFloat(a) + parseFloat(b));
}

function subtract(a,b) {
    return(parseFloat(a) - parseFloat(b));
}

function multiply(a,b) {
    return(parseFloat(a) * parseFloat(b));
}

function divide(a,b) {
    if (b === 0 || b === '0') {
        console.log("Error! Dividing by 0 will break the matrix!")
    }
    else {
        return(parseFloat(a) / parseFloat(b));
    }
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
    console.log(operator);
    console.log(a);
    console.log(b);
    
}





