import * as inquirer from "inquirer";
let counter = 0;
const numberOfChances = 3;
let remainingChances = numberOfChances;
let randomNumer = Math.floor(Math.random() * 30) + 1;
function isNumber(str) {
    const mayBeNum = parseInt(str);
    const isNum = !isNaN(mayBeNum);
    return isNum;
}
function guessANumber() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "num", message: "Guess a Number between 1 to 30" })
        .then(answer => {
        if (answer["num"] !== "") {
            const isNum = isNumber(answer["num"]);
            if (isNum) {
                counter++;
                let guessedNumber = parseInt(answer["num"]);
                if (guessedNumber === randomNumer) {
                    console.log(`Congrats! Correct number you won the Game in ${counter} chance`);
                }
                else if (guessedNumber > randomNumer && counter < numberOfChances) {
                    console.log(`Guessed number is greater than actual number and your ${remainingChances} chances are remaining`);
                    remainingChances--;
                    guessANumber();
                }
                else if (guessedNumber < randomNumer && counter < numberOfChances) {
                    console.log(`Guessed number is lower than actual number and your ${remainingChances} chances are remaining`);
                    remainingChances--;
                    guessANumber();
                }
                else {
                    console.log(`You lose Actual Number is ${randomNumer} Tryagain  `);
                }
                // const result: number = Calculator( num1, num2, currentOperator);
                // console.log(`Your Result is ::: ${num1} ${currentOperator} ${num2} = ${result}`)
            }
            else {
                console.log("Invalid Input! Please enter valid Number.");
                guessANumber();
            }
        }
    });
}
guessANumber();
