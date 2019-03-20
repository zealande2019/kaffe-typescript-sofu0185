import { Kaffe } from './kaffe'

export class SortKaffe extends Kaffe {
    pris(): number {
        return 20 - this.rabat;
    }
    styrke(): string{
        return 'Stærk';
    }

}