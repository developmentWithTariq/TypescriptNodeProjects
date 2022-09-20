
import { BankAccount } from "./bankAccount.js";
import {Customer} from "./customer.js";
// import inquirer from "inquirer";


const c1:Customer = new Customer();
c1.FirstName = "Tariq";
c1.LastName = "Nawaz";
c1.Age = 21;
c1.Gender = "Male";
const accountOfC1 = new BankAccount();
c1.BankAccount = accountOfC1;
console.log(c1.customerInfo());