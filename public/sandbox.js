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
var greet = function (user) {
    console.log("Hello. I am " + user.name + ", of LVL " + user.LVL + ", and i have skills like: " + user.skills);
};
var DRG;
var LNC;
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
