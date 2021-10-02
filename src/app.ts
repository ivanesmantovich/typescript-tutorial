import { Character } from './classes/Character.js';
import { Soldier } from './classes/Solider.js';
import { HasLimitBreak } from './interfaces/hasLimitBreak.js';
import { ListTemplate } from './classes/ListTemplate.js';

const me = new Character(
	'Kaine',
	'DRG',
	50,
	'28-03-2000',
	'28-03-2000',
	'28-03-2000',
	'28-03-2000',
	'28-03-2000',
	'28-03-2000'
);

const notMe = new Soldier(
    'Cloud Strife',
    25,
    'Bike'
)

const limitBreakers: HasLimitBreak[] = [];
limitBreakers.push(me);
limitBreakers.push(me);

let myList: ListTemplate = new ListTemplate();
myList.render(notMe, 'Won')