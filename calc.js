// ------------------------------
// VARIABLES

let topDisplay = document.getElementById('top-display');
let bottomDisplay = document.getElementById('bottom-display');
let numBtn = document.querySelectorAll('.num');
let operBtn = document.querySelectorAll('.oper');
let equalBtn = document.querySelector('.equal');
let clearBtn = document.querySelector('.clear');
let newNum = [];
let newOper = ''
let total = 0;

// ------------------------------
// EVENTS

// Displays number on the calc screen
numBtn.forEach(num => {
    num.addEventListener('click', () => {
        newNum += num.value;
        bottomDisplay.innerText = newNum;
    })
})

//When Operator is pressed
operBtn.forEach(oper => {
    oper.addEventListener('click', () =>{
        let param1 = bottomDisplay.innerText;
        topDisplay.innerText = param1;
        newOper = oper.value
        bottomDisplay.innerText = 0;
        newNum = [];
    })
})

// When (=) is pressed
    equalBtn.addEventListener('click', () => {
        let param1 = topDisplay.innerText;
        let param2 = bottomDisplay.innerText;
        let param3 = newOper;
        operate(param1, param2, param3);
        topDisplay.innerText = ''
        newNum = [];
        topDisplay.innerText = param1 + param3 + param2;
        bottomDisplay.innerText = total
    })

    // Clears calculator
    clearBtn.addEventListener('click',() => {
        newNum = [];
        newOper = '';
        topDisplay.innerText = '';
        bottomDisplay.innerText = 0;
        total = 0;
    })

// ------------------------------
// FUNCTIONS

// ADD
function add(a, b){
    return total = a + b;
}

// SUBTRACT
function subtract(a, b){
    return total = a - b;
}

// MULTIPLY

function multiply(a, b){
    return  total = a * b;
}

// DIVIDE
function divide(a, b){
    return total = a / b;
}

//OPERATOR
function operate(a, b, operator){
    a = Number(a);
    b = Number(b);
   switch(operator){
    case ' + ':
        add(a, b);
        break;
    case ' - ':
        subtract(a, b);
        break;
    case ' * ':
        multiply(a, b);
        break;
    case ' ÷ ':
        divide(a, b);
        break;
   }
}