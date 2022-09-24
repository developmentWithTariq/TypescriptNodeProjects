import { Transaction } from "./Transaction.js";
export class Account {
    constructor(name, holder, theBank) {
        this.name = name;
        this.holder = holder;
        this.uuid = theBank.getNewAccountUUID();
        this.transactions = new Array();
    }
    getUUID() {
        return this.uuid;
    }
    getBalance() {
        let balance = 0;
        this.transactions.forEach(trans => {
            balance += trans.getAmount();
        });
        return balance;
    }
    getSummaryLine() {
        let balance = this.getBalance();
        if (balance >= 0) {
            return `${this.uuid} : $${balance} : ${this.name}`;
        }
        else {
            return `${this.uuid} : $(${balance}) : ${this.name}`;
        }
    }
    printTransHistory() {
        console.log(`\nTransaction history for account ${this.uuid}`);
        for (let t = this.transactions.length - 1; t >= 0; t--) {
            console.log(`${this.transactions[t].getSummaryLine()}`);
        }
        console.log("");
    }
    addTransaction(amount, memo) {
        let newTrans = new Transaction(amount, memo, this);
        this.transactions.push(newTrans);
    }
}
