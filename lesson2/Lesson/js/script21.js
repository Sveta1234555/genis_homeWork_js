//--------------
//Подключение  js -  в html
//Переменные
//  console.log(a);  //Uncaught ReferenceError: can't access lexical declaration 'a' before initialization
//let a = 110;
//console.log(a);  //10
//a = 20;
//console.log(a);   //20

// Почему остается ошибка у меня в браузере
// Uncaught SyntaxError: redeclaration of let a
//потому что 2 строки в html  с вызовом этого скрипта было
//ок

//----------------
//const b=15;
//console.log(b);  //10

//Типы данных-----------
//
//Boolean;
//let name = true;
//let age = false;

//
//Symbol;

//спец типы данных---------
//undefined;  //не присводилизначение
//null;   // присводили пустое значение

// let a = null;
// console.log(a);     //null
// let b;
// console.log(b);     //undefined


//
// typeof
// console.log(typeof 3);  //number
// console.log(typeof "adf");  //string
// console.log(typeof true);   //boolean


//-----------------------------
//число

// console.log(1 + 2);     //3

// Number - приведение к числу    -
// const value = "3";      //3
// console.log(typeof value);   //string
// console.log(Number(value));     //3
// console.log(typeof Number(value));  //number

// //----------------
// //isNaN(v)
// //проверка на число  - оператор isNaN(v)
// //true - не число, false - число
// //Глобальное свойство NaN является значением, представляющим не-число (Not-A-Number).
// // NaN  не-число (Not-A-Number).


// let a = 31;
// console.log(a);

// const number=Number("51");
// console.log(Number.isNaN(number));  //false

// const string = Number("ljhkjhkjh");
// console.log(Number.isNaN(string));  //true


// // еще я
// console.log(typeof (number));       //number

//--------------------------

//Number.parseInt()   и Number.parseFloat()
//parsInt  - парсит целые числа
// console.log(Number.parseInt("5ddd"));  //5
// console.log(Number.parseInt("12fg994"));  //12
// console.log(Number.parseInt("11.6fdxgfdx79"));  //11
// console.log(Number.parseInt("dfgsdfg"));  //NaN


//parseFloat  парсит дробные счисла, с точкой
// console.log(Number.parseFloat("5ddd"));  //5
// console.log(Number.parseFloat("12fg994"));  //12
// console.log(Number.parseFloat("11.6fdxgfdx79"));  //11.6
// console.log(Number.parseFloat("dfgsdfg"));  //NaN

//суммирование  с точкой
// console.log(0.1 + 0.2 === 0.3);  // false

// console.log(0.1 + 0.2);  // 0.30000000000000004

// console.log((0.1*10 + 0.2*10)/10);  //0.3

// 09:45мин

//--------------------------------
// ОБъект Math

// Math.floor(n)  -возвращает  целое число, меньшее или равно указанному n
// console.log(Math.floor(1.7));   //1

// Math.cell(n)  -возвращает  целое число, большее или равно указанному n!!!!!!!!!!!!!???????????
// console.log(Math.cell(1.7));   //2
// console.log(Math.cell(1.2));   //2

//почему у меня ругается на эти команды cell????????????


// Math.round(n) - округление  к ближайшему целому
// console.log(Math.round(1.7));   //2
// console.log(Math.round(1.2));   //1


//Math.max(n1,n2...) - максимальное из чисел
// console.log(Math.max(10, 20, 30, 50, 40));   //50


//Math.min(n1,n2...) - min из чисел
//  console.log(Math.min(10, 20, 30, 50, 40));   //10


// Math.pow(base, exponent) - возводит в степень
// console.log(Math.pow(2, 4));   //16

// Math.random() - случйное число между 0 и 1
// console.log(Math.random());   //  случайное от 0 до1   0.501941398717463
// console.log(Math.random()*(10-1)+1);   //случайное от 1 до 10  2.228105508023873
 
// 11:27 мин

//-------------------------
//-------------------------
// Тип String

// let str = "привет";
// let str2 = 'Одинарные кавычки тоже можно';
// let phrase = `так можно вставлять ${str}`;  // вывернутые кавычки использ-ть когда надо вставить какое-то значение
// console.log(str + str2 + phrase);   //приветОдинарные кавычки тоже можнотак можно вставлять привет

//!!!!!!!????
//script.js:132 Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
//script.js:133 Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
//script.js:134 Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
//после добавления  console.log  перестало ругаться в firefox

// let name= "Оля";
// let hello = `Привет, ${name}`;
// console.log(hello);  //Привет, Оля

// const message = "JavaScript " + "is" + " awesome";
//  console.log(message);  //JavaScript is awesome


//--------------------------------
//--------------------------------
// Конкатенация
// let result;

// result = 5 + "5";
// console.log(result);        //55
// console.log(typeof result);  //string

// result = 5 + "5"+5;
// console.log(result);        //555
// console.log(typeof result); //string

// result = 5 +5+ "5";
// console.log(result);        //105
// console.log(typeof result); //string

// ПОэтому - при приеме данных от клиента проверять тип переменной.


//-------------------
// Методы строк

// const js = "JAvaScript";
// // length
// // toLowerCase()
// // toUpperCase()
// // indexOf()  - поиск символа в строке и найти его номер index
// // includes()

// const message = "Welcome to Bahamas!";
// console.log(message.length);    //19

// //без объявления переменной посчитать ее длину:
// console.log('There is nothing impossible to him who will try'.length);    //47

// console.log(message.toLowerCase()); //welcome to bahamas!
// console.log(message.toUpperCase()); //WELCOME TO BAHAMAS!
// //надо для валидации паролей

// //При этом исходная сттрока не изменится
// console.log(message); //Welcome to Bahamas!


// console.log(message.indexOf("t")); //8  но с нуля
// console.log(message.indexOf("hello")); //-1  нет в строке-источнике message искомой строки
// //счет начинается с 0 - у буквы W - Index =0,    а полученная 8 - она 9-я ( если с 1 как привыкли считать)


// //все методы строк чувствительны к регистру
// console.log(message.includes("welcome"));       //false
// console.log(message.includes("Welcome"));       //true

// 17:08мин

// //-----------------------
// //BigInt

// const num = 9007190499994254740991n;
// console.log(typeof (num));      //bigint


// 18 мин.
//--------------------------------------------------
// итого - 8 типов данных
// 7 из них примитивные, т.к.содержат что - то одно - символы, цифры...
// Boolean
// String
// Number
// Symbol
// undefined
// null
// BigInt

// // 18:16мин
// //--------------------------------------------------
// // Объекты создаются с пом фигурных скобок {} , послеп скобок - точка с запятой
// //содержит ключ (string) и значение ()
// let obj = {
//     city: "Kyiv",
//     age: 1200
// };


// let user = {
//     "name": "Іван",
//     age: 30,
//     work: true,
// };


// console.log(obj);       //Object { city: "Kyiv", age: 1200 }
// console.log(user);      //Object { name: "Іван", age: 30, work: true }

// //получить значения свойств объекта
// console.log(user.name);     //Іван
// console.log(user.age);     //30



//-----------------
// // методы
//-----------------
// // - способ взаисмодействия с объектами

//-----------------------
// // 1.delete user.age;
//-----------------------
// let user = {
//     "name": "Іван",
//     age: 30,
//     "likes birds": true,        //имя свойства из нескольких слов надо бравть в кавычки
// };


// console.log(user);      //Object { name: "Іван", age: 30, "likes birds": true }
// delete user.age;
// console.log(user);     //Object { name: "Іван", "likes birds": true }
// console.log(user.age);  //undefined


// //"likes birds": true,        //имя свойства из нескольких слов надо бравть в кавычки
// // вызвать его юез кавычек не получится.

// // // так будет ошибка:
// // user.likes birds = true;

// // вызывать (свойство с ключем  из нескольких слов через пробел) -  через квалдратные скобки , и в кавычках ключ

// console.log(user["likes birds"]);  //true
// // console.log(user[likes birds]);  // ругается

//-----------------------
// 2. добавить - создать пустой элемент user
//-----------------------
// присвоение значения свойству

// //создать пустой user (НЕ добавить с существующей структурой insert, а создать пустой без структуры. Ругался , когда раскоментарен вверху let user c свойствами )
// let user = {};
// // присвоение значения свойству
// user.name = "Niko";
// console.log(user);          //Object { name: "Niko" }
// user.age = 45;
// console.log(user);          //Object { name: "Niko", age: 45 }


//~21 мин
//-----------------------
//3.цикл for...in
//-----------------------
// объекты можно перебрать циклом
//для перебора всех свойств объекта

// // синтаксис:
// for (key in object) {
// ...
// }

// // пример. Вывести все свойства user

// let user = {
//     "name": "Іван",
//     age: 30,
//     isAdmin: true,
// };

// for (let key in user) {
//     //ключи
//     console.log(key);       //name  age  isAdmin
//     //значение ключей
//     console.log(user[key]); ..//Іван 30 true

// }
//     //вывод в консоли по шакагам цикла
//         // name script.js:324:13
//         // Іван script.js:326:13
//         // age script.js:324:13
//         // 30 script.js:326:13
//         // isAdmin script.js:324:13
//         // true


// //~23 мин
// //-----------------------
// //4.упорядочивание свойств объекта
// //-----------------------
 
// let codes = {
//     49: "Герамния",
//     41: "Швейцария",
//     44: "Великобритания",
//       47: 25,
//     1: "США",
// };

// // перебираемм код циклом
// for (let code in codes) {
//     // console.log(code);
//     console.log(code + ` `+codes[code]);
// }

// // вывод в порядке: 1  41 44 49
// // 1 США
// // 41 Швейцария
// // 44 Великобритания
// // 47 25
// // 49 Герамния


// for (let code in codes) {
//    // console.log(code);
//     console.log(codes[code]);
// }


// вывод - в кажд строке  1  41 44 49

// задавали не в таком порядке. Но упорядочилось по номерам
//------------------
// ПОТОМУ ЧТО  - все числовые свойства упорядочиваются!!!!
//------------------

// если перебиравть циклом строки - они будут в порядке, как заданы

//----??
//1. Я: это типа справочник был codes? это не структура одной записи, а перечень записей  с id. Двуменрный массив

// 2.Я : И как вывести здесь чисто названия?
// for (let code in codes) {
//    // console.log(code);
//     console.log(codes[code]);
// }
//вывод в порядке кодов идет. цикл же по ним, по codeю а они - числа, упорялочиваются


//----??



//23:53 мин
//числовые свойства

// //добавить свойство в объект (поле в структуру таблицы)

let user = {
    "name": "Іван",
    surname: "Swith"
};
console.log(user);      //Object { name: "Іван", surname: "Swith" }
user.age = 25;      //добавляем еще одно свойство
console.log(user);      //Object { name: "Іван", surname: "Swith", age: 25 }




//не целочисленные свойства циклом выводятся -  в порядке, как были заданы, не отсортированные
for (let prop in user) {
    console.log(prop);
    // console.log(codes[code]);
}

//вывод свойств - ключей!!!!   а не значений. это как заданы свойства зависит .
//1. code - страны : ключи - свойства заданы числами(справочник, массив)
//2. user          : ключи - свойства заданы  символьными - буквами, как навазния  полей

//вывод в консоли - в отдельнх строках кажды. цикл -   name surname age


// //------??
// //Я:  а как добавить новую запись, а не свойство-поле в обЪект?
// //  let user = {};  нет - ругfется, если уже выше обявлен let user
// // // присвоение значения свойству
//  user.name = "Niko";
//  console.log(user);          //Object { name: "Niko" }
//  user.age = 45;
//  console.log(user);          //Object { name: "Niko", age: 45 }
// //------??// //  let user = {};  нет - ругfется, если уже выше обявлен let user
// // // присвоение значения свойству
//  user.name = "Niko";
//  console.log(user);          //Object { name: "Niko" }
//  user.age = 45;
//  console.log(user);          //Object { name: "Niko", age: 45 }
// //------??



//24:40мин
//--------------------
//есть много других типов объектов
//array - для

//дописать
