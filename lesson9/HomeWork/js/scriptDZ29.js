// Домашнє завдання
// 9 mod29 события

// Домашнє завдання
// -----1-----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.
// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.
// -----3----
//     Створіть дерево, яке показує / приховує дочірні вузли при кліці

// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// Вибираємо елемент з атрибутом data-widget-name
const btn = document.querySelector("#btn");
// const elemDel = document.querySelector(`<div id="text">`);
// const elemDel = document.querySelector("#text");
let elemDel = document.getElementById("text");

btn.addEventListener("click", handleClick);

function handleClick() {
  elemDel.remove();
}

// см. mod28  lesson8  удаление элементов

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.
btn.addEventListener("click", handleClickDelMe);
function handleClickDelMe() {
  btn.remove();
}

// -----3----
//     Створіть дерево, яке показує / приховує дочірні вузли при кліці
