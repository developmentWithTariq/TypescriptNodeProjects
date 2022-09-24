
import * as inquirer from "inquirer";

type MCQ = {
    array: string[],
    question: string,
    answer: string
  }

let mcqList: MCQ[] =  [
  {
    array : ['Mumbai', 'USA', 'Austria', 'Pakistan'],
    question : 'Second largest mountain of the world is place at? ',
    answer : 'Pakistan'
  },
  {
    array : ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
    question : 'The Indian Institute of Science is located at ',
    answer : 'Bangalore'
  },
  {
    array : ['Pakistan', 'Afganistan', 'India', 'Srilanka'],
    question : 'who won the last asia cup final: ',
    answer : 'Srilanka'
  },
  {
    array : ['New Delhi', 'Hyderabad', 'Amritsar', 'Mumbai'],
    question : 'The Centre for Cellular and Molecular Biology in India is situated at: ',
    answer : 'Hyderabad'
  },
  {
    array : ['Delhi', 'Dehradun', 'Lucknow', 'Gandhinagar'],
    question : 'National Institute of Aeronautical Engineering is located at ',
    answer : 'Delhi'
  },
  {
    array : ['T.N.Kaul', 'J.R.D. Tata', 'Nani Palkhivala', 'Khushwant Singh'],
    question : 'Who wrote the famous book - "We the people"? ',
    answer : 'Nani Palkhivala'
  },
];


let score:number = 0;

let userAnswer: string;
let i: number =1;
function quiz(question: string, options: string[], actualAnswer: string): void{

  const prompt = inquirer.createPromptModule();
  
    prompt({
      type: "list",
      name: "userAnswer",
      message: `${question}`,
      choices: options,})
      .then(answer =>{
          console.clear();
          console.log("\n");
          userAnswer = answer["userAnswer"]
          if( userAnswer.toLowerCase() === actualAnswer.toLowerCase() ){
            score = score+1;
          }
          if(i < mcqList.length){
            quiz(mcqList[i].question,mcqList[i].array,mcqList[i].answer);
            i++;
          }else{
            console.log("your score is",score," out of ",mcqList.length)
          }
      })
  
  
}

function namePrompt (){

  const prompt = inquirer.createPromptModule();
  
  prompt({
    type: "input",
    name: "name",
    message: "Enter your name :"
  })
  .then(answer => {
    console.log("-------------------------------------------")
    console.log(`\tWellcome to Quiz ${answer["name"]}`)
    console.log("------------------------------------------")

    quiz(mcqList[0].question,mcqList[0].array,mcqList[0].answer);

    })
}
namePrompt();



