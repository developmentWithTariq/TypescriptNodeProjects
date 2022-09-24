import { Account } from "./Account.js";
import { User } from "./customer.js";
export class Bank {
    constructor(name) {
        this.name = name;
        this.users = new Array();
        this.accounts = new Array();
    }
    getName() {
        return this.name;
    }
    getNewUserUUID() {
        let uuid;
        // let rng =  Math.random()
        let len = 6;
        let nonUnique;
        do {
            uuid = "";
            for (let c = 0; c < len; c++) {
                uuid += Math.floor(Math.random() * 10).toString();
            }
            nonUnique = false;
            this.users.forEach((user) => {
                if (uuid === user.getUUID()) {
                    nonUnique = true;
                }
            });
        } while (nonUnique);
        return uuid;
    }
    getNewAccountUUID() {
        let uuid;
        // let rng =  Math.random()
        let len = 10;
        let nonUnique;
        do {
            uuid = "";
            for (let c = 0; c < len; c++) {
                uuid += Math.floor(Math.random() * 10).toString();
            }
            nonUnique = false;
            this.accounts.forEach((account) => {
                if (uuid === account.getUUID()) {
                    nonUnique = true;
                }
            });
        } while (nonUnique);
        return uuid;
    }
    addAccount(anAcc) {
        this.accounts.push(anAcc);
    }
    addUser(firstName, lastName, pin) {
        let newUser = new User(firstName, lastName, pin, this);
        this.users.push(newUser);
        let newAccount = new Account("Savings", newUser, this);
        newUser.addAccount(newAccount);
        this.addAccount(newAccount);
        return newUser;
    }
    userLogin(userID, pin) {
        let curUser;
        this.users.forEach(user => {
            if (user.getUUID() === userID && user.validatePin(pin)) {
                curUser = user;
            }
        });
        return curUser;
    }
}
