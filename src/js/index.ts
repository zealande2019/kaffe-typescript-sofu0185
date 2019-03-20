import { Kaffe } from './kaffe';
import { Cortado } from './cortado';


let kaffer: Kaffe[] = []
kaffer.push(new Cortado());

kaffer.forEach(element => {
    console.log(`Rabat: ${element.rabat}; Pris: ${element.pris}; Styrke: ${element.styrke}`);
});
