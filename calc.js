// VARIABLES

// EVENTS

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