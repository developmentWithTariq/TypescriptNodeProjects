import { Person } from "./person.js";
import * as inquirer from "inquirer";
import { Student } from "./student.js";
function isNumber(str) {
    const mayBeNum = parseInt(str);
    const isNum = !isNaN(mayBeNum);
    return isNum;
}
let studentName;
function inputPersonality() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "num", message: "Type 1 if you like to talk to others and type2 if you would rather kepp to yourself:" })
        .then(answer => {
        if (answer["num"] !== "") {
            const isNum = isNumber(answer["num"]);
            if (isNum) {
                const Myperson = new Person();
                Myperson.askQuestion(answer["num"]);
                console.log("You are :" + Myperson.getPersonality());
                inputName();
            }
            else {
                console.log("Please enter an integer value");
            }
        }
    });
}
function inputName() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "name", message: "What is your name:" })
        .then(answer => {
        if (answer["name"] !== "") {
            studentName = answer["name"];
            const student1 = new Student();
            student1.Name = studentName;
            console.log(`Your Name is: ${student1.Name} and your personality is ${student1.getPersonality()}`);
        }
        else {
            console.log("Please enter an integer value");
        }
    });
}
inputPersonality();
