import * as inquirer from "inquirer";

let amountToConvert: number;

function isNumber(str: string): boolean {
    const mayBeNum: number = parseInt(str);
    const isNum: boolean =!isNaN(mayBeNum);
    return isNum;
}


function  getAmount(): void{   
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "amount", message: "Enter Amount:"})
        .then(answers => {if (answers["amount"] !== "") {
            if(isNumber(answers["amount"])){
                console.log("answer",answers["amount"])
                amountToConvert = answers["amount"]
                desireCurrency();
            }
        }
    })    
}


enum Currencies {
    PKRUPEE = "PKR",
    DOLLAR = "USD",
    INRUPEE = "INR",
    // POUND = "Amount in Pound",
    // RIAL = "Amount in Rial",
}

let fromCurrency: string;

type Rates = {
    PKR: number,
    INR : number;
    USD: number,
    // POUND: number,
    // RIAL: number,

}
let currenciesRates = new Map<string, Rates>();

currenciesRates.set("PKR", { PKR: 1,INR : 0.27027027,USD: 0.004166667}) //,POUND: 0.004,RIAL: 0.016949153})
currenciesRates.set("INR", { PKR: 3.7,INR : 1,USD: 0.008333333}) //,POUND: 130,RIAL: 0.025641026})
currenciesRates.set("USD", { PKR: 240,INR : 120,USD: 1}) //,POUND: 1.03,RIAL: 3.5})
// currenciesRates.set("POUND", { PKR: 0.27027027,INR : 1,USD: 260}) //,POUND: 270,RIAL: 69})


function getRate(from: string, to: string, amount: number): number {
    let rates: Rates = currenciesRates.get(from);
    let currencyRate: number;
    currencyRate = rates[to];
    return currencyRate*amount;
}


function yourCurrency(): void {
    console.clear();
    const prompt = inquirer.createPromptModule();
    prompt({
        type: "list",
        name: "currencies",
        message: "Choose currency",
        choices: Object.values(Currencies)})
    .then(answers => {
        // console.log(answers)
        fromCurrency = answers["currencies"]
        // console.log(fromCurrency)
        getAmount();
        })
}


let toCurrency: string;
let result: number;

function desireCurrency(): void {
    console.clear();
    const prompt = inquirer.createPromptModule();
    prompt({
        type: "list",
        name: "currencies",
        message: "Choose currency for monetary value ",
        choices: Object.values(Currencies)})
    .then(answers => {
        switch (answers["currencies"]) {
            
            case Currencies.PKRUPEE:
                toCurrency = answers["currencies"];
                result = getRate(fromCurrency, toCurrency, amountToConvert);
            case Currencies.INRUPEE:
                toCurrency = answers["currencies"];
                result = getRate(fromCurrency, toCurrency, amountToConvert);
            case Currencies.DOLLAR:
                toCurrency = answers["currencies"];
                result = getRate(fromCurrency, toCurrency, amountToConvert);
                }
        console.log(`${amountToConvert} ${fromCurrency} is equal to ${result}${toCurrency} `);
        })
}

yourCurrency();





