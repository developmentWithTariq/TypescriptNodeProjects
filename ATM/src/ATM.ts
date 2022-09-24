
import { Bank } from "./Bank.js";
import { User } from "./customer.js";
export class ATM  {
    main(userID: string, pin: string, theBank: Bank) : User{
        let curUser: User;
        let authUser: User = theBank.userLogin(userID,pin);

        if(authUser === undefined){
            
            return curUser;
        
        }else{
            curUser = authUser;
            return curUser;
        }
    }

    mainMenuPrompt(userID: string, pin: string, theBank: Bank): User{
        
        let authUser: User = theBank.userLogin(userID,pin);

        if(authUser == null){
            console.log("Incorrect user ID/pin combination. Please try again.");
            return
        }
        return authUser;
    }

    showTransHistory(theAcct: number, theUser: User){
        theUser.printAcctTransHistory(theAcct);
    }

    transferFunds(theUser: User, fromAcct: number, toAcct: number, amount: number){
        theUser.addAcctTransaction(fromAcct, -1*amount, `Transfer from account ${theUser.getAcctUUID(toAcct)}`);
        theUser.addAcctTransaction(toAcct, amount, `Transfer to account ${theUser.getAcctUUID(fromAcct)}`);
    }
    
    withdrawFunds(theUser: User, fromAcct: number, amount: number, memo: string){
        console.log(typeof(fromAcct),typeof(amount), typeof(memo));
        
        theUser.addAcctTransaction(fromAcct, -1*amount ,memo)
       
    }
    depositFunds(theUser: User, toAcct: number, amount: number, memo: string){
       
        theUser.addAcctTransaction(toAcct, amount ,memo)
    }
}