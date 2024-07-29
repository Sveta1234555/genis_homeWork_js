//----------------------------
//----------------------------
// js mod24
// - Функції
//----------------------------
//----------------------------
//позволяет выполнять одинаковые дейтсивя без повторения кода.
//Интсрумент  для структурирования больших программ. Излирования кода
//Программа для повторения одних и тех же действий с разныит входными данными.
// alert, console.log  - все функции


// // есть неск.типов синтаксиса функций
// //-------------------------
// ///1.
// //Дeкларация функций(function declaration)
// //реже всего используется.
// //-------------------------
// //-------------------------
// // Объявления функций
// //назва функции - что она делает
// function ShowMessage() {
//     console.log("Hello");
// }

// //---------------------------
// //Вызов функции
// ShowMessage();

// //-----------------------------
// //параметри и аргументы
// function ShowMessage(name,city) {
//     console.log("Hello, my name is "+name + ". I'm from "+city);
// }
// //Вызов функции
// ShowMessage();

// //Hello, my name is undefined. I'm from undefined

// //Вызов функции
// ShowMessage("Nata", "Kyiv");
// //Hello, my name is Nata. I'm from Kyiv
// ShowMessage("Ola", "Lviv");
// //Hello, my name is Ola. I'm from Lviv


// //-------------------------
// //2.
// //функциональное выражение (function expression)
// //чаще всего используется.
// //-------------------------
// //-------------------------
// // Объявления функций
// //как переменная
// const sayHi = function () {
//     console.log("Hi");
// };
// //Вызов функции
// sayHi();

//Hi

// //-------------------------
// //ЛОкальные переменные
// // переменные внутри функциии, которые доступны только внутри этой функции
// const sayHi = function () {
//     let message = "Hello, my name Ivan.";
//     console.log(message);
// };
// //Вызов функции
// sayHi();
// //Hello, my name Ivan.


// //-------------------------
// //Глобальные переменные
// //можно использ вместе с локальными

// const userName = "Ann";
// const sayHi = function () {
//     let message = "Hello, my name ";
//     console.log(message+userName);
// };
// //Вызов функции
// sayHi();
// //Hello, my name Ann

// // //-------------------------
// // //возврат значений функции
// // // return
// // //-------------------------
// function sum(a, b) {
//     // return a + b;  или
//     let c = a + b;
//     return c;
// };

// let result = sum(5, 7);
// console.log(result);        //12s


// // // //-------------------------
// // // наполнение ф-ций. передача аргументов

// //если аргументы не передаются. они undefined
// const testFunk = function (a, b) {
//     console.log("a:", a);
//     console.log("b:", b );
// };

// // аргументы передаются слева направо
// testFunk();
// // a: undefined script24.js:107:13
// // b: undefined
// testFunk(5);
// // a: 5 script24.js:107:13
// // b: undefined

// // //НЕЛЬЗЯ передать2-е и не передать первое !!!!!------------
// // // Так ошибка.  (Uncaught SyntaxError: expected expression, got ',')
// // testFunk(, 7);
// // // (Uncaught SyntaxError: expected expression, got ','

// // testFunk(5, 8);
// // // a: 5 script24.js:107:13
// // // b: 8

// //передать больше аргументов - отрабатывает, не ругается!!!
// testFunk(5, 8, 9);
// // вывод есть 2х. И не ругается, выводит 2
// // a: 5 script24.js:107:13
// // b: 8

// // // //-------------------------
// //return
// // прекаращает выполнение функции


// const testFunk = function (a, b) {
//     console.log("a:", a);
//     console.log("b:", b);
//     return;
//     a + b;  //это не выполняется
// };
// testFunk(5, 8);

// //что передается return - то и есть значение возврата

// const testFunk2 = function (a, b) {
//     console.log("a:", a);
//     console.log("b:", b);
//      let c=a + b;
//     return 100;
    
// };
// let res=testFunk2(5, 8);
// console.log(res);
// // a: 5
// // b: 8
// // 100


// //так ok, и без let для С отработало
// const testFunk2 = function (a, b) {
//     console.log("a:", a);
//     console.log("b:", b);
//     c=a + b;
//     return c;
// };
// let rss = testFunk2(5, 12);
// console.log(rss);






//11:30мин

// // // // //-------------------------
// // //порядок выполнения кода----
// // 1. объявляем ф - ю a
// const a = function () {
//     c();
//     console.log("function a");
//     b();
// }

// // 2. объявляем ф - ю b

// const b = function () {
//       console.log("function b");
// }

// // 3. объявляем ф - ю c

// const c = function () {
//       console.log("function c");
// }

// // код выполняется сверху вниз. Но по вызову
// a();
// //function a


// // доб. в ф. a вызов ф-ции b
// a();
// // function a
// // function b

// // доб. в ф. a вызов ф-ции с перед b
// a();
// // function c
// // function a
// // function b



//12:45мин

// // // // // //-------------------------
// // // //аргументы----
// // каждая функиця, кроме стрелочных , имеет свой псевдомассив аргуменнтов
// //в примере - не задаем аргуметов. Но в выодве в консоль - есть псевдомассив
// const addName = function () {
//     console.log(arguments);
// };

// addName();

// ВЫвод в консоль:
// Arguments { … }
// callee: function addName()
// length: 0
// Symbol(Symbol.iterator): function values()
// <prototype>: Object { … }
    // __defineGetter__: function __defineGetter__()
    // __defineSetter__: function __defineSetter__()
    // __lookupGetter__: function __lookupGetter__()
    // __lookupSetter__: function __lookupSetter__()
    // __proto__: Object { … }
    // constructor: function Object()
    // hasOwnProperty: function hasOwnProperty()
    // isPrototypeOf: function isPrototypeOf()
    // propertyIsEnumerable: function propertyIsEnumerable()
    // toLocaleString: function toLocaleString()
    // toString: function toString()
    // valueOf: function valueOf()
    // <get __proto__()>: function __proto__()
    // <set __proto__()>: function __proto__()

// Для чего нужен псевдомассив
// В < prototype >: - это и есть псевдомассив,  можно посмтреть , что с ним можно далеть. т.е. сколько у него есть методов.
//  В обычном массиве - методов значительно больше, чем в этом выводе.

// const testFunk2 = function (a, b) {
//     console.log("a:", a);
//     console.log("b:", b);
//     console.log(arguments);
//     c=a + b;
//     return c;
// };
// let rss = testFunk2(5, 12);
// console.log(rss);

// // Arguments { 0: 5, 1: 12, … }
// // 0: 5
// // 1: 12
// // callee: function testFunk2(a, b)
//         // ​rguments: null
//         // ​caller: null
//         // ​length: 2
//         // ​name: "testFunk2"
//         // ​prototype: Object { … }
//             //
//         // ​<prototype>: function ()
//             //
//         // ​length: 2
// // length: 2
// // Symbol(Symbol.iterator): function values()
// // <prototype>: Object { … }

// // // // // //-------------------------
// // Для чего нужен псевдомассив
// // КОгда неизвестно, сколько аргументов придет в функцию

// const addName = function () {
//     console.log(arguments);
// };

// addName(1, 3, 5);
// //Arguments { 0: 1, 1: 3, 2: 5, … }
// addName(1, 3, 5, 45, 67);
// // Arguments { 0: 1, 1: 3, 2: 5, 3: 45, 4: 67, … }
// //т.е.  не знаем сколько аргументов будет, поэтому есть псевдомассив arguments.

// // // //-------------------------
// // Преобразовав псевдомассив в нормаьный массив , мождно с ним взаимодействоваnm, переирать его for...
// // как сделать из псевдомассива - массив--------------------
// // const arg = Array.from(arguments); -------------------

// const addName = function () {
//     const arg = Array.from(arguments);
//     console.log(arguments);
//     console.log(arg);
// };

// addName(1, 3, 5);
// // Arguments { 0: 1, 1: 3, 2: 5, … }
// // Array(3) [ 1, 3, 5 ]

// У обычного массива гораздо больше методов в разделе ввывода   <prototype>: Array []  - pop, push, find...
// <prototype>: function ()
// at: function at()
//
// concat: function concat()
//
// constructor: function Array()
//
// copyWithin: function copyWithin()
//
// entries: function entries()
//
// every: function every()
//
// fill: function fill()
//
// filter: function filter()
//
// find: function find()
//
// findIndex: function findIndex()
//
// findLast: function findLast()
//
// findLastIndex: function findLastIndex()
//
// flat: function flat()
//
// flatMap: function flatMap()
//
// forEach: function forEach()
//
// includes: function includes()
//
// indexOf: function indexOf()
//
// join: function join()
//
// keys: function keys()
//
// lastIndexOf: function lastIndexOf()
//
// length: 0
//
// map: function map()
//
// pop: function pop()
//
// push: function push()
//
// reduce: function reduce()
//
// reduceRight: function reduceRight()
//
// reverse: function reverse()
//
// shift: function shift()
//
// slice: function slice()
//
// some: function some()
//
// sort: function sort()
//
// splice: function splice()
//
// toLocaleString: function toLocaleString()
//
// toReversed: function toReversed()
//
// toSorted: function toSorted()
//
// toSpliced: function toSpliced()
//
// toString: function toString()
//
// unshift: function unshift()
//
// values: function values()
//
// with: function with()
//
// Symbol(Symbol.iterator): function values()
//
// Symbol(Symbol.unscopables): Object { at: true, copyWithin: true, entries: true, … }


// итого - сделали псевдомасси нормальным - и с ним уже делаем , что нужно
    // const arg = Array.from(arguments);


    // 15:24мин
// // // // // //-------------------------
// // rest  - (...arg)   ---------
// // оператор rest  - это аргуметы функици в формате   (...arg)


// const addName = function (...arg) {
//     console.log(arg);
// };

// addName(1, 3, 5);
// addName(1, 3, 5, 78, 56);
// // Array(3) [ 1, 3, 5 ]
// // Array(5) [ 1, 3, 5, 78, 56 ]


//     // 16:16мин
// // // // // //-------------------------
// // callback
// // функции обратного вызова  !!!!!!!!!!!!!!-------------

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// };

// function showOk() {
//     console.log("You say OK");

// };

// function showCancel() {
//     console.log("You say NO");

// };

// ask("Yes or no?", showOk, showCancel);
// // смотря что выбрали - выоводится :
// // You say OK
// // You say NO

// // т.е. аргументы функции ask( )  yes, no  - это функции обратного вызова
// // callback  - функция, которая будет вызвана позже
// //смысл- передаем функцию в аргументах, и ожидаем, что она будетвызваа позже


// https://learn.javascript.ru/callbacks


    // 18:48мин
// // // // // //-------------------------
// // hof  (higher order functions)
// // еще callback называют hof
// // функции высшего порядка
// //- функции, кот. могут принимать или возвращать др. функции

// const hello = function (name) {
//     console.log(`Hello, ${name}`);
// };
// hello("Ann");
// // Hello, Ann


// // если имя сразу недоступно - добавим  ф-ю searcName()
// // callback  в параметрах функции - можно писать любое название, но принято - если ожидаем callback, писать в аргументах "callback"
// //результат другой функции - например, имя получили в результате вычисления

// //const searcName = function (callbackfff);

// const searcName = function (callback) {
//     const name = "Ivan";
//     callback(name);
// };

// searcName(hello);
// // просто ф - я SearchName использует результат, возвращаемый другой функцией hello.
// // Эта 2я ф-я hello  указана в аргументах. и фсё.

// // принято такие ф-ции делать максимально короткими одна ф-я - одно действие. Для легкости сопровождения
// // Т.о. если можно разделить код на маленькиефункции - так и делаем.



    // 21:13мин
// // // // //-------------------------
// return

// // все, что после return - не выполняется.

// // //1. НО -есть блочная видимость -----------------------
// // function checkAge(age) {
// //     if (age > 18) {
// //         return console.log("Hello");
// //     } else {
// //  console.log("Good Bye");
// //     }
// // };

// // checkAge(12);       //Good Bye
// // checkAge(21);       //Hello


// //-------------
// // можно здесь без else
// function checkAge(age) {
//     if (age > 18) {
//         return console.log("Hello");
//     }
//  return console.log("Good Bye");
// };


// checkAge(12);       //Good Bye
// checkAge(21);       //Hello

// //ну конечно, если  return находится внутри условия, не значит, что бросили все выполнять.
// // мы ж не заходим в этот if для его выполнения. для age=12/

// //это имеет смысл для уменьшения кода.





// // // // // //-------------------------
// // 2. return не обязательно что-то возвращает
// //м.б. просто вход из функции
// function showMovie(age) {
//     if (age <21) {
//         return ;
//     }
//  return console.log("Go to movie!");
// };
// showMovie(12);      //пусто
// showMovie(21);      //Go to movie!


// 24:35мин
// итоги лекционные

// // --26:23 мин
// // // // // //-------------------------
// // стрелочнеы функции
// //чаще всего используются
// //новый синтаксис
// //они (функции) простые
// // // // // //-------------------------
//  //                         const test = () => { };
// // // // // //-------------------------
// // аргументы - могут быть, может не быть

// // // объявление функции
// // const test = (arg) => { console.log(arg) };
// // // вызов функции
// // test("Hello");


// // Особенности стрелочных функций - нет псевдомассива аругментов



// // из такой ф-ции делаем стрелочную
// // function showMovie(age) {
// //     if (age <21) {
// //         return ;
// //     }
// //  return console.log("Go to movie!");
// // };
// // showMovie(12);      //пусто
// // showMovie(21);      //Go to movie!


// // стрелочная функция
// const showMovie=(age)=> {
//     if (age >21) {
//         return console.log("Hello!");
//     }
//     return console.log("Bye!");
//  };
//  showMovie(22);      //Hello!
// showMovie(20);      //Bye!

// // 28:45 мин
// //-------------------------
// //контексты и вызовы
// //-------------------------
// одна функцию может внутри вызывать другую, и такая вложенность одной в слеующую - норма. м.б. много
// JavaScript- однопоточный  язык. т.е. может выполнять только одну функцию (не может выполнять несколько параллельно функций)

// //т.е.пока выполняется вызыванная ф-я, первая врхняя ожидает
// // стэк - работает по принципу последний пришел. первый пошел
// // 1-я вызывает 2-ю, 2-я вызывет 3-ю . Пока выполняется 3-я - 2 первые ждут

// const a = () => { console.log("a"); };
// const b = () => { console.log("b"); };
// const c = () => {
//     console.log("c");
//     a();
//     b();
// };

// c();  //c a b

//32:02мин
// практика. подсоединять ф-ции к чему-то
console.log(document);      //HTMLDocument file:///D:/it/Fs_js/lesson4/Lesson/index24.html

// // дописываем в index24.html
// <p>ffbfdh</p>
// <label>
//     input type="number" name="number"
// </label>

// цель - достучаться в document до <input 
// const inputRef
// договоренности имен Ref - считываем ссылку Ref.добавить к имении  - inputRef, а не просто input
const numberRef = document.querySelector('input[name="number"]');
// const numberRef = document.querySelector('.class');
// const numberRef = document.querySelector('#id');
console.log(numberRef);   //<input type="number" name="number">  и куча вложенностей служебных по треугольничкам открыавется
// весь со вложенностями он нам не нужен. Надо только value
console.log(numberRef.value);  //123

//стучимся к кнопочке в документе
const buttonRef = document.querySelector("button");
console.log(buttonRef.value); 
36:55 мин.
