// //----------------------------
// //----------------------------
// // js mod29
// // -  события
// //----------------------------
// //----------------------------

// // ======================
// // события
// // в html пишем 5 кнопок c id------
// //
// // <div class="buttonBlock">
// //   <button class="buttonItem" id="btn1">1</button>
// //   <button class="buttonItem" id="btn2">2</button>
// //   <button class="buttonItem" id="btn3">3</button>
// //   <button class="buttonItem" id="btn4">4</button>
// //   <button class="buttonItem" id="btn5">5</button>
// // </div>
// //
// //css добавить каталоu и файл style.css------
// //
// // .buttonBlock {
// //   display: flex;
// //   flex-direction: column;
// // }
// //
// // .buttonItem {
// //   margin: 30px;
// //   width: 88px;
// //   height: 80px;
// // }
// //
// // добаивть связь в html - head  c css------
// // <link rel="stylesheet" href="./css/style.css" />
// //
// //добраться до кнопки программно (постукаемось)
// //# - по id

// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const btn3 = document.querySelector("#btn3");
// const btn4 = document.querySelector("#btn4");
// const btn5 = document.querySelector("#btn5");

// // ======================
// // события мыши
// // ======================
// //слухачi:
// // ======================
// // Что такое Event listener?
// //   Слушатель событий – это функция в JavaScript,
// // которая ожидает событие и отвечает на него.
// //
// //click - click по1-й кнопке - в консоль пишется "click"
// btn1.addEventListener("click", () => console.log("click"));
// // чтобы 2й аргумент console.log не сработал на click-e - нужна стрелочная ф-ция

// //contextmenu - click на элемент правой кнопкой мыши . по2-й кнопке
// btn2.addEventListener("contextmenu", () => console.log("contextmenu"));
// //mouseover - мышь наводится на элемент
// btn3.addEventListener("mouseover", () => console.log("mouseover"));
// //mouseout - мышь ушла с элемента
// btn3.addEventListener("mouseout", () => console.log("mouseout"));

// //mousedown/mouseup - мышь нажали/ отжали  на элементе (над элементом)
// btn4.addEventListener("mousedown", () => console.log("mousedown"));
// btn4.addEventListener("mouseup", () => console.log("mouseup"));
// //mousemove - движение мыши над элементом. Сколько двигаем, столь отраатывает
// btn5.addEventListener("mousemove", () => console.log("mousemove"));

// // 05:54 мин
// // в html доавбить 1 кнопку c id------
// //
// // <button class="buttonItem" id="btn6">6</button>
// // ======================
// // события клавиатуры
// // ======================
// const btn6 = document.querySelector("#btn6");
// // keyup / keydown  - только на кавиши клавиатуры(на мышь не реагирует)
// btn6.addEventListener("keyup", () => console.log("keyup"));
// btn6.addEventListener("keydown", () => console.log("keydown"));

// // ======================
// // удалять события
// // ======================
// // в html убираем пред  5 кнопок c id------
// // в html добавляем 3 кнопки c id------
// // <button class="buttonItem" id="add">Add</button>   -- добавляет слухача на кнопку "#click"
// // <button class="buttonItem" id="remove">remove</button>  -- удаляет слухача
// // <button class="buttonItem" id="click">click me</button>  --click
// const addBtn = document.querySelector("#add");
// const removeBtn = document.querySelector("#remove");
// const clickBtn = document.querySelector("#click");

// // днлаем ф-цию, которая должна отрисовываться
// const handleClick = () => {
//   console.log("Hello");
// };

// //слухачи
// //1й аргумент - на что (какое событие) реакция
// //2м аргументом передаем стрелочную ф-цию, (на кн. clickBtn навесить )
// addBtn.addEventListener("click", () => {
//   // на кн. clickBtn навесить слухача  addEventListener на click
//   // 2м аргументом - передаем ф-цию  handleClick
//   clickBtn.addEventListener("click", handleClick);
// });
// // нажать кн Add - активували
// //нажать кн clickMe  (clickBtn)- написало Hello

// // 10:20 мин
// // Зачем removeEventListener?
// // Метод removeEventListener позволяет удалить
// // назначенный ранее через addEventListener обработчик события.
// // Для этого в параметрах нужно передать тип события
// // и ту же!!! функцию, которые передавались при назначении события.
// removeBtn.addEventListener("click", () => {
//   clickBtn.removeEventListener("click", handleClick);
// });

// //проверка
// ///кн Add, потом кн ClickMe - пишет Hello. ok
// //обновить браузер
// //клик просто по кнопке ClickMe - не пишет hello. ok
// //1.Добавляем слухача - снова  кн Add, потом кн ClickMe - пишет Hello. ok.
// // Добавили слухача кнопкой addBtn на событие сlick на кнопке clickMe
// //Слухач есть, добавлен.
// //2.Убрать слухача - жмем кн Remove (removeBtn) - смысл:удалить слухача на событие сlick на кнопке clickMe
// //проверяем - жмем на кн ClickMe - Hello не пишется. Т.е. слухача нет на кнопке ClickMe на событие click. Убрали кнопкой Remove
// // ok - добавили и убрали слухач на событие клик по кнопке clickme

// // 11:26 мин
// // ======================
// // получать информацию об элементе, на который кликаем
// // ======================
// // в html убираем пред  3 кнопки c id------
// //
// // в html доавбить 1 кнопку c id------
// //
// //<button class="buttonItem" id="click9">click me</button>
// //слухач
// const clickBtn9 = document.querySelector("#click9");
// // создаем ф-цию, отражающую инфо про элемент кликнутый
// const infoclick = (event) => {
//   console.log("event", event); //все данные про элемент
//   console.log("event", event.type); //event click - отслеживаемое событие
//   console.log("event", event.target); //event   <button id="click9" class="buttonItem">
//   // - элемент, на котором произошло событие
//   //это если querySelectorAll, много элементов отслеживается - будет выдан конкретный, на котором клик
//   //Здесь сейчас -querySelector, один элемент, пожтому ничего не выдается. я- ? target выдается
// };
// // слухач
// clickBtn9.addEventListener("click", infoclick);
// //при нажатии получим много информации
// // event
// // click { target: button#click9.buttonItem, buttons: 0, clientX: 85, clientY: 818, layerX: 85, layerY: 1413 }

// //развернуть треуголинчек перед click в консоли вывода - море данных
// //  если в ф-ции было "console.log("event", event);"
// // Можно получить прямо элемент, в консоли его увидеть (исходник элемента из html)
// //
// // Информации о эелементе много = в help, inet
// //pdf:
// // всі доступні події https://developer.mozilla.org/en-US/docs/Web/Events
// // объект события с кучей свойств (event) создается. https://uk.javascript.info/introduction-browser-events
// // Об’єкт-обробник: handleEvent

// // 13:13 мин
// // ======================
// // обработка форм
// // ======================
// //
// //доб в html
// // <h2>js mod29 События</h2>
// // <form class="form">
// //   <input class="input" type="text" placeholder="login" />
// //   <input class="input" type="password" placeholder="password" />
// //   <button class="bthSub">Регистрация</button>
// // </form>
// //
// //доб в css
// // .form {
// //   margin: 0 auto;
// //   text-align: center;
// //   padding: 32px;
// // }

// // .input {
// //   margin: 10px;
// // }
// //
// //специфичное  (на form, а не на document)  навешивание слухачив:
// //это поиск объектов - элементов формы, страницы
// const form = document.querySelector(".form"); //с точкой - по классу
// // слухач на input - вешать не на document, а на form
// //ищем элемент    input, в котором есть type=text
// const loginInput = form.querySelector("input[type='text']"); //с точкой - по классу
// //на password
// const passInput = form.querySelector("input[type='password']"); //с точкой - по классу

// // добавляем addEventListener не на кнопку, а на форму
// //т.к. кнопка - в форме, и она(форма и будет слушать
// //внимание - рслушать событие не "click" , а "submit"
// form.addEventListener("submit", handleSubmit);

// //получает event
// function handleSubmit(event) {
//   event.preventDefault(); //ЧТобы не перегружалась страинца, надо остановить это событие
//   //на login
//   // const login = loginInput;
//   // console.log(login);      //это все свойства по объекту
//   // console.log(event);
//   const login = loginInput.value;
//   const password = passInput.value;
//   console.log(`Логин: ${login} , Пароль:  ${password}`); //значение введенное в input
//   form.reset(); //останавливали дефотную перезагрузку - теперь ее сделать таки
// }

// //в браузере - вводим в Login значение и жмем кнопку
// // в консоли - на секунду мелькнуло и улетело
// //т.к есть дефолтные события браузера
// //При нажатии на ссылку - автоматом на нее переходим.
// // Также с формой - как только отправляем форму (кнопкой submit),
// // 1. форма отправляется
// // 2. страница перезагружается
// // ЧТобы не перегружалась страинца, надо остановить это событие с пом.  event.preventDefault();
// // 9_form.png

// //ввели в форме логин пароль в инпуты - отразилось "Логин: yguyguhk.l , Пароль:  gjgdjh"

// // можно добавлять обработчики
// //После остановки перезагрухки старницы (  event.preventDefault();)
// // - после того, как все сделали, надо сделать таки перезагрузку  формы
// // form.reset();
// //после этого reset  очищаются input
// //состояние вывода после добавления reset() - в консоли выведены введенные данные в input,
// // а в браузере - очистились input-s

// 21:31 мин
// ======================
// поширення подiй
// ======================
// 9_propagationСхема.png
//
// смотрим, как проплывает событие на 3 div-ах
//доб в html
// <div class="parent" id="parent">
//   parent
//   <div class="child" id="child">
//     child
//     <div class="item" id="item">
//       item
//     </div>
//   </div>
// </div>;
//
// CSS
// .parent,
// .child,
// .item {
//   margin: 30px;
//   padding: 10px;
//   outline: 1px solid #ffc107;
// }

// 'элементы для слухачей
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const item = document.querySelector("#item");
// // слухачи
// parent.addEventListener("click", () => console.log("Click parent"));
// child.addEventListener("click", () => console.log("Click child"));
// item.addEventListener("click", () => console.log("Click item"));

// нажали на item в браузере - в консоли все 3 click вывелись:
// Click item
// Click child
// Click parent
// поднялось от Item вверз по собтиям родителям

// -------------- (закомент 3 слухача)
//меняем на 1 обработчик
const handleClick = (event) => {
  console.log("event:", event.target);
};

//вешаем этот обработчик handleClick9 только на parent
parent.addEventListener("click", handleClick);

// жмем на item - выводится в консоль item
//а у меня - нет.
