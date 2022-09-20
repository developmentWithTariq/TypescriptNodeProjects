export class Person {
    constructor(personality = "Mystery") {
        this.personality = personality;
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extravert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a Mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
