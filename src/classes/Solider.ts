import { HasLimitBreak } from '../interfaces/HasLimitBreak.js';
export class Soldier implements HasLimitBreak {
	constructor(
		public name: string,
		public age: number,
		public transport: string
	) {}

	limitBreak() {
		return `${this.name} does Omnislash.`;
	}
}
