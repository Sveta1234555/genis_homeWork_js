
// // //Домашнє завдання mod23.
// // // цикли масиви

// // -- 1 --
// // У вас є масив об’єктів fruts, і в кожному з них є name
// // Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];

// console.log(fruts);
// let arr = fruts.map((item) => item.name);
// console.log(arr);

// // Array(4) [ {…}, {…}, {…}, {…} ]
// // ​0: Object { id: 0, name: "Apple" }
// // ​1: Object { id: 1, name: "Tomat" }
// // ​2: Object { id: 2, name: "Cherry" }
// // ​3: Object { id: 3, name: "Orange" }
// // ​length: 4
// //

// // Array(4) [ "Apple", "Tomat", "Cherry", "Orange" ]
// // 0: "Apple"
// // 1: "Tomat"
// // 2: "Cherry"
// // 3: "Orange"
// // length: 4







// // -- 2 --
// //Виведіть парні числа від 2 до 10, використовуючи цикл for.

// //пример - вывести нечетные. (остаток от деления на 2 <>0)
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 !== 0) continue;      //непарні пропускаем
//     console.log(i);
// }

// // 2 scriptDZ23.js:46:13
// // 4 scriptDZ23.js:46:13
// // 6 scriptDZ23.js:46:13
// // 8 scriptDZ23.js:46:13
// // 10


// // -- 3 --
// //Замініть цикл "for" на "while"
// // for (let i = 0; i < 5; i++) {
// // console.lpg( `цифра ${i}!` );
// // }

// console.log(`for----`);
// for (let i = 0; i < 5; i++) {
// console.log( `цифра ${i}!` );
// }

//     console.log(`while----`);
// let i2 = 0;
// while (i2 < 5) {
//     console.log(`цифра ${i2}!`);
//     i2++;
// }


// // for---- scriptDZ23.js:62:9
// // цифра 0! scriptDZ23.js:64:9
// // цифра 1! scriptDZ23.js:64:9
// // цифра 2! scriptDZ23.js:64:9
// // цифра 3! scriptDZ23.js:64:9
// // цифра 4! scriptDZ23.js:64:9
// // while---- scriptDZ23.js:67:13
// // цифра 0! scriptDZ23.js:70:13
// // цифра 1! scriptDZ23.js:70:13
// // цифра 2! scriptDZ23.js:70:13
// // цифра 3! scriptDZ23.js:70:13
// // цифра 4!


// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

while (true) {
    const num = prompt("Введiть число більше за 100");
    let  numn = Number(num);

    const mess = " Прошу ввести ще раз: число більше за 100."
    
    if ((!num) || (numn > 100)) break;
    else if (Number.isNaN(numn)) {
        alert(`Ви ввели значення :  "${num}" . Це не число.` + mess);
    } else if (numn <= 100) {
        alert(`Ви ввели значення :  ${num} . Це число НЕ більше за 100.` + mess);
    } 
}



// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];


// Вирахуйте середній вік
console.log("--5.Вирахуйте середній вік------------");
const girls = [
{ age: 23, name: "Оля" },
{ age: 29, name: "Аня" },
{ age: 10, name: "Юля" },
{ age: 20, name: "Катя" },
];

console.log(girls);
let mid = girls.reduce((mid_, item) => mid_ + item.age, 0) / girls.length;
let mid2 = girls.reduce((mid_, girls) => mid_ + girls.age,0) / girls.length;
console.log(`середній вік ${mid}!`);
console.log( `середній вік ${mid2}!` );

//середній вік 20.5!
