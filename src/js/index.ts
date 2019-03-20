import { Kaffe } from './kaffe';
import { Cortado } from './cortado';
import { Latte } from './latte';


let kaffer: Kaffe[] = []
kaffer.push(new Cortado());
kaffer.push(new Latte());

kaffer.forEach(element => {
    console.log(`Rabat: ${element.rabat}; Pris: ${element.pris}; Styrke: ${element.styrke}`);
});
