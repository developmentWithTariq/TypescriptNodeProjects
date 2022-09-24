import { Account } from "./Account.js";
import { User } from "./customer.js";

export class Bank {

    private name: string;

    public users: Array<User>;

    private accounts: Array<Account>;
    constructor(name: string){
        
        this.name = name;
        this.users = new Array<User>();
        this.accounts = new Array<Account>();
    }

    getName(): string {
        return this.name;
    }

    getNewUserUUID(): string {
        let uuid: string;
        // let rng =  Math.random()
        let len : number = 6;
        let nonUnique: Boolean;
        do{

            uuid = "";
            for (let c: number =0; c < len; c++){
                uuid +=  Math.floor(Math.random()*10).toString();
            }

            nonUnique = false;
            this.users.forEach((user) => {
                if(uuid === user.getUUID()){
                    nonUnique = true;
                }
            })

        }while(nonUnique);

        return uuid;

    }
    getNewAccountUUID() : string{
        let uuid: string;
        // let rng =  Math.random()
        let len : number = 10;
        let nonUnique: Boolean;
        do{

            uuid = "";
            for (let c: number = 0; c < len; c++){
                uuid +=  Math.floor(Math.random()*10).toString();
            }

            nonUnique = false;
            this.accounts.forEach((account) => {
                if(uuid === account.getUUID()){
                    nonUnique = true;
                }
            })

        }while(nonUnique);
        return uuid;
    }
    addAccount(anAcc: Account){
        this.accounts.push(anAcc)
    }

    addUser(firstName: string, lastName: string, pin: string): User{
        let newUser: User = new User(firstName,lastName,pin,this);
        this.users.push(newUser);

        let newAccount: Account = new Account("Savings",newUser,this);
        newUser.addAccount(newAccount);
        this.addAccount(newAccount);
        return newUser;
    }

    userLogin(userID: string, pin: string): User | undefined{
        let curUser: User;
        this.users.forEach(user => {
            if(user.getUUID() === userID && user.validatePin(pin)){
                curUser = user;
            }
        })
        return curUser;
    }
}
