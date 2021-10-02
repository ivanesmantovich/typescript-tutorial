// let message: string = 'Hello World!';
// console.log(message);

// const circ = (diameter: number) => {
// 	return diameter * Math.PI;
// };

// console.log(circ(2));

// // Arrays

// let strings = ['Kaine', 'Rhyne', 'YShtola'];
// strings.push('Minfilia');
// // names.push(3) // Нельзя

// let numbers = [1, 2, 3];
// // numbers.push('Not a number'); // Нельзя

// let mixed = ['Kaine', 1, 'Rhyne', 2, 3]; //  Можно, но только цифры и строки
// mixed.push('Minfilia');
// mixed.push(4);
// // mixed.push(true); // Нельзя

// // Arrays

// // Objects

// let DRG = {
// 	name: 'Kaine',
// 	weapon: 'Lance',
// 	LVL: 50,
// };

// DRG.LVL = 60;
// // DRG.LVL = '70' // Нельзя

// // DRG.skills = ['Jumping'] // Нельзя добавлять новые параметры в уже созданные обьекты

// DRG = {
//     name: 'Rhyne',
//     weapon: 'Stronger Lance',
//     LVL: 60
// } // Можно переназначать обьект только если в нем будут все изначально обявленные поля со значениями ТОГО ЖЕ ТИПА

// // DRG = {
// //     name: 'Rhyne',
// //     weapon: 'Stronger Lance',
// //     LVL: '70' // Нельзя (смена типа)
// // }

// // DRG = {
// //     name: 'Rhyne',
// //     weapon: 'Stronger Lance',
// //     LVL: 70,
// //     skills: ['Jumping'] // Нельзя (добавление изначально не обозначенного параметра)
// // }

// // Objects

// --------------------------------------------------------------------

// Explicit types

// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// Explicit types

// Arrays

// НЕОБХОДИМО СРАЗУ ОБОЗНАЧИТЬ КАК ПУСТОЙ МАССИВ, ИНАЧЕ НЕ БУДЕТ РАБОТАТЬ ПУШ И ОСТАЛЬНЫЕ МЕТОДЫ
// let names: string[] = [];

// // names = [10, 20]; // Нельзя
// // names = ['Kaine', 'Rhyne'];

// // НЕОБХОДИМО СРАЗУ ОБОЗНАЧИТЬ КАК ПУСТОЙ МАССИВ, ИНАЧЕ НЕ БУДЕТ РАБОТАТЬ ПУШ И ОСТАЛЬНЫЕ МЕТОДЫ
// names.push('Kaine');
// console.log(names);

// Arrays

// Union types

// let mixed: (string | number)[] = [];
// mixed.push(1); // Можно
// mixed.push('Kaine'); // Можно
// mixed.push(true); // Нельзя

// let mixed: (string | number | boolean)[] = [];
// mixed.push(1); // Можно
// mixed.push('Kaine'); // Можно
// mixed.push(true); // Теперь можно

// let userID: string | number;
// userID = 'Kaine';
// userID = 67;

// Union types

// Objects

// // Можно присваивать обьект с любым кол-вом параметров любого типа, главное чтобы присваиваемое значение было обьектом
// let nonStrictObject: object;
// nonStrictObject = {
// 	name: 'Kaine',
// 	LVL: 50,
// };

// // Переменная должна быть обьектом и обязательно иметь данные параметры данного типа
// let strictObject: {
// 	name: string;
// 	LVL: number;
// 	isASprout: boolean;
// };

// // strictObject = {
// // 	name: 'Kaine',
// // }; // Нельзя (не хватает заполненных параметров)

// strictObject = {
//     name: 'Kaine',
//     LVL: 50,
//     isASprout: true
// } // Можно

// // strictObject = {
// //     name: 'Kaine',
// //     LVL: 50,
// //     isASprout: true
// //     skills: ['Jumping'], // Нельзя (добавляю параметр не обозначенный изначально)
// // }

// Objects

// --------------------------------------------------------------------

// Dynamic (any) types
// Не стоит использовать, только в исключительных случаях

let data: any;

data = 'Kaine';
console.log(data);

data = 67; // Можно, разрешены любые типы
console.log(data);

data = {
	name: 'Kaine',
	job: 'DRG',
	LVL: 50,
}; // Можно, разрешены любые типы
console.log(data);

// Dynamic (any) types
// --------------------------------------------------------------------
