
//Variables
let topDisplayNumber = null;
let firstNumber = null;
let secondNumber = null;
let operator = null;
let equals = false;
let operatorDirectCalculate = false;
let newOperator = false;
let finalizedSum = false;

// Select all buttons with the class 'num'
const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator')

// Number button click handling
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (operator === null && finalizedSum == false) {
            // If operator is not chosen yet, build the firstNumber
            firstNumber = (firstNumber || "") + this.value;
            updateDisplay();
        } else if (finalizedSum == false) {
            // If operator is already chosen, build the secondNumber
            secondNumber = (secondNumber || "") + this.value;
            updateDisplay();
        }
        
    });
});


//Operator
operatorButtons.forEach(button => {
    button.addEventListener('click', function() {

        finalizedSum = false;

        if (firstNumber !== null && secondNumber !== null) {
            console.log('Operator1');
            operatorDirectCalculate = true;
            newOperator = this.value;
            document.getElementById('the-equals2').click();
        }

       else if (firstNumber !== null && secondNumber === null) {
            console.log('Operator2');
            operator = this.value;
            updateDisplay();
        } 
    });
});


//Equals
document.getElementById('the-equals2').addEventListener('click', function() {

    if (operatorDirectCalculate){
        const result = myCalc(parseFloat(firstNumber), parseFloat(secondNumber), operator);

        console.log('Equals1');
        firstNumber = result;
        finalizedSum = true;
        updateDisplay();
        secondNumber = null;
    }
    
    else if (secondNumber !== null) {
        const result = myCalc(parseFloat(firstNumber), parseFloat(secondNumber), operator);

        console.log('Equals2');

        topDisplayNumber = firstNumber;
        firstNumber = result;
        finalizedSum = true;
        equals = true;
        updateDisplay();
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
function updateDisplay() {

    if (operatorDirectCalculate) {
        console.log('Display1');
        document.querySelector('.display-number-top').textContent = `${firstNumber} ${newOperator}`;
        document.querySelector('.display-number-bottom').textContent = firstNumber;
        operatorDirectCalculate = false;
        operator = newOperator;
        newOperator = false;
        finalizedSum = false;
        return;
    }
    else if (equals) {
        console.log('Display2');
        document.querySelector('.display-number-top').textContent = `${topDisplayNumber || ""} ${operator || ""} ${secondNumber || ""} =`;
        document.querySelector('.display-number-bottom').textContent = firstNumber || "0";
        equals = false;
        return;
    } else {
        console.log('Display3');
        document.querySelector('.display-number-top').textContent = ``;
        document.querySelector('.display-number-bottom').textContent = `${firstNumber || ""} ${operator || ""} ${secondNumber || ""}`;
        return;
}       

}

//reset button

document.getElementById('clearButton').addEventListener('click', function() {
    
    topDisplayNumber = null;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    equals = false;
    operatorDirectCalculate = false;
    newOperator = false;
    finalizedSum = false;
    updateDisplay();

});




