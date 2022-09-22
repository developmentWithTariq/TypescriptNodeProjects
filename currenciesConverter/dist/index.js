import * as inquirer from "inquirer";
let amountToConvert;
function isNumber(str) {
    const mayBeNum = parseInt(str);
    const isNum = !isNaN(mayBeNum);
    return isNum;
}
function getAmount() {
    const prompt = inquirer.createPromptModule();
    prompt({ type: "input", name: "amount", message: "Enter Amount:" })
        .then(answers => {
        if (answers["amount"] !== "") {
            if (isNumber(answers["amount"])) {
                console.log("answer", answers["amount"]);
                amountToConvert = answers["amount"];
                desireCurrency();
            }
        }
    });
}
var Currencies;
(function (Currencies) {
    Currencies["PKRUPEE"] = "PKR";
    Currencies["DOLLAR"] = "USD";
    Currencies["INRUPEE"] = "INR";
    // POUND = "Amount in Pound",
    // RIAL = "Amount in Rial",
})(Currencies || (Currencies = {}));
let fromCurrency;
let currenciesRates = new Map();
currenciesRates.set("PKR", { PKR: 1, INR: 0.27027027, USD: 0.004166667 }); //,POUND: 0.004,RIAL: 0.016949153})
currenciesRates.set("INR", { PKR: 3.7, INR: 1, USD: 0.008333333 }); //,POUND: 130,RIAL: 0.025641026})
currenciesRates.set("USD", { PKR: 240, INR: 120, USD: 1 }); //,POUND: 1.03,RIAL: 3.5})
// currenciesRates.set("POUND", { PKR: 0.27027027,INR : 1,USD: 260}) //,POUND: 270,RIAL: 69})
function getRate(from, to, amount) {
    let rates = currenciesRates.get(from);
    let currencyRate;
    currencyRate = rates[to];
    return currencyRate * amount;
}
function yourCurrency() {
    console.clear();
    const prompt = inquirer.createPromptModule();
    prompt({
        type: "list",
        name: "currencies",
        message: "Choose currency",
        choices: Object.values(Currencies)
    })
        .then(answers => {
        // console.log(answers)
        fromCurrency = answers["currencies"];
        // console.log(fromCurrency)
        getAmount();
    });
}
let toCurrency;
let result;
function desireCurrency() {
    console.clear();
    const prompt = inquirer.createPromptModule();
    prompt({
        type: "list",
        name: "currencies",
        message: "Choose currency for monetary value ",
        choices: Object.values(Currencies)
    })
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
    });
}
yourCurrency();
