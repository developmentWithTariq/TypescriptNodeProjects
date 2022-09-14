import * as inquirer from "inquirer";


let counter: number = 0;
const numberOfChances: number = 3;
let remainingChances: number = numberOfChances;

let randomNumer: number = Math.floor( Math.random()* 30 ) +1;

function isNumber(str: string): boolean {
    const mayBeNum = parseInt(str);
    const isNum: boolean =!isNaN(mayBeNum);
    return isNum;
}

function guessANumber(): void {    
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "num", message: "Guess a Number between 1 to 30"})
        .then(answer => {
            if (answer["num"] !== "") {
                const isNum:boolean = isNumber(answer["num"])
                if (isNum) {
                    counter++;
                    let guessedNumber = parseInt(answer["num"])
                    if (guessedNumber === randomNumer){
                        console.log(`Congrats! Correct number you won the Game in ${counter} chance`)
                    }
                    else if (guessedNumber > randomNumer && counter < numberOfChances){
                        console.log(`Guessed number is greater than actual number and your ${remainingChances} chances are remaining`);
                        remainingChances--;
                        guessANumber();
                    }
                    else if (guessedNumber < randomNumer && counter < numberOfChances){
                        console.log(`Guessed number is lower than actual number and your ${remainingChances} chances are remaining`)
                        remainingChances--;
                        guessANumber();
                    }
                    else{
                        console.log(`You lose Actual Number was ${randomNumer} Tryagain  `)
                    }
                    // const result: number = Calculator( num1, num2, currentOperator);
                    // console.log(`Your Result is ::: ${num1} ${currentOperator} ${num2} = ${result}`)
                }
                else{
                    console.log("Invalid Input! Please enter valid Number.")
                    guessANumber();
                }
            }
        })
    }
guessANumber();