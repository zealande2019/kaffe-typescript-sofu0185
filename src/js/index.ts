import { Kaffe } from './kaffe';
import { Cortado } from './cortado';
import { Latte } from './latte';
import { SortKaffe } from './sortKaffe';


let kaffer: Kaffe[] = []
kaffer.push(new Cortado());
kaffer.push(new Latte());
kaffer.push(new SortKaffe(4));

let list: HTMLElement = document.getElementById('menuKort');

kaffer.forEach(element => {
    console.log(element.kaffeInfo());

    let newKaffe: HTMLElement = document.createElement('li');
    newKaffe.setAttribute('class', 'kaffe')

    let kaffeType: HTMLElement = document.createElement('span');
    kaffeType.setAttribute('class', 'kaffeType');
    kaffeType.innerText = 'Type: ' + element.kaffeDrik();

    let kaffePris: HTMLElement = document.createElement('span');
    kaffePris.setAttribute('class', 'kaffePris');
    kaffePris.innerText = 'Pris: ' + element.pris().toString();

    let kaffeStyrke: HTMLElement = document.createElement('span');
    kaffeStyrke.setAttribute('class', 'kaffeStyrke');
    kaffeStyrke.innerText = 'Styrke: ' + element.styrke();

    let kaffeRabat: HTMLElement = document.createElement('span');
    kaffeRabat.setAttribute('class', 'kaffeRabat');
    kaffeRabat.innerText = 'Rabat: ' + element.rabat.toString();

    newKaffe.appendChild(kaffePris);
    newKaffe.appendChild(kaffeStyrke);
    newKaffe.appendChild(kaffeType);
    newKaffe.appendChild(kaffeRabat);

    list.appendChild(newKaffe);
});

