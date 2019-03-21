export abstract class Kaffe {
    rabat: number;
    constructor(rabat: number){
        this.rabat = rabat;
    }
    abstract pris(): number;
    styrke(): string { return "Stærk" }
    abstract kaffeDrik(): string;
    kaffeInfo(): string {
        return `Kaffe drik: ${this.kaffeDrik()}; Rabat: ${this.rabat}; Pris: ${this.pris()}; Styrke: ${this.styrke()}`;
    }
}