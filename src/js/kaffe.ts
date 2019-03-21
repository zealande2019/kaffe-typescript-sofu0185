export abstract class Kaffe {
    rabat: number;
    constructor(rabat: number){
        this.rabat = rabat;
    }
    abstract pris(): number;
    styrke(): string { return "Stærk" }
    abstract kaffeDrik(): string;
}