"use strict";
// Functions
// const add = (a: number, b: number, c: number | string = 10) => {
// 	console.log(a+b);
//     console.log(c)
// };
// add(10, 5);
// const minus = (a: number, b: number): number => {
// 	return a - b;
// };
// let result: number = minus(5, 2);
// Functions
// ------------------------------------------------------------------------
// Type aliases
// Без использования элиасов
// let DRG: {
// 	name: string;
// 	skills: string[];
// 	LVL: number;
// };
// let LNC: {
// 	name: string;
// 	skills: string[];
// 	LVL: number;
// };
// DRG = {
// 	name: 'Kaine',
// 	skills: ['Jumping'],
// 	LVL: 50,
// };
// LNC = {
// 	name: 'Jack',
// 	skills: ['Dying'],
// 	LVL: 10,
// };
// С использованием элиасов
const greet = (user) => {
    console.log(`Hello. I am ${user.name}, of LVL ${user.LVL}, and i have skills like: ${user.skills}`);
};
let DRG;
let LNC;
DRG = {
    name: 'Kaine',
    skills: ['Jumping'],
    LVL: 50,
};
LNC = {
    name: 'Jack',
    skills: ['Dying'],
    LVL: 10,
};
greet(DRG);
greet(LNC);
// Type aliases
// ------------------------------------------------------------------------
// Function signatures
// Первый пример
// Сначала задаю типы
let teleport;
// После этого обозначаю функцию
teleport = (charName, destination) => {
    console.log(`${charName} successfully teleported to the ${destination}.`);
};
teleport('Kaine', 'Limsa Lominsa');
// // Так делать нельзя
// let calc: (firstNum: number, secondNum: number, action: string) => number;
// calc = (firstNum, secondNum, action) => {
// 	if (action == 'add') return firstNum + secondNum;
// };
// Третий пример
let lvlsToDRG;
lvlsToDRG = (lancer) => {
    return `${lancer.name} has ${30 - lancer.currentLvl} lvls left to become a Dragoon.`;
};
console.log(lvlsToDRG({ name: 'Kaine', currentLvl: 20 }));
// Function signatures
