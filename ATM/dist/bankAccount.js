export class BankAccount {
    constructor() {
        this.AccountBalance = 100;
    }
    get AccountBalance() {
        return this._accountBalance;
    }
    set AccountBalance(val) {
        this._accountBalance = val;
    }
    Debit(amount) {
        let statment = "";
        if (amount > 0) {
            if (this.AccountBalance > amount) {
                this.AccountBalance = this.AccountBalance - amount;
                statment = "Transaction successfull New account blance is " + this.AccountBalance;
            }
            else {
                statment = "Sorry you have insufficient balance!";
            }
        }
        else {
            statment = "The amount you enter is wrong.";
        }
        return statment;
    }
    Credit(amount) {
        let statment = "Transaction failed!";
        if (amount > 0) {
            this.AccountBalance = this.AccountBalance + amount;
            if (amount > 100) {
                this.AccountBalance = this.AccountBalance - 1;
            }
            statment = "Your account has been credited successfully!";
        }
        return statment;
    }
}
