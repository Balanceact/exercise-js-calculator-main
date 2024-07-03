alert("Welcome! You'll be asked to input two numbers and an operator.");
const first = prompt("Please input the first number.");
const operator = prompt("Please input an operator (+, -, *, /).");
const second = prompt("Please input the second number.");
let result = 0;
switch (operator) {
    case "+":
        result = first + second;
        break;
    case "-":
        result = first - second;
        break;
    case "*":
        result = first * second;
        break;
    case "/":
        result = first / second;
        break;
    default:
        alert("Please input a valid operator.");
        break;
}

alert(first + " " + operator + " " + second + " = " + result);
alert("Have a nice day! :)");