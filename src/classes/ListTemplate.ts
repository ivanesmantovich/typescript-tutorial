import { HasLimitBreak } from '../interfaces/HasLimitBreak.js';
export class ListTemplate {
	constructor(private list: HTMLUListElement) {}
	render(warrior: HasLimitBreak, heading: string, pos: 'start' | 'end') {
		let data: HTMLLIElement;
		data = document.createElement('li');

		let header: HTMLHeadingElement = document.createElement('h4');
		header.textContent = heading;
		data.appendChild(header);

		let text: HTMLParagraphElement = document.createElement('p');
		text.textContent = warrior.limitBreak();
		data.appendChild(text);

		if (pos === 'start') this.list.prepend(data);
		else this.list.append(data);
	}
}
