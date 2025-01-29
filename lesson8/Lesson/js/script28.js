//----------------------------
//----------------------------
// js mod28
// -  DOM
//----------------------------
//----------------------------

// document object model -dom
// Brauser object Model - bom

// html-тэг   - это объект
//каждый тээг - узел, от него  м.б. продложение
//т.е. каждый узел дерева - является объекатом

// единственный тэг , который не явл-ся узлом - TEXT
// текст - листочки дерева
// Head, body - корни дерева

// --------------------
// document.body  в head не отследим.т.к.
// null  - здесь Body еще нет, страница верстается сверху вниз, Body ниже
// <head>
// console.log(document.body); //null
// </head >

// ------------------
// дочерние элементы и наследники
// 05:18мин

// // ul - li - a
// li - дитина ul (ближний непосредственно рядом)
// a - дитина li (ближний непосредственно рядом)
// a - наследник ul(через один), внуки правнуки - нащадки, а не дети
// 8_детиНаследники.png

// навигация между узлами-----------
//можно перебиать детей
// в html:
//
//   <script>
//       for (let i = 0; i < document.body.childNodes.length; i++) {
//         console.log(document.body.childNodes[i]);
//       }
// </script>
//
// вывод в косоль:
// #text "\n    "
// <h2>
// #text "\n\n    "
// <div>
// #text "\n\n    "
// <ul>
// #text "\n\n    "
// <div>
// #text "\n\n    "
// <script>

// т.о.можно что - то находить по дереву
// есть childNodes - это псевдомассив. ---
// Он сохраняет в себе все дочерние элементы, включая Text
// есть parentNodes - выберет родителя элемента-----
// children - псевдомассив, который содержит дочерние элементы---
//firstClild - выберет первый дочерний элемент
//lastClild - выберет последний дочерний элемент
// в Pdf есть

// 07:26  мин
// =================================
//как обратиться (достукатись) к элементу
//------------по  id--------------
// в html  - div
//
// <div id="elem">
//   <div id="elem-content">ПРимер элемента</div>
// </div>;
//
// в js - создаем переменную, в которую положим элемент
//можно через querySelector
// let elem=document.querySelector;
//............через getElementById
let elem = document.getElementById("elem");
// ненадо диез # перед названием в кавычках делать, оно и так знает, что это id
//проверяем:
elem.style.background = "green";
//результат - в браузере строка с текстом "ПРимер элемента" (весь div) стала зеленой

// важные правила про id
// 1. уникальный и 1
// 2. метод getElementById можно использовать только с document,
// 3. не использовать как id глобальны переменные

// 10:04 мин
//............через querySelector
// .. (есть еще querySelectorAll это позже)
//
//сейчас с querySelector про lastchild будет
// в HTML доб-ть Li неск.  2ul gj 2li
// querySelectorall
//
//"ul>li:last-child" означает:
// достучимся до каждой UL, у которой есть Li
//и именно до last-child
let elements = document.querySelectorAll("ul>li:last-child");
//перебираем через for
for (element of elements) {
  console.log(element);
}
// у меня вывод не такой, как в уроке
// 8_last-child_my.png наведение на вывод в консоли li - в браузере подсвечивается этот элемент, который last-child
// 8_last-child.png  - в уроке в колнсоли пишется слово marker  и текст последнего элемента
// ...........это было через querySelector
// 12:00 мин

// .....................обычный selector

// разница между  querySelector  и  querySelectorAll
// запрос на поиск li
let element_ = document.querySelector("li");
console.log(element_);
//li у нас много. Но возвращает одну. первую
// и дальше не идет.
// если есть один такой элемент, то так искать можно.
// Если много таких элементов - так не ищем

// -------------------------
// 13:00 мин
// ...............метод обратиться к элементу  getElementBy*
// 8_getElementBy_.png
//показать-найти все div
let elementGet = document.getElementsByTagName("div");
console.log(elementGet);

// вывод в консоль (и подсвечивает в браузере, когда на него в консоли наводим):
// HTMLCollection { 0: div, 1: div, 2: div#elem, 3: div#elem-content, length: 4, … }
// 8_getElementsByTagName_div.png

// =================================
// свойства-----------
// 22:38 мин
// есть атрибуты. например:
//................... hiden
// в html  - div  с <p id="textHidden">
// //
//     <div><p id="textHidden">Текст для проверки</p></div>
let textHidden = document.getElementById("textHidden");
//задаем найденному по id элементу свойство скрыть (.hidden=true)
textHidden.hidden = true; //в браузере <p> спрятался
//=false - появился

//................... значение value
// 15:50 мин
// в html  - textarea доб-ть
//  <div>
//   <p id="textHidden">Текст для проверки</p>
//   <textarea id="message"> textares message</textarea>
// </div>

let message_ = document.getElementById("message");
console.log(message_.value); // textares message  - что написано в тексте на экране было в это м элементе textarea
// достучались до значения текста в элементе < textarea >
//     также можно достучаться до src внутри элемента
//     до active
//в pdf есть

//................... селекторы класса
// 17:24 мин
// в html  - <p class...> доб-ть
//
//   <p class="text=-message">Lorem ipsum...........</p>;
//
//внимание - в скобочках аргументом - через точку!
let text = document.querySelector(".text-message");
console.log(text); //<p class="text-message">
console.log(text.textContent); //Lorem ipsum...........

//...................программно поменять текст в элементе в браузере
//..............через св-во textContent
// 18:41 мин
// в html  - <p class...> доб-ть
//
// <p class="text-message_">Hello, Ann</p>;
//
let text2 = document.querySelector(".text-message_");
console.log(text2); //<p class="text-message_">
console.log(text2.textContent); //Hello, Ann

// можно поменять этот текст "Hello, Ann"  на "Hello, Olga"
text2.textContent = "Hello, Olga!"; //поменяли на сайте (в браузере, а не в консоли)
console.log(text2.textContent); //Hello, Olga!

//...................программно менять стили
// 19:38 мин
// в html  - <button> доб-ть
//
// <button class="button_">Open</button>;
//
let btn = document.querySelector(".button_");
btn.style.backgroundColor = "red"; //кнопка покраснела

// т.е. можем менять стили элементов в браузере прямо из js
// 20:55 мин
