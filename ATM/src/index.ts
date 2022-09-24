
import { ATM } from "./ATM.js";
import * as inquirer from "inquirer";
import { User } from "./customer.js";
import { Account } from "./Account.js";
import { Bank } from "./Bank.js";

const atm = new ATM();
// atm.main()

let  theBank:Bank = new Bank("Bank Of Pakistan");
let aUser: User = theBank.addUser("Tariq","Nawaz","1122");

let newAccount: Account = new Account("Checking", aUser,theBank);
aUser.addAccount(newAccount);
theBank.addAccount(newAccount);
let toAcct: number;
let amount: number;
let memo: string;
let fromAcct: number;
let acctBal: number;



function userPrompt(){
   
    const prompt: inquirer.PromptModule = inquirer.createPromptModule();
    let userID: string;
    let pin: string;
    prompt({
        type: "input",
        name: "ID",
        message: "Enter user ID:",
        validate(answer) {
            if(!answer) {
                return "Please, fill userID!"
            }
            return true
        }
    }).then(answer=> {
        userID = answer["ID"];
        prompt({
            type: "input",
            name: "pin",
            message:"Enter pin: ",
            validate(answer) {
                if(!answer) {
                    return "Please, fill pin!"
                }
                return true
            }
        }).then(answer=>{
            pin = answer["pin"];
            let curUser: User = atm.main(userID, pin,theBank);
            if(curUser){
                printUserMenu(curUser, prompt);
                
            }
            else{
                console.log("Invalid UserID/pin tryagain")
                userPrompt();
            }
            
        })
    })
}

function printUserMenu(theUser: User, prompt: inquirer.PromptModule){
    theUser.printAccountsSummary();
    prompt({
        type: "list",
        name: "menu",
        message: `Welcome ${theUser.getFirstName()}, what would you like to do?`,
        choices: ["Show account transaction history","withdraw","Deposit","Transfer","Quit"]
    }).then(answer=> {
        console.log(answer)
        
        switch (answer["menu"]) {
            case "Show account transaction history":
                transactionPrompt(theUser, prompt);
                break;
            case "withdraw":
                withdrawPrompt(theUser, prompt);
                break;
            case "Deposit":
                depositPrompt(theUser, prompt);
                
                break;
            case "Transfer":
                tranferPrompt(theUser, prompt);
            case "Quit":
                break;       
        }
    })
}

function transactionPrompt(theUser: User, prompt: inquirer.PromptModule): void{
    console.clear();
    let theAcct: number;
    prompt({
        type: "input",
        name: "accountNum",
        message: `Enter the number(1-${theUser.numAccounts()})`,
        validate(answer) {
            let acct: number = parseInt(answer)-1;
            
            if(!answer) {
                return `Enter the number(1-${theUser.numAccounts()})`
            }else if(acct < 0|| acct >= theUser.numAccounts()){
                return`Enter the number (1-${theUser.numAccounts()})`
            }
            return true
        }
    }).then( answer => {
        theAcct = parseInt(answer["accountNum"])-1;
        atm.showTransHistory(theAcct, theUser)
        printUserMenu(theUser, prompt)
        
    })

}
function tranferPrompt(theUser: User, prompt: inquirer.PromptModule): void{
    console.clear();
    prompt({
        type: "input",
        name: "fromAccount",
        message: `Enter the number (1-${theUser.numAccounts()}) of the account\n to transferfrom`,
        validate(answer) {
            let Acct = parseInt(answer)-1
            if(!answer) {
                return `Enter the number (1-${theUser.numAccounts()} of the account to transferfrom`
            }
            else if(Acct < 0 || Acct >= theUser.numAccounts()){
                return `Invalid Account! \n\tEnter the number (1-${theUser.numAccounts()} of the account to transferfrom\n`;

            }
            return true
        }
    }).then(answer => {
        console.clear()
        fromAcct = parseInt(answer["fromAccount"] )-1;
        acctBal = theUser.getAcctBalance(fromAcct)
        
        prompt({
            type: "input",
            name: "toAccount",
            message: `Enter the number (1-${theUser.numAccounts()} of the account to transfer`,
            validate(answer) {
                let Acct = parseInt(answer)-1
                if(!answer) {
                    return `Enter the number (1-${theUser.numAccounts()} of the account to transfer`
                }
                else if(Acct < 0 || Acct >= theUser.numAccounts()){
                    return `Invalid Account! \n\tEnter the number (1-${theUser.numAccounts()} of the account to transfer\n`;

                }
                return true
            }
        }).then(answer => {
            console.clear()
            toAcct = parseInt(answer["toAccount"] )-1;
            prompt({
                type: "input",
                name: "amount",
                message: `Enter the amount to transfer (max $${acctBal}) : `,
                validate(answer) {
                    if(!answer) {
                        return `Please, Enter the amount to transfer (max $${acctBal}) : `
                    }
                    else if( parseInt(answer) < 0 ){
                        return `Please, Enter amount greater than zero!`
                    }
                    else if(parseInt(answer) > acctBal){
                        return `Enter the amount to transfer(max $${acctBal}) :`
                        
                    }
                    return true
                }
            }).then(answer => {
                console.clear()
                amount = parseInt(answer["amount"]);
                    console.clear()
                    atm.transferFunds(theUser, fromAcct,toAcct ,amount )
                    printUserMenu(theUser, prompt);
                    
                
            })
            
        })
        
    })
}

function depositPrompt(theUser: User, prompt: inquirer.PromptModule): void {
    console.clear()
    prompt({
        type: "input",
        name: "accountNum",
        message: `Enter the account number (1-${theUser.numAccounts()})\n`,
        validate(answer) {
        
            let Acct = parseInt(answer)-1
            if(!answer) {
                return `Enter the number (1-${theUser.numAccounts()}) of the account to transfer`
            }
            else if(Acct < 0 || Acct >= theUser.numAccounts()){
                return `Invalid Account! \n\tEnter the number (1-${theUser.numAccounts()}) of the account to transfer\n`;

            }
            return true
        }
    }).then(answer => {
        toAcct = parseInt(answer["accountNum"] )-1;
        
            prompt({
                type: "input",
                name: "amount",
                message: `Enter the amount to deposit : `,
                validate(answer) {
                    if(!answer) {
                        return "Please, enter amount to deposit!"
                    }else if(parseInt(answer) < 0){
                        return "Please enter amount greater than zero!"
                    }
                    return true
                }
            }).then(answer => {
                amount = parseInt(answer["amount"]);
                
                    prompt({
                        type: "input",
                        name: "memo",
                        message: `Enter a memo : `,
                        validate(answer) {
                            if(!answer) {
                                return "Please, enter memo!"
                            }
                            return true
                        }
                    }).then(answer => {
                            memo = answer["memo"];
                            atm.depositFunds(theUser, toAcct, amount,memo )
                            printUserMenu(theUser, prompt);
                    });
                
            });
        
    });
}


function withdrawPrompt(theUser: User, prompt: inquirer.PromptModule): void{
    console.clear();
    prompt({
        type: "input",
        name: "accountNum",
        message: `Enter the number (1-${theUser.numAccounts()}) of the account\n to transferfrom`,
        validate(answer) {
    
            let Acct = parseInt(answer)-1;
            if(!answer) {
                return `Enter the number (1-${theUser.numAccounts()}) of the account to transfer`
            }
            else if(Acct < 0 || Acct >= theUser.numAccounts()){
                return `Invalid Account! \n\tEnter the number (1-${theUser.numAccounts()}) of the account to transfer\n`;

            }
            return true
        }
    }).then(answer => {
        fromAcct = parseInt(answer["accountNum"] )-1;
        
        acctBal = theUser.getAcctBalance(fromAcct)
        prompt({
            type: "input",
            name: "amount",
            message: `Enter the amount to withdraw : (max $${acctBal})`,
            validate(answer) {
                if(!answer) {
                    return `Please, Enter the amount to withdraw (max $${acctBal}) : `
                }
                else if( parseInt(answer) < 0 ){
                    return `Please, Enter amount greater than zero!`
                }
                else if(parseInt(answer) > acctBal){
                    return `Enter the amount to withdraw (max $${acctBal}) :`
                    
                }
                return true
            }
        }).then(answer => {
            amount = parseInt(answer["amount"]);
            prompt({
                type: "input",
                name: "memo",
                message: `Enter a memo : `,
                validate(answer) {
                    if(!answer) {
                        return `Please, Enter memo : `
                    }
                    return true
                }
            }).then(answer => {
                    memo = answer["memo"];
                    atm.withdrawFunds(theUser, fromAcct, amount,memo )
                    printUserMenu(theUser, prompt);
            });
        });
    });
}

userPrompt();