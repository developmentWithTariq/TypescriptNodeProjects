// Set the date we're counting down to
let countDownDate = new Date("Sep 15, 2022 23:07:20").getTime();
// Update the count down every 1 second
const CountDownTimer = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const displayCountDown = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    console.log(displayCountDown);
    if (distance <= 0) {
        clearInterval(CountDownTimer);
    }
}, 1000);
CountDownTimer;
export {};
// </script> 
// let todos: TodoItem[] = [
//     new TodoItem(1, "typescriptP1"), new Students(num, "typescriptP3"),
//     new TodoItem(3, "typescriptP2"), new Students(num, "typeScriptP4", true)];
// let collection: ItemCollection = new ItemCollection("Adam", todos);
// let showCompleted = true;
// console.clear();
// console.log(`${collection.userName}'s Todo List`);
// console.log(`${collection.userName}'s Todo List `
//     + `(${ collection.getItemCounts().incomplete } items to do)`);
// collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
// function displayTodoList(): void {
//         console.log(`${collection.userName}'s Todo List `
//             + `(${ collection.getItemCounts().incomplete } items to do)`);
//         collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
//     }
// enum Commands {
//     Add = "Add New Task",
//     Complete = "Complete Task",
//     Toggle = "Show/Hide Completed",
//     Purge = "Remove Completed Tasks",
//     Quit = "Quit",
// }
// function promptAdd(): void {
//     console.clear();
//     const prompt = inquirer.createPromptModule();
//     prompt({ type: "input", name: "add", message: "Enter task:"})
//         .then(answers => {if (answers["add"] !== "") {
//             collection.addTodo(answers["add"]);
//         }
//         promptUser();
//     })
// }
// function promptComplete(): void {
//     console.clear();
//     const prompt = inquirer.createPromptModule();
//     prompt({ type: "checkbox", name: "complete",
//         message: "Mark Tasks Complete",
//         choices: collection.getTodoItems(showCompleted).map(item =>
//             ({name: item.task, value: item.id, checked: item.complete}))
//     }).then(answers => {
//         let completedTasks = answers["complete"] as number[];
//         collection.getTodoItems(true).forEach(item =>
//             collection.markComplete(item.id,
//                 completedTasks.find(id => id === item.id) != undefined));
//         promptUser();
//     })
// }
// function promptUser(): void {
//     console.clear();
//     displayTodoList();
//     const prompt = inquirer.createPromptModule();
//     prompt({
//             type: "list",
//             name: "command",
//             message: "Choose option",
//             choices: Object.values(Commands)
//     }).then(answers => {
//     switch (answers["command"]) {
//         case Commands.Toggle:
//             showCompleted = !showCompleted;
//             promptUser();
//             break;
//         case Commands.Add:
//             promptAdd();
//             break;
//         case Commands.Complete:
//             if (collection.getItemCounts().incomplete > 0) {
//                 promptComplete();
//             } else {
//                 promptUser();
//             }
//             break;
//         case Commands.Purge:
//                 collection.removeComplete();
//                 promptUser();
//                 break;
//     }
//   })
// }
// promptUser();
