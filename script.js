
//Variables
let firstNumber = null;
let secondNumber = null;
let operator = null;

// Select all buttons with the class 'num'
const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator')

// Number button click handling
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (operator === null) {
            // If operator is not chosen yet, build the firstNumber
            firstNumber = (firstNumber || "") + this.value;
        } else {
            // If operator is already chosen, build the secondNumber
            secondNumber = (secondNumber || "") + this.value;
        }
        updateDisplay();
    });
});


//Operator
operatorButtons.forEach(button => {
    button.addEventListener('click', function() {

        if (firstNumber !== null && secondNumber === null) {
            operator = this.value;
        }
        updateDisplay();
    });
});


//Equals
document.getElementById('operator-equals').addEventListener('click', function() {

    if (secondNumber !== null) {
        const result = myCalc(parseFloat(firstNumber), parseFloat(secondNumber), operator);

        //reset calculation
        firstNumber = result;
        equals = true;
        updateDisplay(equals);

        secondNumber = null;
        operator = null;


    }

});

// myCalc function
function myCalc(a, b, op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error';
        default: return 'Invalid Operation';
    }
}

// Update display function
function updateDisplay(equals) {

    if (equals) {
    document.querySelector('.display-number-top').textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    document.querySelector('.display-number-bottom').textContent = firstNumber || "0";
    } else {
    document.querySelector('.display-number-top').textContent = `${firstNumber || ""} ${operator || ""} ${secondNumber || ""}`;
    document.querySelector('.display-number-bottom').textContent = firstNumber || "0";
    }
}

//reset button

document.getElementById('clearButton').addEventListener('click', function() {
    
    firstNumber = null;
    secondNumber = null;
    operator = null;

    updateDisplay();


});



