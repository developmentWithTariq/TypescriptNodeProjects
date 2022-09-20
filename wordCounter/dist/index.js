import * as inquirer from "inquirer";
// function isNumber(str: string): boolean {
//     const mayBeNum: number = parseInt(str);
//     const isNum: boolean =!isNaN(mayBeNum);
//     return isNum;
// }
function getPara() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "para", message: "Write text:" })
        .then(answers => {
        if (answers["para"] !== "") {
            // if(isNumber(answers["amount"])){
            // console.log("answer",answers["para"])
            let counter = WordCounter(answers["para"]);
            console.log(`There are ${counter[0]} words and ${counter[1]} characters in your paragraph.`);
            // }
        }
    });
}
function WordCounter(str) {
    let numOfWords = str.split(" ").length;
    let words = str.split(" ");
    let char = 0;
    words.map((word) => {
        char += Number(word.split("").length);
    });
    return [numOfWords, char];
}
getPara();
