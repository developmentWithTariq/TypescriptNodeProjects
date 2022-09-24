import { Account } from "./Account.js";

export class Transaction  {

    private amount: number;

    private timestamp: Date;

    private memo: string;

    private inAccount : Account;
    constructor(amount: number, memo: string, inAccount: Account){
        this.amount = amount;
        this.inAccount = inAccount;
        this.timestamp = new Date();
        this.memo = memo;
    }
    getAmount(): number{
        return this.amount;
    }
    getSummaryLine(){
        if(this.amount >= 0){
            return `${this.timestamp.toString()} : ${this.amount} : ${this.memo}`;
        }else{
            return `${this.timestamp.toString()} : (${this.amount}) : ${this.memo}`;
        }

    }
       
}