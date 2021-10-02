export class Soldier {
    constructor(name, age, transport) {
        this.name = name;
        this.age = age;
        this.transport = transport;
    }
    limitBreak() {
        return `${this.name} does Omnislash.`;
    }
}
