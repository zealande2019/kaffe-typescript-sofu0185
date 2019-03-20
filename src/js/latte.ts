import { Kaffe } from './kaffe'
import { IMælk } from './iMælk'

export class Latte extends Kaffe implements IMælk {
    constructor(){ 
        super(0)
    }
    mlMælk(): number {
        return 120;
    }
    pris(): number {
        return 40;
    }
    styrke(): string {
        return 'Mild';
    }

}