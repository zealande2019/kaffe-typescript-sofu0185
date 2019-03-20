import { Kaffe } from './kaffe'
import { IMælk } from './iMælk'

export class Cortado extends Kaffe implements IMælk {
    constructor() { super(0) }
    pris(): number {
        return 25;
    }
    mlMælk(): number {
        return 25;
    }
    styrke(): string {
        return 'Mild'
    }

}