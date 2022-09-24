export class ATM {
    main(userID, pin, theBank) {
        let curUser;
        let authUser = theBank.userLogin(userID, pin);
        if (authUser === undefined) {
            return curUser;
        }
        else {
            curUser = authUser;
            return curUser;
        }
    }
    mainMenuPrompt(userID, pin, theBank) {
        let authUser = theBank.userLogin(userID, pin);
        if (authUser == null) {
            console.log("Incorrect user ID/pin combination. Please try again.");
            return;
        }
        return authUser;
    }
    showTransHistory(theAcct, theUser) {
        theUser.printAcctTransHistory(theAcct);
    }
    transferFunds(theUser, fromAcct, toAcct, amount) {
        theUser.addAcctTransaction(fromAcct, -1 * amount, `Transfer from account ${theUser.getAcctUUID(toAcct)}`);
        theUser.addAcctTransaction(toAcct, amount, `Transfer to account ${theUser.getAcctUUID(fromAcct)}`);
    }
    withdrawFunds(theUser, fromAcct, amount, memo) {
        console.log(typeof (fromAcct), typeof (amount), typeof (memo));
        theUser.addAcctTransaction(fromAcct, -1 * amount, memo);
    }
    depositFunds(theUser, toAcct, amount, memo) {
        theUser.addAcctTransaction(toAcct, amount, memo);
    }
}
// import { Account } from "./Account.js";
// import { Bank } from "./Bank.js";
// import { User } from "./customer.js";
// import * as inquirer from "inquirer"
// export class ATM  {
//     main() : void{
//         const prompt:inquirer.PromptModule = inquirer.createPromptModule()
//         let  theBank:Bank = new Bank("Bank Of Pakistan");
//         let aUser: User = theBank.addUser("Tariq","Nawaz","1122");
//         let newAccount: Account = new Account("Checking", aUser,theBank);
//         aUser.addAccount(newAccount);
//         theBank.addAccount(newAccount);
//         let curUser: User;
//         while(true){
//             curUser = this.mainMenuPrompt(theBank, prompt);
//             this.printUserMenu(curUser, prompt);
//         }
//     }
//     mainMenuPrompt(theBank: Bank, propmt: inquirer.PromptModule): User{
//         let userID: string;
//         let authUser: User; 
//         let pin: string;
//         do{
//             console.log(`\n\nWelcome to ${theBank.getName()}`);
//             inquirer.createPromptModule()({
//                 type: "input",
//                 name: "ID",
//                 message: "Enter user ID:"
//             }).then(answer=> {
//                 userID = answer["ID"];
//                 // propmt({
//                 //     type: "input",
//                 //     name: "pin",
//                 //     message:"Enter pin: "
//                 // }).then(answer=>{
//                 //     pin = answer["pin"];
//                 //     authUser = theBank.userLogin(userID,pin);
//                 //     if(authUser == null){
//                 //         console.log("Incorrect user ID/pin combination. Please try again.");
//                 //     }
//                 // })
//             })
//         }while(authUser === null);
//         return authUser;
//     }
//     printUserMenu(theUser: User, prompt: inquirer.PromptModule){
//         let answer: string;
//         theUser.printAccountsSummary();
//         do{
//             prompt({
//                 type: "list",
//                 name: "menu",
//                 message: `Welcome ${theUser.getFirstName()}, what would you like to do?`,
//                 choices: ["Show account transaction history",
//                             "withdraw",
//                             "Deposit",
//                             "Transfer",
//                             "Quit"]
//             }).then(answer=> {
//                 answer = answer["menu"]
//                 switch (answer["menu"]) {
//                     case "Show account transaction history":
//                         this.showTransHistory(theUser, prompt)
//                         break;
//                     case "withdraw":
//                         this.withdrawFunds(theUser, prompt);
//                         break;
//                     case "Deposit":
//                         this.depositFunds(theUser, prompt);
//                         break;
//                     case "Transfer":
//                         this.transferFunds(theUser, prompt);
//                     case "Quit":
//                         break;       
//                 }
//             })
//         }while(answer === "Quit")
//     }
//     showTransHistory(theUser: User, prompt: inquirer.PromptModule){
//         let theAcct: number;
//         do{
//             prompt({
//                 type: "input",
//                 name: "accountNum",
//                 message: `Enter the number(1-${theUser.numAccounts()}`
//             }).then( answer => {
//                 theAcct = answer["accountNum"]-1;
//                 if(theAcct < 0 || theAcct >= theUser.numAccounts()){
//                     console.log("Invalid account. Please try again.")
//                 }
//             })
//         }while(theAcct < 0 || theAcct >= theUser.numAccounts());
//         theUser.printAcctTransHistory(theAcct);
//     }
//     transferFunds(theUser: User, prompt: inquirer.PromptModule){
//         let fromAcct: number;
//         let toAcct: number;
//         let amount: number;
//         let acctBal: number;
//         do{
//             prompt({
//                 type: "input",
//                 name: "accountNum",
//                 message: `Enter the number (1-$l{}) of the account\n to transferfrom`
//             }).then(answer => {
//                 fromAcct = answer["accountNum"] -1;
//                 if(fromAcct < 0 || fromAcct >= theUser.numAccounts()){
//                     console.log("Invalid account. Please try again.");
//                 }
//             })
//         }while(fromAcct < 0 || fromAcct >= theUser.numAccounts());
//         acctBal = theUser.getAcctBalance(fromAcct)
//         do{
//             prompt({
//                 type: "input",
//                 name: "accountNum",
//                 message: `Enter the number (1-$8{}) of the account\n to transfer to`
//             }).then(answer => {
//                 toAcct = answer["accountNum"] -1;
//                 if(toAcct < 0 || toAcct >= theUser.numAccounts()){
//                     console.log("Invalid account. Please try again.");
//                 }
//             })
//         }while(toAcct < 0 || toAcct >= theUser.numAccounts());
//         do{
//             prompt({
//                 type: "input",
//                 name: "amount",
//                 message: `Enter the amount to transfer (max $${acctBal})`
//             }).then(answer => {
//                 amount = answer["amuont"];
//                 if(amount < 0 ){
//                     console.log(`Amount must be greater than zero`);
//                 }else{
//                      console.log(`Amount must not be greater than \nbalance of ${acctBal}`);
//                 }
//             })
//         }while(amount < 0 || amount > acctBal);
//         theUser.addAcctTransaction(fromAcct, -1*amount, `Transfer to account ${theUser.getAcctUUID(toAcct)}`);
//         theUser.addAcctTransaction(fromAcct, amount, `Transfer to account ${theUser.getAcctUUID(fromAcct)}`);
//     }
//     withdrawFunds(theUser: User, prompt: inquirer.PromptModule){
//         let fromAcct: number;
//         let amount: number;
//         let acctBal: number;
//         let memo: string;
//         do{
//             prompt({
//                 type: "input",
//                 name: "accountNum",
//                 message: `Enter the number (1-$l{}) of the account\n to transferfrom`
//             }).then(answer => {
//                 fromAcct = answer["accountNum"] -1;
//                 if(fromAcct < 0 || fromAcct >= theUser.numAccounts()){
//                     console.log("Invalid account. Please try again.");
//                 }
//             })
//         }while(fromAcct < 0 || fromAcct >= theUser.numAccounts());
//         acctBal = theUser.getAcctBalance(fromAcct)
//         do{
//             prompt({
//                 type: "input",
//                 name: "amount",
//                 message: `Enter the amount to transfer (max $${acctBal})`
//             }).then(answer => {
//                 amount = answer["amuont"];
//                 if(amount < 0 ){
//                     console.log(`Amount must be greater than zero`);
//                 }else{
//                      console.log(`Amount must not be greater than \nbalance of ${acctBal}`);
//                 }
//             })
//         }while(amount < 0 || amount > acctBal);
//         prompt({
//             type: "input",
//             name: "memo",
//             message: `Enter a memo : `
//         }).then(answer => {
//                 memo = answer["memo"];
//                 theUser.addAcctTransaction(fromAcct, -1*amount ,memo)
//         });
//     }
//     depositFunds(theUser: User, prompt: inquirer.PromptModule){
//         let toAcct: number;
//         let amount: number;
//         let acctBal: number;
//         let memo: string;
//         do{
//             prompt({
//                 type: "input",
//                 name: "accountNum",
//                 message: `Enter the number (1-$l{}) of the account\n to transferfrom`
//             }).then(answer => {
//                 toAcct = answer["accountNum"] -1;
//                 if(toAcct < 0 || toAcct >= theUser.numAccounts()){
//                     console.log("Invalid account. Please try again.");
//                 }
//             })
//         }while(toAcct < 0 || toAcct >= theUser.numAccounts());
//         acctBal = theUser.getAcctBalance(toAcct)
//         do{
//             prompt({
//                 type: "input",
//                 name: "amount",
//                 message: `Enter the amount to transfer (max $${acctBal})`
//             }).then(answer => {
//                 amount = answer["amuont"];
//                 if(amount < 0 ){
//                     console.log(`Amount must be greater than zero`);
//                 }else{
//                      console.log(`Amount must not be greater than \nbalance of ${acctBal}`);
//                 }
//             })
//         }while(amount < 0 || amount > acctBal);
//         prompt({
//             type: "input",
//             name: "memo",
//             message: `Enter a memo : `
//         }).then(answer => {
//                 memo = answer["memo"];
//                 theUser.addAcctTransaction(toAcct, amount ,memo)
//         });
//     }
// }
