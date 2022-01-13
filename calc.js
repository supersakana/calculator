// ------------------------------
// VARIABLES

let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');

const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

// NUMBERS
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
const zeroBtn = document.querySelector('.zero');
const deciBtn = document.querySelector('.deci');

// OPERATORS
const diviBtn = document.querySelector('.divi');
const multiBtn = document.querySelector('.multi');
const addBtn = document.querySelector('.add');
const subBtn = document.querySelector('.sub');
const equalBtn = document.querySelector('.equal');

// ------------------------------
// EVENTS
oneBtn.addEventListener('click', ()=>{
     bottomText.textContent = '1'
    });

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
    case '-':
        subtract(a, b);
    case '*':
        multiply(a, b);
    case '/':
        divide(a, b);
   }
}