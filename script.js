let operator ='';
let previousValue ='';
let currentValue ='';



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
    if (!!previousValue && !!currentValue) {
        calculate()    
        prev.textContent = '';
        current.textContent = previousValue;
    } else {
        
    }
    
    
});


 decimal.addEventListener('click', function() {
    addDec
 });
function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === '*') {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }
    previousValue = roundNum(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNum(result) {
    return Math.round(result * 10000) / 10000;
}

function handleOp(opSign) {
    operator = opSign;
    previousValue = currentValue;
    currentValue = '';


}
function addDec() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
}

function handleNumber(num) {
    if (currentValue.length < 6) {
        currentValue += num;
    }

}









