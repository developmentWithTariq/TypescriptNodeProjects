export class Person {
    constructor(
        protected personality: string = "Mystery"
        ) {
        
        }
    askQuestion( answer: number ) {
        if(answer == 1) {
            this.personality = "Extravert";
        }
        else if( answer ==2 ){
            this.personality = "Introvert";
        }
        else{
            this.personality = "You are still a Mystery"
        }
    }
    getPersonality(): string {
        return this.personality;
    }
}