export class User {
    constructor(firstName, lastName, pin, theBank) {
        this.theBank = theBank;
        this.firstName = firstName;
        this.lastName = lastName;
        // const utf8Encode = new TextEncoder();
        // const byteArr = utf8Encode.encode(pin);                 
        this.pinHash = pin;
        this.uuid = this.theBank.getNewUserUUID();
        this.accounts = new Array();
        console.log(`FirstName ${this.firstName} lastName ${this.lastName} ID : ${this.uuid}`);
    }
    addAccount(anAcc) {
        this.accounts.push(anAcc);
    }
    getFirstName() {
        return this.firstName;
    }
    getUUID() {
        return this.uuid;
    }
    getAcctBalance(acctIdx) {
        return this.accounts[acctIdx].getBalance();
    }
    validatePin(aPin) {
        // const utf8Encode = new TextEncoder();
        // const byteArr: Uint8Array = utf8Encode.encode(aPin); 
        if (aPin === this.pinHash) {
            return true;
        }
        else {
            false;
        }
    }
    printAccountsSummary() {
        console.log(`\n\n${this.firstName}'s accounts summary`);
        for (let a = 0; a < this.accounts.length; a++) {
            console.log(`${a + 1}${this.accounts[a].getSummaryLine()}`);
        }
        console.log("");
    }
    numAccounts() {
        return this.accounts.length;
    }
    printAcctTransHistory(acctIdx) {
        this.accounts[acctIdx].printTransHistory();
    }
    getAcctUUID(acctIdx) {
        return this.accounts[acctIdx].getUUID();
    }
    addAcctTransaction(acctIdx, amount, memo) {
        this.accounts[acctIdx].addTransaction(amount, memo);
    }
}
