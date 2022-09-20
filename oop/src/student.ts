import { Person } from "./person.js";

export class Student extends Person {

    constructor(
        private _name: string= "",
        ) {
            super()
        }

    get Name() {
        return this._name;
    }

    set Name(val) {
        this._name = val;
    }
}