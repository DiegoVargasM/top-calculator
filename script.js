//create global variables for values and operator
let previousValue = '';
let currentValue = '';
let operator = '';

//store all components on HTML in our JS
let clear = document.querySelector(".clear");
let dlt = document.querySelector(".delete");
let equal = document.querySelector(".btn-equal");
let decimal = document.querySelector(".btn-decimal");

let numbers = document.querySelectorAll(".btn-number");
let operators = document.querySelectorAll(".btn-o");

let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

//create event listener for number buttons and change currentValue
numbers.forEach((number) => number.addEventListener('click', function(e) {
    handleNumber(e.target.value);
    //show the currentValue in the currentScreen display
    currentScreen.textContent = currentValue;
}))

//function to add the clicked numbers to the currentValue variable
function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}

//create event listener for operator buttons and change operator value
operators.forEach((op) => op.addEventListener('click', function (e) {
    handleOperator(e.target.value);
    //after the operator has been chosen, display the prev value and the
    //operator on the previous screen
    previousScreen.textContent = previousValue + " " + operator;
    //reset the current screen display
    currentScreen.textContent = currentValue;
}))

//function to add the operator to the operator variable, move 
//the current value to the previous value and then empty the current value
function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

//create clear button event listener
clear.addEventListener('click', function () {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = previousValue;
})

//listen to equal button to trigger a calculation
equal.addEventListener('click', function () {
    calculate();
})

//calculate function
function calculate() {
    //convert input to numbers
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    //operations logic
    if (operator === "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
    } else if (operator === "*") {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }
    console.log(previousValue);
}
