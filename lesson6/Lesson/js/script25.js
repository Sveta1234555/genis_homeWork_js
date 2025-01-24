//----------------------------
//----------------------------
// js mod25
// - Замикання
//----------------------------
//----------------------------
//По-простому - это одна функция, которая замыкает дугую функцию.

// Пример. Делаем функцию create Новой суммы.
// Функция получает некую сумму n
// и возвращать другую ф-ю
function createNewSum(n) {
  return function () {
    console.log(10 * n);
  };
}

//выдать эту функцию createNewSum()
createNewSum(5); //так ничего не происходит. т.к. так возвращается вся функция вообще

//надо сделать ф-ю и туда вернуть значеине ф-ции
const calc = createNewSum(7);
calc(); //ничего не передаем в вызов calc(), т.к. уже передали при назначении строкой выше 5
//рез - 50

// т.е ф - я createNewSum замкнула в себе ф - ю  "return function () {console.log(10 * n);};"
// Это и есть замыкание

//-----------------------------------------------------
// пример2
function createNewNumber(n) {
  return function (num) {
    return n + num;
  };
}

//вызываем ф-ю , передаем ей 5.
// т.е. 1 аргумент передали. Это n? 1-я внешняя?
const addFive = createNewNumber(5);

//вызываем addFive и передаем ему 2м аргументом 10
//10 - это num ?
console.log(addFive(10)); //15

//я - n из внешней ф-ции во внуттреннюю не передавали (не писали нигде внутри n), но он взялся

//--------------------------------------
//пример 3 на url
function createUrl(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = createUrl("com");
console.log(comUrl("google")); //https://google.com
console.log(comUrl("fb")); //https://fb.com

const comUa = createUrl("ua");
console.log(comUa("google")); //https://google.ua
console.log(comUa("fb")); //https://fb.ua

//Для таких ситуаций и используется (замыкание функций - 2 вложенных ф-ции)
//Сначала создается const из внешней ф-ции с передачей 1-ф внешней переменной-аргумента
//потом вызывается эта созданная константа comUa c 2-м внутренним аргументом

//----------------------------------------
//----------------------------------------
// this  (контекст)
function hello() {
  console.log("hello", this);
}
hello();
//получаем в консоли ф12 текст hello  и глобальный Window (все,что есть в тексте исходника js - функции объявленные, служебные ф-ции...,
// весь документ)
//hello
// Window http://127.0.0.1:5500/index25.html
//
// createNewNumber: function createNewNumber(n)
// createNewSum: function createNewSum(n)
// createUrl: function createUrl(domain)
// hello: function hello()
// <default properties>
//
// <prototype>: WindowPrototype { … }
// Screenshot_1hello2.png;

// есть user, это объект
const user = {
  name: "Ivan",
  city: "Odessa",
  sayHello: hello,
};

console.log(user.name, this); //из глобальной области вызов this - пишет window
user.sayHello(); //из user  вызов this - пишет user-a

//hello
//Object { name: "Ivan", city: "Odessa", sayHello: hello()
// city: "Odessa"
// ​name: "Ivan"
// ​sayHello: function hello()
//получаем не весь документ глобальное window,
// а только свой объект, строку бд  user

// итого, по этим 2м вызовам
// когда вызвали ф-цию hello (а в ней this)  в глобальном окне
//т.е.написали вызов просто "hello()"
// то в отладчике написало все window  в this(2я строка):
// hello
// Window http://127.0.0.1:5500/index25.html

// КОгда вызвали из user
// вызвали ф-цию hello (а в ней this)
// "user.sayHello()" - this  показало всего user - a:
//собственно - из чего вызывали ("user."), то this и показал
// hello
// Object { name: "Ivan", city: "Odessa", sayHello: hello() }
//
// см.рис.Screenshot_1hello.png;
// Screenshot_1hello2.png;
// Screenshot_1hello3.png;

//=================
// 8мин
// this - всегда динамичный. Он показывает контекст на том месте, где вызвана функция.
// в контексте какаого объекта вызвана this, этот объект и показывает

function abc() {
  console.log("в функции");
  console.log(this);
}
abc(); // так - это просто вызов из глобального контекста. вывод в экран консоль ф12: Window http://127.0.0.1:5500/index25.html

// пишем в index25.html строку <p>
//   <body>
//    <p>Hello!</p>

//добавляем "слушателя" (реакция на событие)
//вешаем слушателя на "p". метод onclick

document.querySelector("p").onclick = abc;
// Это еще метод, как можно  на querySelector навешивать на события функции(=abc)
// По клику на hello на странице - this вернул "p"
// Screenshot_5p.png;

// Все происходит именно в ФУНКЦИИ
// this возвращает именно контекст вызова

//кликаем на странце в браузере по параграфу "<p> Hello", то в консоли пишет:
// в функции script25.js:120:11
// <p>
// см.рис.Screenshot_2p.png;
// Screenshot_5p.png
// Screenshot_5p2.png

// 10:23мин
// для понять - для чего нужно this
//=================
// пишем в index25.html строку <div> . Берем в этот div тот p, который был
//   <body>
// <div>
//   <p>Hello!</p>
// </div>;

function changeColor2() {
  console.log(this); //ссылка на this
  //Теперь, имея контекст этого вызова (div), можно делать:
  //поменять цвет фонв
  this.style.background = "red";
  //this контекста вызова div
}

document.querySelector("div").onclick = changeColor2;

// Screenshot_3green2.png;
// querySelector вешаем на div
//и на onclick - ф-ция changeColor
// кликнули по Hello (Screenshot_3green.png;)
//на странце в браузере по div (повесили queryselector на div) "<div> <p> Hello", то в консоли пишет div:
//становится зеленым фоном этот div hello
//Screenshot_3green.png;

//=================
// 12:01мин
// пишем в index25.html 3 строки <div> . c разными именами
//   <body>
// <div><p>Ann</p></div>
// <div><p>Olga!</p></div>
// <div><p>Ivan</p></div>

// с помощью this можем менять фон кого-то одного (одной строки из 3х)

function changeColor() {
  console.log(this);
  this.style.background = "green";
}

// document.querySelector("div").onclick = changeColor;

document.querySelector("div").onclick = changeColor2; //красный

let user2 = document.querySelectorAll("div");
user2.forEach(function (element) {
  element.onclick = changeColor;
});

//мои исследования - оба рядом (querySelector и querySelectorAll) не имеет смысла писать
// всех ловит querySelectorAll. И первого тоже. Но все - зеленым
//Красным (changeColor2  на 1й querySelector) - 1й div hello  .только если нет 2й части с user2 и циклом с querySelectorAll
//если раскоментарены оба  (querySelector и querySelectorAll) - только зеленые. Даже первый клик по Hello

// querySelector  - на один div. Первый, который встретил
// querySelectorAll - на все div, какие есть, можно кликать
// выберет из всех div, которые есть

// по какому имени на странице кликаем - тот зеленеет
//Screenshot_4greenName.png;

// итого -
//  мы не знаем, ккаой элемент из 3х кликаем.Но с пом.this - автоматически определяется по какому кликнули.
// Не прописываем варианты сами - какой кликали, само определеяет с пом.
//Элемент (div) в контексте своего вызова this выполняет определенные функции

//=================
// Пример4. Со стрелкой (стрелочная функция)
//делаем стрелочную ф-ю . Просим ее показать this   (console.log(this);)
const showList = () => {
  console.log("6list", this);
};
//вызов стрелочной ф-ции
showList(); //window (this отражает) в консоли
//6list  Window http://127.0.0.1:5500/index25.html
// 6_СтрелочнаяФя_showList.png, 6_СтрелочнаяФя_showList_.png

const list = {
  names: ["Ann", "Olga", "Nata"],
  showList: showList,
};

list.showList();
// показывает не объект, а window. почему:
//------------
// потому что в стрелочной функции НЕТ this!!!!
//------------
// this будет нужен только в работе с обычными ф-циями, не с стрелочными!!!
// 6_СтрелочнаяФя_showList_.png

//======================
// 15:51
//======================
//7
//встроенные методы
//======================
// в javaScript  функция - это тоже объект. Певний объект
//Который имеет свои методы.
//если надо передать контекст this. не тот, который на месте вызова, а другой.
function hello7() {
  console.log("7методы", this);
}

const user7 = {
  name: "Ivan",
  age: 30,
  hello7: hello7,
  sayHelloWindow: hello7,
  sayHelloWindowB: hello7.bind(window),
  //user.name - гарантированно из user вызов
  infoUser: function () {
    console.log(`Name is (user.name) ${user.name}`);
  },
  //user.name - вызов из user, но с пом. this  в точке вызова
  infoThis: function () {
    console.log(`Name is (this.name) ${this.name}`);
    console.log(`Age is (this.age) ${this.age}`);
  },
  //передать переменную city в ф-цию и вывести ее
  infoThisCity: function (city) {
    console.log(`Name is (this.name) ${this.name}`);
    console.log(`Age is (this.age) ${this.age}`);
    console.log(`City is (city) ${city}`); //внимание! Здесь без this. т.к. передали сюда как аргумент
  },
};
user7.hello7();
//выдается объект user7
//а нам надо window, а не объект
//см. 7методы.png

//дописываем в  user7 строку  "sayHelloWindow: hello7"
// с тойже функцией  hello7.
// Но надо привязать к ней (к функции hello7 )  другой контекст.
// сейчас вызвать ф - ю sayHelloWindow - она показывает объект user7, а не window (как надо бы)
user7.sayHelloWindow();

// см. 7методы_2.png, 7методы_2_.png

// Есть метод bind.
//он привяжет нужный контекст
//   Дописываем
// sayHelloWindowB: hello7.bind(window),
user7.sayHelloWindowB(); //выдан контекст window. задан в функции .bind(window)
//ок. это и надо

//-----------------
//как это использовать
// 18:13 мин

// ДОбавляем ф - ю info в const user7   (2 ф-ции infoUser и infoThis)

//user.name - гарантированно из user вызов
// infoUser: function () {
//   console.log(`Name is (user.name) ${user.name}`);
// },
// //user.name - вызов из user, но с пом. this  в точке вызова
// infoThis: function () {
//   console.log(`Name is (this.name) ${this.name}`);
//   console.log(`Age is (this.age) ${this.age}`);
// },

user7.infoUser();
user7.infoThis();

// this  (user7.infoThis();) дал тоже user. По месту вызова. ЧТо и хотели
// 7методы_4.png
// Здесь this норм отработал

// теперь - есть еще один user Ann
//но здесь нет ф-ции info

const Ann = { name: "Anna", age: 23 };
// можно испозовать info для вызова здесь , где нет ф-ции info . как:
// Обращаемся к user, где метод info есть
user7.infoThis(); //выдаст Объект user7, ivan. А надо Ann
// как - прикрепляем методом bind тот контекст, который надо
user7.infoThis.bind(Ann); //так, ничего не выдалось!!!
//ничего не выдалось!!! потому что метод bind  НЕ вызывает функцию, а _создает_ новую ф-цию, к которой привязал другой контекст (Ann)!!!
// т.е. сейчас ф-ция только создана.
// Теперь ее надо вызвать - добавить две скобочки, типа для параметров "()"":
user7.infoThis.bind(Ann)(); //так выдалась Ann.
// т.е. функцией function из метода(поля) infoThis объекта user(Ivan) выданы данные другого объекта(Ann)
//см.  7методы_4BindAnn.png

// Итого
// т.е.с пом.метода bind можно использовать this как нам надо.
//   Привязав другую точку вызова this (как здесь Ann)

// 20:34 мин

// если добавить еще объект Nata
const Nata = { name: "Natalia", age: 50 };
user7.infoThis.bind(Nata)(); //так выдалась Nata.
//обращаемся к user7, его методу infoThis,
//  перенаправляем bind ему другой контекст Nata
// и вызываем его ()
// Все - получили данные Nata . Методом из user7
// см. 7методы_4BindAnnNata.png
// 21:21 мин

// еще можем сделать:
//Можно в функцию function  получить переменную city
// и выдать еще ее

// const user7 = {
//   ...
//   //передать переменную city  в ф-цию и вывести ее
//   infoThisCity: function (city) {
//     console.log(`Name is (this.name) ${this.name}`);
//     console.log(`Age is (this.age) ${this.age}`);
//     console.log(`City is (city) ${city}`); //внимание! Здесь без this. т.к. передали сюда как аргумент
//   },
// };

user7.infoThisCity.bind(Ann)();
user7.infoThisCity.bind(Nata)();
// Выдает и city . Но его нет "Сity is (city) undefined"
// 7методы_5Bind_City.png
//(Внимание - у меня здесь др. ф-я infoThisCity; В уроке - одна ф-я info все время)

// недостающий city можно добавт прямо в вызове функции  infoThisCity
user7.infoThisCity.bind(Ann)("Kyiv");
//или вызвать через запятую 2м аргументом
user7.infoThisCity.bind(Nata, "Odessa")();
// см.7методы_5Bind_City2.png
// 22:07 мин

// для чего это надо.
//   Например, объявили пременную
const nataInfo = user7.infoThisCity.bind(Nata, "tt");
// вызываем, ничего не передавая.
nataInfo();
// Выдача:
// Name is (this.name) Natalia script25.js:279:13
// Age is (this.age) 50 script25.js:280:13
// City is (city) tt script25.js:281:13
//22:43 Мин

//==================== call
// есть еще метод call
// call и bind (сравнение)

//----------------- console.group - можно в консоли ф12 свернуть
const userInfo = {
  name: "name",
  age: 98,
  logInfo: function (job) {
    console.group(`${name} info:`);
    console.log(`Name is : ${this.name}`);
    console.log(`Age is : ${this.age}`);
    console.log(`Job is : ${job}`);
    console.groupEnd();
  },
};

const Vano = {
  name: "Ivan",
  age: 45,
};

userInfo.logInfo();
//8методы_call1_console_group.png
//8методы_call1_console_group_.png

//добавляем const Vano (выше)
// вызов call
userInfo.logInfo.call(Vano, "developer");
//мы не вызывали функцию (как в примере с bind - ф-ю infoThisCity?)
// Просто call (без скобочек вызова дополнительных, как в bind).
// bind - создает новую переменную с этими приклеинными приbind-ными новыми контекстами
// call - сразу и вызывает ф-ю
//Вот разница между call и bind - call сразу вызывает,
// ненадо еще 2 скобочки писать для вызова (?)
userInfo.logInfo.call(Vano, "developer");
user7.infoThisCity.bind(Nata, "Odessa")(); //вызов из примера 7 bind (объявления выше)
//я  - в обоих случаях передавали доп аргумент внутрь для вывода (developer, Odessa)
//8методы_call3_разница_call_bind.png

//==================== apply
// есть еще метод apply
// call и bind (сравнение)
// 26:32 мин
//Делаем для начала для такой же по типу задаче.
//передаем 2 параметра (job, city)

const showUserInfo9 = {
  name: name,
  age: 87,
  logInfo: function (job, city) {
    console.group(`${name} info:`);
    console.log(`Name is : ${this.name}`);
    console.log(`Age is : ${this.age}`);
    console.log(`Job is : ${job}`);
    console.log(`City is : ${city}`);
    console.groupEnd();
  },
};

const Vano9 = {
  name: "Ivan9",
  age: 45,
};

showUserInfo9.logInfo.call(Vano9, "developer", "Lviv");
// 9методы_Apply_call-сначала.png

//apply - можно передавать только 2 аргумента:
//1. что привязываем(Vano9)
//2. дополнительные аргументы передавать массивом, ( а не через запятую все подряд, как в call)
showUserInfo9.logInfo.apply(Vano9, ["developer", "Lviv"]);

// т.е. в call можно передавать произвольное кол-во аргументов через запятую
// в метод apply - аргументы надо передавать в массиве . в той последовательности , в которой они должны отрабатывать
// 9методы_Apply_сам-аргументыМассивом.png

// 28: 49 мин
////////////////////////////////////////
////////////////////////////////////////
//практические задачи
//задача 1:
//приветствовать человека в отеле  и указывать кол-во звезд в отеле

// шаблонная строка:
const message = function (name, stars) {
  console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
};

// объекты с разными отелями:
const Bukovel = { hotel: "Bukovel" };
const Turist = { hotel: "Turist" };

// вызов: с методом call---------
message.call(Bukovel, "Ivan", "5"); //Ivan, Welcome to Bukovel, stars 5
//см.  пр1_1.png;
message.call(Turist, "Ivan", "3"); //Ivan, Welcome to Turist, stars 3
//см.  пр1_2.png;

// вызов: с методом apply-----------
message.apply(Bukovel, ["Ivan", "5"]); //Ivan, Welcome to Bukovel, stars 5
message.apply(Turist, ["Ivan", "3"]); //Ivan, Welcome to Bukovel, stars 5

// вызов: с методом bind-----------()!!!
message.bind(Bukovel, "Ivanbind1", "5"); //это не вызвано, а сформировано (без скобочек в конце)  //пусто, нет вывода в консоль
message.bind(Bukovel, "Ivanbind2", "5")(); //со скобочками - вызвано. //Ivanbind2, Welcome to Bukovel, stars 5
message.bind(Turist, "Ivanbind2", "3")(); //со скобочками - вызвано. //Ivanbind2, Welcome to Turist, stars 3
// message.bind(Turist, ["Ivan", "3"]); //Ivan, Welcome to Bukovel, stars 5
// не сработает , пока не вызовем скобочками
//см. пр1_3_call_apply_bind.png;

// 32:45 мин
////////////////////////////////////////
////////////////////////////////////////
//практические задачи
//задача 2:
//Задча с привязкой к интерфейсу
//Сделаем неск. кнопок, по нажатию на которые будет...

// //index.html
//     <div><button id="wom">Жiночий одяг</button></div>
//     <div><button id="man">Чоловiчий одяг</button></div>
//     <div><button id="kid">Дитячий одяг</button></div>

const cart = {
  showItems() {
    console.log("В корзинi: ", this.items);
  },
};

const woman = {
  items: ["Сукня, туфлi"],
};
const man = {
  items: ["Костюм, рубашка"],
};
const child = {
  items: ["Майка, шорти"],
};

cart.showItems.bind(man)(); //В корзинi:  Array [ "Костюм, рубашка" ]
// 36:01 мин
// такой вызов отработал.  (см. пр2_1.png)
// Теперь на кнопках
//присоединяем вызов на кнопки , по id ('#wom')
document
  .querySelector("#wom")
  .addEventListener("click", cart.showItems.bind(woman));
//срабатываеть на клик addEventListener('click')
//брать ф-ю cart.showItems.bind(woman)()  и передавать woman
//Внимание! - здесь bind без скобочек вызова еще двух!!!
// т.е. не вызываем ф-ю, т.к. она вызовется на click-e

//еще 2 кнопки доб-ть
document
  .querySelector("#man")
  .addEventListener("click", cart.showItems.bind(man));
document
  .querySelector("#kid")
  .addEventListener("click", cart.showItems.bind(child));

//по нажатию на кнопки - пишет в консоли объект соотсветствующий
// пр2_3кнопки_bind.png

// также можно через call   apply передавать

// 37:40 мин
////////////////////////////////////////
////////////////////////////////////////
//практические задачи
//задача 3:
//программа будет выводить инфо на СТО-машину.
//

const infoCar = {
  name: "BMW",
  model: "M7",
  color: "white",
  showInfo: function () {
    console.log(
      "Car: " + this.name + " model: " + this.model + " color: " + this.color
    );
  },
};

infoCar.showInfo(); //Car: BMW model: M7 color: white
// пр3_1car.png, пр3_1car_my.png;

// доб-ть 2-ю машину

car2 = {
  name: "Opel",
  model: "XXX",
  color: "red",
};

infoCar.showInfo.bind(car2)(); //Car: Opel model: XXX color: red
infoCar.showInfo.call(car2); //Car: Opel model: XXX color: red
infoCar.showInfo.apply(car2); //Car: Opel model: XXX color: red

// см.пр3_2car_my.png;
// я (побочныймой мой вывод)- т.е в 1м объекте и данные и ф-я вывода.  // (это про const infoCar)
// в других объектах - только данные.
// названия  - любые.не должно совпадать имя объекта, содержащего данные об одинковом типе объекта(машины, например - структура, набор полей одинаковый))
// (это про car2)
// и структура в  объектах, описывыающих походий тип объекта (машина, например), может меняться. судя по предыдущим примерам.

// 41: 22
// ====================================
// вывод
// все, что сегодня гвоорили, не касается функций - стрелок.
// в функциях - стрелках this не работает. Или работает неправильно, относится к родительскому уровню.
// ненадо пользоваться this со стрелочными ф-ями!!!

// говорили про Замыкание
// Когда одна ф - я замыкает в себе другую ф - ю
// Или замыкает в себе некие значения, доступные только внутри этой ф-ции

// говорили про this

// неважно, где this был объявлен.
//   т.к.this вычисляется во время выполнения.
//   Важно - где он this был вызван.
//   Там, где this был вызван, там и будет контекст использован.

//   Мы можем сменить контекст this - a с пом.методов bind, call, apply
// bind - создает другое значение.Его надо дополнительно вызывать скобочками()
//   Он не ф - я, он просто создает новую переменную и копирует в нее ф - ю с новыми данными.

//   call - вызывает  сразу ф - ю
// И можно передавать туда бесконечное кол - во аргументов

// apply - тоже вызывает  сразу ф - ю
// И можно передавать туда только 2 аргумента:
// 1. объект(сcar, man...)
// 2. массив - передаем все, что нужно передать другое, Данные собственно.
//   Любое кол - во через запятую в массиве
