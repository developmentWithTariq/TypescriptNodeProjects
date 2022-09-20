import * as inquirer from "inquirer";

function getPara(): void{   
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "para", message: "Write text:"})
        .then(answers => {if (answers["para"] !== "") {
            // if(isNumber(answers["amount"])){
            // console.log("answer",answers["para"])
            let counter: number[] = WordCounter(answers["para"])
            console.log(`There are ${counter[0]} words and ${counter[1]} characters in your paragraph.` )
            // }
        }
    })    
}
function WordCounter (str: string): number[] {
	let numOfWords:number = str.split(" ").length;
    let words:string[] = str.split(" ");
    let char:number = 0 ;
    words.map((word:string )=>{
        char+= Number(word.split("").length);
    })
	return [numOfWords, char];
}

getPara();
