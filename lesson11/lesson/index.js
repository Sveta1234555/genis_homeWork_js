// // Index.js – импортироват переменную из module.js
// import { name } from "./module";
// import "./style.css";
// console.log(" Your name:  " + name);

// //после установки библиотеки -  использование (копия с сайта , страницы библиотеки https://www.npmjs.com/package/validator)
// //заимпортили validator (var validator)  из библиотеки ("validator") ( = require("validator");)
// var validator = require("validator");

// //1. используем метод Validator-a  .isEmail
// // validator.isEmail("foo@bar.com"); //=> true
// console.log(validator.isEmail("foo@bar.com")); //=> true

// // 2.можно испортировать конкрутную ф-цию (командой с сайта)
// // Or, import only a subset of the library:
// import isEmail from "validator/lib/isEmail";
// //внимание - уже без слова validator.  сразу isEmail используем
// console.log(isEmail("foo@bar.com")); //=> true

// //isURL
// import isURL from "validator/lib/isURL";
// console.log(isURL("sdfdfgdfg")); //false
// console.log(isURL("https://www.npmjs.com/package/validator")); //true

// //toDate(input);
// // convert the input string to a date, or null if the input is not a date.
// // сделает из string date, если это дата. И null - если не дата
// import toDate from "validator/lib/toDate";
// console.log(toDate("sdfdfgdfg")); //null
// console.log(toDate("12.12.2000")); //  в разных форматах дата, словами, с временем....

var moment = require("moment");
console.log(moment().format("MMMM Do YYYY, h:mm:ss a")); // February 14th 2025, 10:08:46 am)
console.log(moment().format("MMM Do YY")); // Feb 14th 25

// //JSON -формат
// //надо делать в файле .JSON
// {
//     "name": "ffff" ,         //значение символьное в кавыччках
//     "name1": 55   ,          //значение цифровое
//     "name2": [] ,            //значение массив
//     "name3": { },            //значение объект
//     "name3": null,            //null
// }

localStorage.removeItem("token"); //когда разлогинился пользоатель – можно удлаить его токен
localStorage.clean(); //полнстью очистить LocalStorage:
