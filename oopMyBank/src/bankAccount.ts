import { IBankAccount } from "./IBankAccount.js";
export class BankAccount implements IBankAccount {
    private _accountBalance: number;

    get AccountBalance(){
        return this._accountBalance;
    }
    set AccountBalance(val){
        this._accountBalance =val;
    }
    constructor(){
        this.AccountBalance =100;
     }

    Debit(amount: number): string {
        let statment: string= "";
        if (amount > 0){
            if(this.AccountBalance > amount){
                this.AccountBalance = this.AccountBalance - amount;
                statment = "Transaction successfull New account blance is "+this.AccountBalance
            }
            else{
                statment = "Sorry you have insufficient balance!"
            }
        }else{
            statment= "The amount you enter is wrong."
        }
        return statment;
    }

    Credit(amount: number): string{
        
        let statment: string = "Transaction failed!";
        if (amount > 0){
                this.AccountBalance = this.AccountBalance + amount;

                if(amount >100){

                    this.AccountBalance = this.AccountBalance - 1;
            
                }
                statment = "Your account has been credited successfully!";
            }
        return statment;
    }
}