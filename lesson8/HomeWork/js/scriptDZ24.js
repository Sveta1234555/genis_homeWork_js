
// // //Домашнє завдання 4 mod24.
// // // Функції


// Домашнє завдання
// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }
// console.log(checkAge(20));      //true
// console.log(checkAge(12));      //confirm


// ////  ----- ? ---
// // function checkAge_(age) {
// //     return age > 18 ? true : confirm('Батьки дозволили?');
// // }

//  console.log(checkAge_(2));      //confirm
//  console.log(checkAge_(20));     //true


// ////  ----- || ---
// function checkAge_(age) {
//     return age > 18 || confirm('Батьки дозволили?');
//   }
//  console.log(checkAge_(2));      //confirm
//  console.log(checkAge_(20));     //true




// // ---2---
// // Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b
// function min(a, b) {
//     return a < b ? a: b;
// }
// console.log(min(5,7));      //a  5
// console.log(min(37,27));    //b  27


// // ---3---
// // Перепишіть з використанням стрілкових функцій
// // Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );





const ask_ = (question, yes, no) => {
    if (confirm(question)) yes();
else no();
};
ask_(
"Ви згодні?",
() => alert("Ви погодились.") ,
() => alert("Ви скасували виконання.") 
);

