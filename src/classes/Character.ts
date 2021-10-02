import { HasLimitBreak } from '../interfaces/hasLimitBreak.js';
import { IsWarriorOfLight } from '../interfaces/IsWarriorOfLight.js';
export class Character implements IsWarriorOfLight, HasLimitBreak {
	constructor(
		readonly name: string,
		private job: string,
		public lvl: number,
		public dateOfObtainingFirstCrystal: string,
		public dateOfObtainingSecondCrystal: string,
		public dateOfObtainingThirdCrystal: string,
		public dateOfObtainingFourthCrystal: string,
		public dateOfObtainingFifthCrystal: string,
		public dateOfObtainingSixthCrystal: string
	) {}

	introduction() {
		return `${this.name} plays as a ${this.job}. He/She is currently LVL ${this.lvl}`;
	}

	limitBreak() {
		return `${this.name} does severe DMG to one foe.`;
	}
}