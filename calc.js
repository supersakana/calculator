// VARIABLES------------------------------

// SELECTED
let topDisplay = document.getElementById('top-display');
let bottomDisplay = document.getElementById('bottom-display');
let numBtn = document.querySelectorAll('.num');
let operBtn = document.querySelectorAll('.oper');
let equalBtn = document.querySelector('.equal');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete')

// VACCANT
let newNum = [];
let newOper = ''
let total = 0;
let param1 = ''
let param2 = ''
let param3 = ''

// EVENTS------------------------------

// Displays number on the calc screen
numBtn.forEach(num => {
    num.addEventListener('click', () => {
        newNum += num.value;
        bottomDisplay.innerText = newNum;
    })
})

// When Operator is pressed
operBtn.forEach(oper => {
    oper.addEventListener('click', () => {
        param1 = bottomDisplay.innerText;
        param2 = topDisplay.innerText
        param3 = oper.value
        operate(param1, param2, param3);

        topDisplay.innerText = total;
        bottomDisplay.innerText = 0;
        newOper = oper.value
        newNum = [];
    })
})

// When (=) is pressed
equalBtn.addEventListener('click', () => {
    param1 = topDisplay.innerText;
    param2 = bottomDisplay.innerText;
    param3 = newOper;
    operate(param1, param2, param3);
    // total = digitLimit(total)

    newNum = [];
    topDisplay.innerText = '';
    bottomDisplay.innerText = total
    })

// Deletes single value 
deleteBtn.addEventListener('click', deleteMe);
    

// Clears calculator
clearBtn.addEventListener('click', clear);


// FUNCTIONS------------------------------

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
    if(b != 0){
    return total = a / b;
    } else {
        alert('Infinity');
        clear();
    }
}

//OPERATOR
function operate(a, b, operator){
    if(b == '' && operator == ' ÷ ' || b == '' && operator == ' * '){
        b = 1;
    }

    if( operator == ' - ' && b != ''){
        a = topDisplay.innerText;
        b = bottomDisplay.innerText;
    }

    if( operator == ' ÷ ' && b != 1){
        a = topDisplay.innerText;
        b = bottomDisplay.innerText;
    }
        
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

// DELETE
function deleteMe() {
    newNum = Array.from(bottomDisplay.innerText);
    newNum.pop();
    bottomDisplay.innerText = newNum.join("")  
}

// CLEAR
function clear(){
    newNum = [];
        newOper = '';
        topDisplay.innerText = '';
        bottomDisplay.innerText = 0;
        total = 0;
}

// DIGIT LIMIT
function digitLimit(number){
    numArr = Array.from(number);

    if(numArr.length >= 11){
        return number.toFixed(2);
    } else {
        return number
    }
    
    
}