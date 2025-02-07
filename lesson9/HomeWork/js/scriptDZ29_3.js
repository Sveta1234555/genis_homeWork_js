// Домашнє завдання
// 9 mod29 события

// -----3----
//     Створіть дерево, яке показує / приховує дочірні вузли при кліці

function toggleNode(element) {
  element.parentNode.classList.toggle("open");
}

// // Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// // <div id="text"> зникав.

// // Вибираємо елемент з атрибутом data-widget-name
// const btn = document.querySelector("#btn");
// // const elemDel = document.querySelector(`<div id="text">`);
// // const elemDel = document.querySelector("#text");
// let elemDel = document.getElementById("text");

// btn.addEventListener("click", handleClick);

// function handleClick() {
//   elemDel.remove();
// }

// // см. mod28  lesson8  удаление элементов

// // -----2----
// // Напишіть такий код, щоб після натискання на кнопку, вона зникала.
// btn.addEventListener("click", handleClickDelMe);
// function handleClickDelMe() {
//   btn.remove();
// }
