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
// ........................взаимодействие с элементами класс-листа
// в html  - <p> доб-ть, 3 класса
//
// <p id="p_text" class="text red big">
//   Loren kljh kljbh lhkb hb ;hkb ;kb ;kb
// </p>;
//
// по id"
let text3 = document.querySelector("#p_text");
// посмотреть все  класс-листы
console.log(text3.classList);
// ВЫвод в консоль:
// DOMTokenList(3) [ "text", "red", "big" ]
// 0: "text"
// 1: "red"
// 2: "big"
// length: 3
// value: "text red big"
// <prototype>: DOMTokenListProt

// ===========================
// classList
// ===========================
// посмотреть один  класс-лист на наличие
console.log(text3.classList.contains("red")); //true
// удалить   класс
text3.classList.remove("red");
console.log(text3.classList); //DOMTokenList [ "text", "big" ]  . //2 осталось, было 3
console.log(text3.classList.contains("red")); //false нет уже
// добавить    класс
text3.classList.add("redadd");
console.log(text3.classList); //DOMTokenList(3) [ "text", "big", "redadd" ]
console.log(text3.classList.contains("redadd")); //true
// заменить    класс  и др. методов. много. pdf, inet

// 23:58 мин
// ==========================================
// работа с атрибутами
// ==========================================
// в html  - картинку доб-ть, 3 класса

//
/* <img
  class="image"
  src="./images/PhotoRoom.png"
  alt="Beauty Zone"
/> */
//

// ищем по классу imagt (. точка перед именем класса)
let image2 = document.querySelector(".image");
// используем метод:
//проверить наличие атрибута src
console.log(image2.hasAttribute("src")); //true
//получть значение атрибута src
console.log(image2.getAttribute("src")); //./images/PhotoRoom.png

// 25:16 мин
// Итого по атрибутам:.............
// has* проверяепт наличие атрибута
// get* - полчает значение атрибута
// можно добавить , удалить атрибут, получить коллекцию атрибутов...

// промежуточное итого:-----------------
// можем вазимдействовать со страницей,
//   можем менять стили, текст на странице, атрибуты, добавлять, удалять
//   Все тоже самое с классами

// 25:52 мин
// ====================================
//  Работм с Dom узлами
// ====================================

// мы можем управлять в javascript файлами html
// МОжно создавать файлы html.

// в html  - div доб-ть
//

/* <div class="container">
  <nav class="naw"></nav>
  <a href="#" class="btn">
    1
  </a>
  <a href="#" class="btn">
    2
  </a>
</div> */

//можно создать еще один элемент

const item = document.createElement("a"); //так еще не показывается, нудны детали
item.href = "#";
// класс добавляем:
item.classList.add("btn");
item.textContent = "3";
// добавить в структуру дочерним к nav
const nav = document.querySelector(".naw");
nav.appendChild(item);
//добавился прямо в тело html - в ф12 видно это элемент добавлнный

// 29:13 мин
// добавить заголовок
//создали элемент
const heading = document.createElement("h1");
heading.textContent = "Hello";
//добавить созданный элемент в структуру html, куда надо
//все в div c классом container в html - туда и добаляем заголовк добавленный
const container = document.querySelector(".conteiner");
container.insertBefore(heading, nav); //heading - что добавлять, nav - перед чем
//да, элемент h1 (heading)  добавился перед nav
// pdf есть примеры - как добавить первым последним , после и перед каким-то элементом
// 31:35 мин

//удлалять элементы
//есть 2 метода удлаения
// 1. старый - работае во всех браазерах-----
// черех parent
// parent наших цифр - nav (const nav уже объявлен выше)
// const item тоже объявлен выше. Это наша 3
// nav.removeChild(item); //<a> 3 из браузера исчезла

// 2 .новый. надо проверять поддерживатеся ли браузером----
item.remove(); //ненадо указывать родителя

// 32:17 мин
//клонировать элементы
// есть блок с текстом, надо его переиспользовать в др. месте
// в html  - div доб-ть
// //
//     <div class="parent4">
//       <p class="text4">Lorem ipsum...hsrsyjsyjs jsyj sy jsy jsyj ys........</p>
//     </div>;

//ищем элементы text  и parent_
const text4 = document.querySelector(".text4");
const parent4 = document.querySelector(".parent4");
// скопировать в переменную clone4 созданный объек-клон
const clone4 = text4.cloneNode(true);
// добавляем созданного клона clone4
parent4.appendChild(clone4);
//text 4 добавился в div parent4

// 34:53 мин
// ======================================================
// innerHTML
// ======================================================
//
// можно проще - черз inner в hml вставлять строчку кода
// в html  - div доб-ть
// //
//     <div class="conteiner5">
//       <p>Hello</p>
// </div>;
//
const container5 = document.querySelector(".conteiner5");
//есть ссылка container5
//создаем новый элемент
const text5 = "<p>Sorry</p>";
container5.innerHTML = text5; //замена предыд. <p> Hello, есть только Sorry
//причем замена всего, что было внутри container5, любые тэги, не только тип, который добавляется.
// Вобщем текст в исходнике внтриу родителя container5 заменятся на новый text5

container5.innerHTML += text5; //так добавится к предыд. <p> Hello, есть обе hello и ыщккн
//к тексту в исходнике внутри родителя container5 добавлется новый text5

// ВНиманиие! Метод innerHtml плохой тем, что он перерендерит всю страинцу
// а чем меньше рендеп, (т.е. перечитывает браузер)9, тем лучше

// 37:02 мин
// ======================================================
// insertAdjacentElement
// ======================================================
//не перрендерит всю стринцу , а вставляет в конкретном месте файла, котором скажем
//
// в html  - ul доб-ть
// //
// <ul id="list">
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>
//
const list6 = document.querySelector("#list"); //# - значит по id название ищем
list6.insertAdjacentHTML(
  "beforebegin",
  "<p>beforebegin - перед элементом List6 (ul)</p>"
);
list6.insertAdjacentHTML(
  "afterbegin",
  "<li>afterbegin - после 1й строки html-кода объекта в List6 (ul)</li>"
);
list6.insertAdjacentHTML(
  "beforeend",
  "<li>beforeend - перед последней строкой html-кода объекта List6 (ul)</li>"
);
list6.insertAdjacentHTML(
  "afterend",
  "<p>afterend - после последней  строки  элемента List6 (ul)</p>"
);
// аргументы 1 - куда, ключевые слова (подстказки выпадают);  2- код html,который доавляем

//Надо самим соображать - какой тип тэга надо писать корректно по структуре html
// - li внутри списка для afterbegin и beforeend,
// p внутри ul некорректно, но написало. Надо li внутри ul...
list6.insertAdjacentHTML("beforeend", "<p>beforeend </p>");
//не писали +=,  ставит добавляемое туда, куда пишем с пом. аргумента 1
// см. 8_insertAdjacentHTML.png

// есть 4  варианта где моэет находится новая строка по отношению к объекту
// этот метод insertAdjacentHTML больше экономит ресурсы "кода?"

// 40:33 мин
// ======================================================
// на экране - процесс как браузер рисует страницу
// нам важно оптимизировать работу с DOM
//  На видео видно - сколько манипуляций происходит, когда работаем с DOM-деревом
// ВАжно экономить ресурс, минимизировать кол-во обращений к DOM
// ДЛя этого надо знать что происходит:
// repaint - происходит , когда изменения в стилях элемента,
//      которые вляют на внешний вид элемента (opacity, bckrcolor, visibility...)
//       браузер отрисовывате элемент заново, учитывая новый стиль
// replow  - происходит , когда изменения касаются структуры документа и положения элементов
//    Идет пресет положения всех элементов.
//    это еще более тяжелая операция, чем repaint

// т.е. эти процессы надо минимизировать, чтобы сайь работал быстрее

// 41:43 мин
// ======================================================
// выводы -нет в видео. на этом все
