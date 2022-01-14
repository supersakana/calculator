// ------------------------------
// VARIABLES

let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');
let numBtn = document.querySelectorAll('.num');
let clearBtn = document.querySelector('.clear');

// ------------------------------
// EVENTS

// Displays number on the calc screen
numBtn.forEach(num => {
    num.addEventListener('click', () => {
        bottomText.innerText += num.value;
    })
})

// Clears the screen
clearBtn.addEventListener('click',() => {
    bottomText.innerHTML = '';
})

// ------------------------------
// FUNCTIONS

// TEST
function test(){
    console.log('testy')
}

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