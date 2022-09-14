import * as inquirer from "inquirer";


type Operator = "+" | "-" | "*" | "/"

let num1: number;
let num2: number;
let currentOperator: Operator;

function isNumber(str: string): boolean {
    const mayBeNum = parseInt(str);
    const isNum: boolean =!isNaN(mayBeNum);
    return isNum;
}

function isOperator (operator: string): boolean {
    console.log(operator)
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


function firstInput(): void {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "num1", message: "Enter first Number:"})
        .then(answer => {
            if (answer["num1"] !== "") {
                const isNum:boolean = isNumber(answer["num1"])
                if (isNum ) {
                    num1 = parseInt(answer["num1"])
                    operator()
                }else{
                    console.log("Invalid Input...")
                    firstInput();
                }
             }
        })
}

function SecondInput(): void {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "num2", message: "Enter sexond Number:"})
        .then(answer => {
            if (answer["num2"] !== "") {
                const isNum:boolean = isNumber(answer["num2"])
                if (isNum) {
                    num2 = parseInt(answer["num2"])
                    const result: number = Calculator( num1, num2, currentOperator);
                    console.log(`Your Result is ::: ${num1} ${currentOperator} ${num2} = ${result}`)
                }
                else{
                    console.log("Invalid Input...")
                    SecondInput();
                }
            }
    })
}
function operator(): void {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "operator", message: "Enter operator:"})
        .then(answer => {
            if (answer["operator"] !== "") {
                const isOp: boolean = isOperator(answer["operator"]) 
                // console.log("answer",answer["operator"])
                // console.log("isOp",isOp)
                if (isOp) {
                    currentOperator = answer['operator']
                    // console.log("currentOperator",currentOperator)
                    SecondInput();
                }
                else{
                    console.log("Invalid Input Please Enter valid operator.")
                    operator();
                }
            }
    })
}

function Calculator(firstNumber: number, secondNumber :number, operator: Operator): number {
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

firstInput();
    
