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
// const greet = (user: { name: string; skills: string[]; LVL: number }) => {
// 	console.log(
// 		`Hello. I am ${user.name}, of LVL ${user.LVL}, and i have skills like: ${user.skills}`
// 	);
// };
// type JobType = { name: string; skills: string[]; LVL: number };
// let DRG: JobType;
// let LNC: JobType;
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
// greet(DRG);
// greet(LNC);
// Type aliases
// ------------------------------------------------------------------------
// Function signatures
// Первый пример
// Сначала задаю типы
// let teleport: (charName: string, destination: string) => void;
// // После этого обозначаю функцию
// teleport = (charName, destination) => {
// 	console.log(`${charName} successfully teleported to the ${destination}.`);
// };
// teleport('Kaine', 'Limsa Lominsa');
// // Так делать нельзя
// let calc: (firstNum: number, secondNum: number, action: string) => number;
// calc = (firstNum, secondNum, action) => {
// 	if (action == 'add') return firstNum + secondNum;
// };
// Третий пример
// let lvlsToDRG: (lancer: {name: string, currentLvl: number}) => string
// lvlsToDRG = (lancer) => {
// 	return `${lancer.name} has ${30 - lancer.currentLvl} lvls left to become a Dragoon.`
// }
// console.log(lvlsToDRG({name: 'Kaine', currentLvl: 20}))
// Function signatures
// Generics
// Необходимо дополнить обьект передаваемый в виде аргумента
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
// Нельзя
// const addID = (obj:object) => {
// 	let id = Math.floor(Math.random() * 100);
// 	return {...obj, id}
// }
let firstDoc = addID({ name: 'Kaine', age: 21 });
console.log(firstDoc);
const numResources = [];
const strResources = [];
const firstResource = {
    id: 1,
    resourceName: 'Cash payment',
    data: 500,
};
const secondResource = {
    id: 2,
    resourceName: 'Credit',
    data: 'Until 20/04/2022',
};
const thirdResource = {
    id: 3,
    resourceName: 'Free',
    data: 0,
};
numResources.push(firstResource);
strResources.push(secondResource);
// strResources.push(thirdResource) // Type 'number' is not assignable to type 'string'.
// Могу сохранять "типовую стабильность" между инпутом и аутпутом
// Передать массив значений указанного типа и получить массив уникальных значений указанного типа.
function fn(arg) {
    return Array.from(new Set(arg));
}
// Generics
