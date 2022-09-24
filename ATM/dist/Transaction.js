export class Transaction {
    constructor(amount, memo, inAccount) {
        this.amount = amount;
        this.inAccount = inAccount;
        this.timestamp = new Date();
        this.memo = memo;
    }
    getAmount() {
        return this.amount;
    }
    getSummaryLine() {
        if (this.amount >= 0) {
            return `${this.timestamp.toString()} : ${this.amount} : ${this.memo}`;
        }
        else {
            return `${this.timestamp.toString()} : (${this.amount}) : ${this.memo}`;
        }
    }
}
