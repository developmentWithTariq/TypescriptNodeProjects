import { Bank } from "./Bank.js";
import { User } from "./customer.js";
import { Transaction } from "./Transaction.js";

export class Account  {
    private name: string;
    private uuid: string;
    private holder:User;
    private transactions : Array<Transaction>; 

    constructor(name: string, holder: User, theBank: Bank){
        this.name = name;
        this.holder = holder;

        this.uuid = theBank.getNewAccountUUID();
        
        this.transactions =  new Array<Transaction>();

    }
    getUUID(): string {
        return this.uuid;
    }
    getBalance(): number{
        let balance: number = 0;
        this.transactions.forEach(trans=> {
            balance += trans.getAmount(); 
        })
        return balance;
    }

    getSummaryLine(): string{
        let balance = this.getBalance();

        if(balance >= 0){
            return `${this.uuid} : $${balance} : ${this.name}`;
        }else {
            return `${this.uuid} : $(${balance}) : ${this.name}`;
        }

    }

    printTransHistory(): void{
        console.log(`\nTransaction history for account ${this.uuid}`);
        for(let t: number= this.transactions.length-1; t >= 0; t--){
            console.log(`${this.transactions[t].getSummaryLine()}`);
        }
        console.log("")
    }
    addTransaction(amount: number, memo: string){
        let newTrans: Transaction = new Transaction(amount, memo, this)
        this.transactions.push(newTrans);
    }
















}


    
