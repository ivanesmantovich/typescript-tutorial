export class Character {
    constructor(name, job, lvl, dateOfObtainingFirstCrystal, dateOfObtainingSecondCrystal, dateOfObtainingThirdCrystal, dateOfObtainingFourthCrystal, dateOfObtainingFifthCrystal, dateOfObtainingSixthCrystal) {
        this.name = name;
        this.job = job;
        this.lvl = lvl;
        this.dateOfObtainingFirstCrystal = dateOfObtainingFirstCrystal;
        this.dateOfObtainingSecondCrystal = dateOfObtainingSecondCrystal;
        this.dateOfObtainingThirdCrystal = dateOfObtainingThirdCrystal;
        this.dateOfObtainingFourthCrystal = dateOfObtainingFourthCrystal;
        this.dateOfObtainingFifthCrystal = dateOfObtainingFifthCrystal;
        this.dateOfObtainingSixthCrystal = dateOfObtainingSixthCrystal;
    }
    introduction() {
        return `${this.name} plays as a ${this.job}. He/She is currently LVL ${this.lvl}`;
    }
    limitBreak() {
        return `${this.name} does severe DMG to one foe.`;
    }
}
