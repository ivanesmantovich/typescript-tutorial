import { HasLimitBreak } from '../interfaces/hasLimitBreak.js';
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
