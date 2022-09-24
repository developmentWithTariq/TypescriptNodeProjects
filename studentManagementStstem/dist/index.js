import * as inquirer from "inquirer";
import { StudentsManagmentSystem } from "./system.js";
const min = 10000;
const max = 99999;
function generateId() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const system = new StudentsManagmentSystem();
let prompt = inquirer.createPromptModule();
function corsePayment(course) {
    prompt({
        type: "list",
        name: "selectCourse",
        message: `Press Enter to Pay the fee of:`,
        choices: [course]
    }).then(answer => {
        let stdInfo = system.getStudents();
        let result = system.payFee(stdInfo[0].id, [answer["selectCourse"]]);
        if (result) {
            console.log(`\n\tPayment of ${answer["selectCourse"]} course has been recieved Successfully`);
            console.log(`\t#########  Happy learning ${stdInfo[0].name}  ##########`);
            menu();
        }
        else {
            console.log(`\n\t> Your are not enroll in ${answer["selectCourse"]} course.`);
            console.log("\t> Please enroll first.\n");
            menu();
        }
    });
}
function enroll() {
    prompt({
        type: "list",
        name: "selectCourse",
        message: "Select course.",
        choices: ["AI", "IOT", "CNC"]
    }).then(answer => {
        let stdInfo = system.getStudents();
        let result = system.enroll(stdInfo[0].id, answer["selectCourse"]);
        if (result) {
            console.log(`\n\tYou have been successfully enrolled in ${answer["selectCourse"]} course.`);
            console.log(`\n\t-----Please pay your fee of ${answer["selectCourse"]} Course-----\n`);
        }
        else {
            console.log(`\n\tYou are already enrolled in ${answer["selectCourse"]} course.`);
        }
        menu();
    });
}
function coursePrompt() {
    prompt({
        type: "list",
        name: "course",
        message: "Select course for payment:",
        choices: ["AI", "IOT", "CNC"]
    }).then(answer => {
        corsePayment(answer["course"]);
    });
}
function menu() {
    const prompt = inquirer.createPromptModule();
    prompt({
        type: "list",
        name: "selectAction",
        message: "What you want to do?:",
        choices: ["ENROLL", "PAY FEE", "VIEW BALANCE", "SHOW STATUS", "OPEN PORTAL", "LOG OUT"]
    }).then(answer => {
        // console.log(action)
        let student = system.getStudents();
        switch (answer["selectAction"]) {
            case "ENROLL":
                enroll();
                break;
            case "PAY FEE":
                coursePrompt();
                break;
            case "VIEW BALANCE":
                console.log(`\n\t> Your Balance is ${system.viewBalance(student[0].id)}$\n`);
                menu();
                break;
            case "SHOW STATUS":
                console.log(`\n\t-----------STATUS------------\n`);
                console.log(`
                    > AI is enrolled ${system.checkStatus(student[0].id).enrolledCourses.AI ? "YES" : "NO"} 
                    > CNC is enrolled ${system.checkStatus(student[0].id).enrolledCourses.CNC ? "YES" : "NO"}
                    > IOT is enrolled ${system.checkStatus(student[0].id).enrolledCourses.IOT ? "YES" : "NO"}
                    > StudentName : ${system.checkStatus(student[0].id).studentName} \n\
                    > Student Id : ${system.checkStatus(student[0].id).id} \n\
                    > Student Balance : ${system.checkStatus(student[0].id).studentBalance}`);
                menu();
                break;
            case "OPEN PORTAL":
                console.log("------------------------------------------------------------------------------");
                console.log(`\t\t\tWellcome to Portal`);
                console.log("------------------------------------------------------------------------------");
                portal();
                break;
            case "LOG OUT":
                break;
        }
    });
}
function portal() {
    prompt({
        type: "list",
        name: "selectCourse",
        message: "Select course.",
        choices: ["AI", "IOT", "CNC"]
    })
        .then(answer => {
        let student = system.getStudents();
        if (system.isEnrolled(student[0].id, answer["selectCourse"])) {
            let status = system.checkStatus(student[0].id);
            if (status.studentBalance === 0) {
                console.log("------------------------------------------------------------------------------");
                console.log(`\t\t WellCome to the course of ${answer["selectCourse"]}`);
                console.log("------------------------------------------------------------------------------");
                menu();
            }
            else {
                console.log(`\t> Please pay your fee to start learning.`);
                corsePayment(answer["selectCourse"]);
            }
        }
        else {
            console.log(`\t> Please Enroll to access ${answer["selectCourse"]} Course.`);
            menu();
        }
    });
}
function start() {
    prompt({
        type: "input",
        name: "name",
        message: "Enter Your Name:",
    }).then(answer => {
        if (answer["name"] != "") {
            system.addStudent(generateId(), answer["name"]);
            let std = system.getStudents();
            console.log(`\n\t-----------------------------------------------`);
            console.log(`\t###### Congrats ${std[0].name} your ID is ${std[0].id} ######`);
            console.log(`\t-----------------------------------------------\n`);
            menu();
        }
    });
}
start();
