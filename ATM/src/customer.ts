import { Bank } from "./Bank.js";
import { Account } from "./Account.js";
export class User {
 
    private firstName: string;
    private lastName: string;
    private uuid: string;
    private pinHash: string;
    private accounts: Array<Account>;

   

    constructor(firstName: string, lastName: string, pin: string, private theBank: Bank){
        this.firstName = firstName;
        this.lastName = lastName;   
        // const utf8Encode = new TextEncoder();
        // const byteArr = utf8Encode.encode(pin);                 
        this.pinHash = pin;
        this.uuid = this.theBank.getNewUserUUID();

        this.accounts = new Array<Account>();

        console.log(`FirstName ${this.firstName} lastName ${this.lastName} ID : ${this.uuid}`)
    }
    addAccount(anAcc: Account){
        this.accounts.push(anAcc)
    }

    getFirstName(): string{
        return this.firstName;
    }

    getUUID(): string {
        return this.uuid;
    }
    getAcctBalance(acctIdx: number){
        return this.accounts[acctIdx].getBalance();
    }

    validatePin(aPin: string): boolean {
        // const utf8Encode = new TextEncoder();
        // const byteArr: Uint8Array = utf8Encode.encode(aPin); 
        if(aPin === this.pinHash){
            return true;
        }
        else{
            false;
        }
    }

    printAccountsSummary(){
        console.log(`\n\n${this.firstName}'s accounts summary`);
        for(let a: number = 0; a < this.accounts.length; a++){
            console.log(`${a+1}${this.accounts[a].getSummaryLine()}`)

        }
        console.log("")
    }
    numAccounts(): number{
        return this.accounts.length;
    }
    printAcctTransHistory(acctIdx: number){
        this.accounts[acctIdx].printTransHistory();

    }
    getAcctUUID(acctIdx : number): string{
        return this.accounts[acctIdx].getUUID();
    }
    addAcctTransaction(acctIdx: number, amount: number, memo: string){
        this.accounts[acctIdx].addTransaction(amount, memo);
    }
}