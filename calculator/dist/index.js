import * as inquirer from "inquirer";
function isNumber(str) {
    const mayBeNum = parseInt(str);
    const isNum = !isNaN(mayBeNum);
    return isNum;
}
function isOperator(operator) {
    console.log(operator);
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
let num1;
let num2;
let currentOperator;
function firstInput() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "num1", message: "Enter first Number:" })
        .then(answer => {
        if (answer["num1"] !== "") {
            const isNum = isNumber(answer["num1"]);
            // console.log(isNum)
            if (isNum) {
                num1 = parseInt(answer["num1"]);
                operator();
            }
            else {
                console.log("Invalid Input...");
                firstInput();
            }
        }
        // SecondInput();
    });
}
function SecondInput() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "num2", message: "Enter sexond Number:" })
        .then(answer => {
        if (answer["num2"] !== "") {
            const isNum = isNumber(answer["num2"]);
            if (isNum) {
                num2 = parseInt(answer["num2"]);
                const result = Calculator(num1, num2, currentOperator);
                console.log(`Your Result is ::: ${num1} ${currentOperator} ${num2} = ${result}`);
                // console.log(isNum) 
            }
            else {
                console.log("Invalid Input...");
                SecondInput();
            }
        }
    });
}
function operator() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "operator", message: "Enter operator:" })
        .then(answer => {
        if (answer["operator"] !== "") {
            const isOp = isOperator(answer["operator"]);
            // console.log("answer",answer["operator"])
            // console.log("isOp",isOp)
            if (isOp) {
                currentOperator = answer['operator'];
                // console.log("currentOperator",currentOperator)
                SecondInput();
            }
            else {
                console.log("Invalid Input Please Enter valid operator.");
                operator();
            }
        }
        // console.log(num1,num2)
    });
}
firstInput();
// function cal(){
//     firstInput();
//     operator();
//     SecondInput();
//     console.log(`first Number is ${num1}/n second numberis ${num2} and operator is ${currentOperator}`)
// }
// cal()
function Calculator(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
    }
}
