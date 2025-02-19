// const btn = document.querySelector(".js-get-data");

// btn.addEventListener("click", getUrl);

// function getUrl() {
//   //   return fetch("https://api.monobank.ua/bank/currency");
//   return fetch("https://the-cocktail-db.p.rapidapi.com/search.php'");
//   //   fetch(
//   //     "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
//   //   );
// }

// // ==================
// // метод fetch
// //Отправка сетевыз запросов
// // базовый синтаксис
// // ==================
// let promise = fetch(url, {
//   method: "GET", // POST, PUT, DELETE та інші
//   headers: {
//     // значення цього заголовку зазвичай встановлюється автоматично,
//     // залежно від тіла запиту
//     "Content-Type": "text/plain;charset=UTF-8",
//   },
//   body: undefined, // string, FormData, Blob, BufferSource або URLSearchParams
//   referrer: "about:client", // або "", щоб не посилати заголовок Referer,
//   // або URL з поточного джерела
//   referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
//   mode: "cors", // same-origin, no-cors
//   credentials: "same-origin", // omit, include
//   cache: "default", // no-store, reload, no-cache, force-cache або only-if-cached
//   redirect: "follow", // manual, error
//   integrity: "", // контрольна сума, наприклад "sha256-abcdef1234567890"
//   keepalive: false, // true
//   signal: undefined, // AbortController, щоб перервати запит
//   window: window, // null
// });
// //эти параметры необязательны

// 09:57 мин
// Есть более удобный синтаксис для работы с Promise:
// // ========================
// // async/await
// // асинхронные ф=ции
// // ========================

// // синтаксис  - async/await  прописыаются перед началом функции

// async function a() {
//   return true;
// }

// // можно так сразу (Это тоже самое, что в ф. a):
// async function b() {
//   return Promise.resolve(true);
// }

// // async всегда возвращает promise
// // вызов ф-ции
// a().then(console.log); //true    ф12 - консоль - лог
// b().then(console.log); //true

// 11:43 мин
// async всегда возвращает promise и гарантирует  , что оборачивает в него (вasync) неPromise

// // --------------------
// //  синтаксис await:
// // --------------------
// //  слово await заставляет javaScript ждать , пока Promise не выполнится и не вернет какой-то резульата.
// // Т.е. async  - перед ф-цией, а await - перед Promise.

// // let value = await promise;

// async function a() {
//   let prom = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   let result = await prom; //выполнение ф-ции приостанавлаивается в этой строке и возобновляется, когда Promise выполнится и результатом станет resolve
//   console.log(result);
// }

// // Вызов ф-ции a
// a(); //Hello через сек

// // т.е. await приостанавливает выпонение ф-ции до тех пор, пока Promise не выполнится. А потом обновляет ее ф-цию уже с этим результатом result
// // Разница с Promise – более элегантны синтаксис.

// // -----------------
// // 14:06 мин
// // Нельзя использовать await в обычных ф-циях, в несаинхронных.
// // Пример – ф.b – неасинхронная, нет asyync перед  function
// // Так нельзя – ошибка. Среда ошиюку выдает:

// function b (){
//     let result = await promise
// }

// // --------
// // await могут работать в модулях верхнего уровня.Современные браузеры это доспускают.
// // Так можно:
// let response = await fetch(
//   "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
// );

// // 15: 22 мин
// // ------------------------------
// // Возвращаемся к fetch
// // Нвдо отправить url, options
// // Если options не отправлять – тогда это будет обычный get-запрос
// // Пробуем:

// // return fetch("https://api.monobank.ua/bank/currency");

// // ------------------------------
// const monocurrency = async () => {
//   let response = await fetch(
//     "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
//     // "https://api.github.com/repos/jacript-tutorial/en.javascript.info/commits"
//   );

//   // для работы с результатами запроса:
//   // if (response.ok)  - если статус - код ответа с http будет 200-299  - норм. ок. true
//   if (response.ok) {
//     console.log("Ok");
//     console.log("response", response.text);
// // обрабывать надо только один ответ !!!
//     console.log("response", response.json());
//   } else {
//     console.log("Err: ", response.status);
//   }
// };

// monocurrency();
// // норм ссылка - в консоли ОК
// // поломали ссылку - в консоли err.404
// получать данные - ответ можно через тэг, JSON, дату, body и т.п. Вариантов много обрботки результатов ответа

// важная деталь
// Не можем дважды обрабатывать резульат-----------------------
//     console.log("response", response.text);
// или
//     console.log("response", response.json());
// 2й – будет ошибка.
// Хотя у меня норм отработало 2, снимок – ошиюку не показывает. (что там внутри в содержимом, может и неточности…).
// надо Вытянуть ответ в переменную один раз – и потом с ним работать- разбирать- обрабатывать

// 19:36 мин
// ===================================
// Заголовки
// Заголовки API:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers
// Для работы с headers есть:
// ===================================

// // 1. Можно работать именно с самим заголовками:
// // Стандартный хедерс:

// const headers = new Headers({
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value",
// });

// // методы роаботы с хедерс:---------------------------
// headers.has("Content-Type");
// console.log(headers.has("Content-Type")); //true
// // в конспекте - др методы  есть

// 20:57 мин
// // Для чего еще хедер.
// // -----------------------------
// // Отправляем не get-запрос,  а post –запрос. ----------
// //отправить данные user-а при логине в post - запросе (отправить,отдать, а не получить)
// const postTest = async () => {
//   let user = {
//     name: "Ivan",
//     city: "Kyiv",
//   };

//   let response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

// // получить результат перелачи запроса так, принцип:
// postTest().then(фцияОбработкиРезультата);

// 23: 09 мин
// =====================================
// Работа с ошибками

// try {
//   console.log("Start");
//   a; //здесь ошибка
//   console.log("Finish");
// } catch (err) {
//   console.log("Errr");
// }

// Start
// Errr

// // 25:15 мин
// //try-catch - работает синхронно--------------------

// // Если внутри try-catch будет асинхронный метод(наприм setTimeout)  - try-catch при ошибке не отработает
// // Пока нет ошибки- норм работает.
// // Когда ошибка в области try (неизвестная команда da здесь) – ничего не будт. Ошиюка не высветится, не обработается как try-catch.
// // Почему:
// // Если исключение происходит в запланированном к выполнению коде, тогда try-catch не может перехватить ошибку.

// try {
//   setTimeout(function () {
//     da; //здесь ошиюка - не отработает как try -catch. СОобщение из catch - не появится
//     // console.log("в"); //нет ошиюбки - норм отработает
//   }, 1000);
// } catch (err) {
//   console.log("Errr");
// }

// // 26:49 мин
// // ЧТо делать - как использовать try-catch  с setTimeout-----------------
// //внутри setTimeout-а всю конструкцию try-catch писать, чтобы асинхр ф-я setTimeout была снаружи

// setTimeout(function () {
//   try {
//     // console.log("ОК");
//     da;
//   } catch (err) {
//     console.log("Errr");
//   }
// }, 1000);
// // так, с ошибкой da - try-catch отработал, написал Errr

// 27:35 мин
// Можем отловить объект ошибки  и вывести

// // СХематично  так:
// try {
//   da;
// } catch (err) {
//   err.message;
//   console.log(err.message);
// }

// try {
//   da;
// } catch (err) {
//   err.message;
//   console.log(err.name); //ReferenceError
//   console.log(err.message); //da is not defined
//   console.log(err.stack); //@http://127.0.0.1:5500/js/script.js:250:3
// }

// 28:54 мин
// Приамер на практике try-catch --------------------
// С сервера приходят данные про юзера JSON-ом

// //пришла пустая строка------------------------
// let json = ``;

// try {
//   // распарсить строку от сервера json
//   let user = JSON.parse(json);
// } catch (err) {
//   console.log("Err", err.message);
// }
// // В консоли:
// //Err JSON.parse: unexpected end of data at line 1 column 1 of the JSON data

// //пришла корректная строка json------------------------
// let json = `{"name": "Ann"}`;
// try {
//   let user = JSON.parse(json);
//   console.log("user", user);
// } catch (err) {
//   console.log("Err", err.message);
// }

// //user  Object { name: "Ann" }

// // //пришли недостаточные данные в корректной строке json------------------------
// // запрашивали имя и город, пришло только имя

// let json = `{"name": "Ann"}`;
// try {
//   let user = JSON.parse(json);
//   console.log("user", user.city);
// } catch (err) {
//   console.log("Err", err.message);
// }
// //в консоли - user undefined. не вывалится в catch !!

// // // Но можно сделать ошибку  для обработки catch---
// //throw  ==============

// let json = `{"name": "Ann"}`;
// try {
//   let user = JSON.parse(json); //это тоже написало    user undefined
//   console.log("user", user.city);
//   if (!user.city) {
//     throw new SyntaxError("Нема міста");
//   }
// } catch (err) {
//   console.log("Err", err.message);
// }

// user undefined script.js:303:11
// Err Нема міста
// Т.е. catch вывалился в ошибку.
// Т.е.с пом.Оператора throw можно дообрабатывать ошибки,
// добавлять новые ошибка, чтобы обваливать код в  нужном месте
//  и уходить в ошибку catch.

// ------------------------------
// Но например user надо все равно обработать, имя отразить хотя бы.
// finally  оператор-------------------
// finally выполняется всегда (обвалился код или нет, уходило ли в catch)!!!

// let json = `{"name": "Ann"}`;

// try {
//   let user = JSON.parse(json);
//   if (!user.city) {
//     throw new SyntaxError("Нема міста");
//   }
//   console.log("start");
// } catch (err) {
//   console.log("Err", err.message);
// } finally {
//   console.log("finally");
// }

// // консоль при наличии сделанной ошиюки throw:
// // Err Нема міста script.js:332:11
// // finally

// // -----------убрали throw, нет ошибки сгенеренной:

// let json = `{"name": "Ann"}`;

// try {
//   let user = JSON.parse(json);
//   // if (!user.city) {
//   //   throw new SyntaxError("Нема міста");
//   // }
//   console.log("start");
// } catch (err) {
//   console.log("Err", err.message);
// } finally {
//   console.log("finally");
// }

// // // консоль при отстутвии сделанной ошиюки throw:
// // catch не отработал, нетт в консоли Err
// // a finally в консоли есть
// // start
// // finally

// // это(finally) нужно, когда надо все равно - при ошиюке что - то доделать
// // Закрыть loader,например

// 32:40 мин
// ==============================
// Websocket
// ==============================
// 4 метода – слушать надо  open, message, close, error
// onopen, onmessage, onclose, onerror
// ----------------------------------------

//  Сделать web-socket соединение:
// вместо http - ws
// вместо https - wss     wss - защищенный (с шифрованием) всегда использовать!!!

let socket = new WebSocket(
  "wss://javascript.info/article/websocket/demo/hello"
);

// как только создали - теепрь надо слушать его события
// 1 - слушаем  open------------

socket.onopen = function (e) {
  console.log("З*єднання встановленно");
  socket.send("Привіт");
  socket.send("Я Христя");
};

// когда получили данные - слушаем onMessage-----------

socket.onmessage = function (e) {
  console.log("message", e.data);
};

// слушаем close----------

socket.onclose = function (event) {
  if (event.wasClean) {
    // wasClean - чистое
    console.log("Зупинено", event.code);
  } else {
    //если сервер убил процесс, или сеть недоступна
    console.log("Poзірвано");
  }
};

// обработать error-------
socket.onerror = function (err) {
  console.log(err);
};

// в консоли:
// З*єднання встановленно
// message Hello from server, Привіт!
// message Hello from server, Христя!
// Зупинено 1000

// т.е. с socket есть 4 метода , с которыми можно работать
// onopen, onmessage, onclose, onerror

// // выводы=================================================
// // Это были основы js
// тут тяжко делать задачи,
//   потому что их проще сделать на готовых бесплатных api

// Но - на чистом javaScript не будете работать
// Изучение js - надо, чтобы понимать как работает все внуртри "под капотом"
//   Для собеседования надо

//   Работают все на фреймфорках - react, view, angular
// mobile - reactNative

// или дальше - на Node и писать back

// Будете использвать методы, которые проходили -
//   методы перебора массивов
// методы работы с объектами

//  Но сейчас - это все упрощено.
//  Например в web - бибилиотеках не будем навешивать слухачи на кнопки.

//  На след. занятии в react - будут примеры, почему react проще
//    (много кода уже написано "под капотом")
//  Понимая что  происходит в JS, как это работает
//   будет проще изучать новые фреймворки и библиотеки.

// инфа - в лекциях , по ссылкам, доп изучать
// курс javaScript закончен
