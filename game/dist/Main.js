import inquirer from "inquirer";
export class Main {
    constructor() {
        this.enemies = ["Dragan", "Zombie", "Waal"];
        this.maxEnemyHealth = 75;
        this.enemyAttackDamage = 25;
        this.health = 100;
        this.attackDamage = 10;
        this.numHealthPotions = 3;
        this.healthPotionHealAmount = 30;
        this.healthPotionDropChance = 50;
        this.running = true;
    }
    async rmc() {
        GAME: while (this.running) {
            console.log("---------------------------------------------------------");
            let enemyHealth = Math.floor(Math.random() * this.maxEnemyHealth) + 1;
            let enemy = this.enemies[Math.floor(Math.random() * this.enemies.length)];
            console.log(`\t ${enemy} has appated: \n`);
            while (enemyHealth > 0) {
                console.log(`\t> Your HP: ${this.health}`);
                console.log(`\t> ${enemy}'s HP: ${enemyHealth}`);
                console.log(`\n\t> What would you like to do ?`);
                let prompt = inquirer.createPromptModule();
                const playerDec = await prompt({
                    type: "list",
                    name: "decision",
                    message: "Select enemy",
                    choices: ["Attack", "Drink health potion", "Run"]
                });
                if (playerDec["decision"] === "Attack") {
                    let damageDealt = Math.floor(Math.random() * this.attackDamage) + 1;
                    let damageTaken = Math.floor(Math.random() * this.enemyAttackDamage) + 1;
                    enemyHealth -= damageDealt;
                    this.health -= damageTaken;
                    console.log(`\t> You strike the ${enemy} for ${damageDealt} damage.`);
                    console.log(`\t> You recieve ${damageTaken} in retaliation!`);
                    if (this.health < 1) {
                        console.log("You have taken too much damage, you are too weak to go on!");
                        break;
                    }
                }
                // case "Drink health potion":
                else if (playerDec["decision"] === "Drink health potion") {
                    if (this.numHealthPotions > 0) {
                        this.health += this.healthPotionHealAmount;
                        this.numHealthPotions--;
                        console.log(`> Your drink a health potion, healing yourself for ${this.healthPotionHealAmount}
                        \n\t> You now have ${this.health} HP.
                        \n\t> You have ${this.numHealthPotions} health potions left.\n`);
                    }
                    else {
                        console.log(`\t> YOu have no health potion left Defeat enemies for a chance to get one.`);
                    }
                }
                else if (playerDec["decision"] === "Run") {
                    console.log(`\tYOu run away from the ${enemy} :`);
                    continue GAME;
                }
                else {
                    console.log(`\t invalid command!`);
                }
            }
            if (this.health < 1) {
                console.log("You limp out of the dandeon");
                break;
            }
            console.log("--------------------------------------------------------------");
            console.log(` # ${enemy} was defeated! #`);
            console.log(`You have ${this.health} HP left.`);
            if (Math.floor((Math.random() * 100)) < this.healthPotionDropChance) {
                this.numHealthPotions++;
                console.log(`The ${enemy} dropped a health potion`);
                console.log(`You now have ${this.numHealthPotions} health potions`);
            }
            console.log("-------------------------------------------------------------");
            console.log(`what would you like to do now`);
            console.log();
            let prompt = inquirer.createPromptModule();
            let Cord = await prompt({
                type: "list",
                name: "CorE",
                message: `What would you like to do now?`,
                choices: ["Continue", "Exit"]
            });
            if (Cord["CorE"] === "Continue") {
                console.log("YOu continue on your adventure");
            }
            else if (Cord["CorE"] === "Exit") {
                console.log("you exit the danger game");
                break;
            }
        }
        console.log(`\t################`);
        console.log(`\tThank's to play..`);
        console.log(`\t################`);
    }
}
