alert("Welcome! You'll be asked to input two numbers and an operator.");
let result = 0;
let loop = true;
const first = prompt("Please input the first number.");
const second = prompt("Please input the second number.");
let operator = " ";
while (loop) {
    operator = prompt("Please input an operator (+, -, *, /).");
    switch (operator) {
        case "+":
            result = parseInt(first) + parseInt(second);
            loop = false;
            break;
        case "-":
            result = first - second;
            loop = false;
            break;
        case "*":
            result = first * second;
            loop = false;
            break;
        case "/":
            result = first / second;
            loop = false;
            break;
        default:
            alert("Please input a valid operator.");
            break;
    }
}

alert(first + " " + operator + " " + second + " = " + result);
alert("Have a nice day! :)");