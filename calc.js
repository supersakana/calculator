// ------------------------------
// VARIABLES

let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');
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
        bottomText.innerText = newNum;
    })
})

//When Operator is pressed
operBtn.forEach(oper => {
    oper.addEventListener('click', () =>{

        let param1 = bottomText.innerText;
        topText.innerText = param1;
        newOper = oper.value
        // topOper.innerText = oper.value;

        bottomText.innerText = 0;
        newNum = [];
    })
})

// When (=) is pressed
    equalBtn.addEventListener('click', () => {
        
        let param1 = topText.innerText;
        let param2 = bottomText.innerText;
        let param3 = newOper;
        console.log(param1, param2, param3);

        // operate(param3, param1, param2);

    })

    // Clears calculator
    clearBtn.addEventListener('click',() => {
        newNum = [];
        topText.innerText = '';
        newOper = '';
        bottomText.innerText = 0;
    })

// ------------------------------
// FUNCTIONS

// ADD
function add(a, b){
    return a + b;
}

// SUBTRACT
function subtract(a, b){
    return a - b;
}

// MULTIPLY

function multiply(a, b){
    return  a * b;
}

// DIVIDE
function divide(a, b){
    return a / b;
}

//OPERATOR
function operate(operator, a, b){
    a = Number(a);
    b = Number(b);
   switch(operator){
    case '+':
        add(a, b);
        break;
    case '-':
        subtract(a, b);
        break;
    case '*':
        multiply(a, b);
        break;
    case '/':
        divide(a, b);
        break;
   }
}