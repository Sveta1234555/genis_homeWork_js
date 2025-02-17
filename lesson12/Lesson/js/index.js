// синхр. код - послед-но выполняется
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");

//в консоли выведено  1 2 3 4 в кажд. строке

// // Асинхр. код
// console.log("1");
// // setTimeout(() => (console.log("2"), 2000)); //задержка выполнения ф-ции consol.log  2000ms
// setTimeout(() => (console.log("2"), 1)); //задержка выполнения ф-ции consol.log  2000ms
// console.log("3");
// console.log("4");
// //для 2000ms и 1 ms - вывод в консоль одинак, 2 - последняя, асинхр. отложенный код выплоняетс япосе синхронного
// //в консоли выведено  1 3 4 2 в кажд. строке (2 - последний)

// // ============================
// // setTimeout;
// // ============================
// const hello = () => {
//   console.log("hello");
// };

// const timeout = setTimeout(hello, 1000); //hello        //это Асинхронная ф-йия , она отработсает 2-й, после 1-й

// // Если надо убрать ф-цию ктотрая через setTimeout
// clearTimeout(timeout); //это синхронная ф-йия , она отработсает 1-й

// // отрабатывает сначала синхронная ф-йия "clearTimeout(timeout);", потом асинхронная, хотя последоательно идей 1-й сначала "const timeout = setTimeout..."
// //И Здесь clearTimeout  1-й выплняется, и отменяет предыдущую асинхронную  "const timeout = setTimeout(he..."

// // ============================
// // setInterval
// //ф-ция повторяется через интервал (пример - реклама)
// // синтаксис тот же, что setTimeout
// // // ============================

// // const hello = () => {
// //   console.log("hello");
// // };

// // const setInt = setInterval(hello, 1000); //hello выводится повторно черер 1000ms бесконечно

// // -----------------------
// //остановить setInterval
// //пример // с пом html - там 2 кнопки
// //
// // <button id="start">Start</button>
// // <button id="stop">Stop</button>
// //

// const startBtn = document.querySelector("#start");
// const stoptBtn = document.querySelector("#stop");

// let time = null;

// startBtn.addEventListener("click", () => {
//   time = setInterval(() => {
//     console.log("123");
//   }, 1000);
// });

// //Запуск - по кн. start да, повтоеятеся вывод 123 чпрерз 1000ms

// stoptBtn.addEventListener("click", () => {
//   clearInterval(time);
//   console.log("stop");
// });

// //Запуск - по кн. stop да, отменяется вывод 123 и пишется stop в консоль
// // можно расширить ф=цию . написать счетчик , через for перебрать... 4 раза показать и больше не показывать, остановить вывод

// // 10:27 мин
// // ============================
// //this
// // в  setTimeout и setInterval
// // ============================
// // в объекте:
// const a = {
//   //обычная ф-ция
//   classic() {
//     setTimeout(function () {
//       console.log(`${this}, classic in obj`);
//     });
//   },

//   //стрелочная ф-ция
//   // classic2() {
//   arr() {
//     setTimeout(() => {
//       console.log(`${this}, arr in obj`);
//     });
//   },
// };

// a.classic(); //obj Win
// a.arr(); //obj arr
// // a.classic2();

// // т.е.обчная ф - ция setTimeout  -  this ссылка на win,
// // а стрелочная  ф-ция setTimeout -  this ссылка на объект, откуда она вызвана,

// // ----------------------
// //если не в объектк - обе ф-ции будут ссылаться на win-obj

// setTimeout(function () {
//   console.log(`${this}, обычн win obj`);
// });

// setTimeout(() => {
//   console.log(`${this}, стрелочн win obj`);
// });

// 10:27 мин
// -------------------------------
// реальная частота срабатывания счетчика
// -------------------------------
// есть отклонение - от 1 до 4 ms. Считается норм.
// В более старых браузерах - до 15 ms
// setTimeout(func, 1);
// setTimeout(func, 4);
// разницы срабатывания не будет 1 или 4 ms
// -------------------------------
//  в некоторых ситуациях таймар может срабатывать еще  медленнее
// зависит от загрузки прцессора браузера.
// бывает, что при оч. частом повторе интервалов некоторые события могут быть пропущены,
// если оч. нагружен процессор
// -------------------------------
// большинство браузеров, принеактивной закладка, перешли на другую закладку браузера
//  то в 1 - й вкладке все - равно будет работать счетчик.
//  Но не чаще 1 раз в сек. Т.е. счетчик замедлится

// 13:35 мин
// // ===============================
// // есть класс Date
// // ===============================
// const dataNow = new Date(); //тек.дата-время   now()
// console.log(dataNow); //Date Sun Feb 16 2025 01:04:56 GMT+0200 (Восточная Европа, стандартное время)

// const data1 = new Date("March,10,2023");
// console.log(data1); //Date Fri Mar 10 2023 00:00:00 GMT+0200 (Восточная Европа, стандартное время)

// // 7 аргументов - gggg, m,d, h, mn, s
// const data = new Date(2022, 4, 1, 10, 11, 55, 7);
// console.log(data); //Date Sun May 01 2022 10:11:55 GMT+0300 (Восточная Европа, летнее время)

// // 7 аргументов, можно только дату, первые 3 арг - gggg, m,d
// const data2 = new Date(2022, 5, 1);
// console.log(data2); //Date Wed Jun 01 2022 00:00:00 GMT+0300 (Восточная Европа, летнее время)

// // 16:03 мин
// // ----------------------
// // в области информатики есть  концепция unix
// // Это момент времени, установленный в полночь 1 янв 1970 г.
// // текущий Date считается от этого времени

// const unixData1 = new Date(1000); //ск. милисекунд  прошло с этого 0-часа unix
// console.log(unixData1); //Date Thu Jan 01 1970 03:00:01 GMT+0300 (Восточная Европа, стандартное время)

// const unixData = new Date(1677452273126);
// console.log(unixData); //Date Mon Feb 27 2023 00:57:53 GMT+0200 (Восточная Европа, стандартное время)

// // посчитать - ск. ms до теперешнего момента прошло от 0-часа unix
// const newUnixDate = Date.now();
// console.log(newUnixDate); //1739661789412

// const unixData3 = new Date(1739661789412);
// console.log(unixData3); // Date Sun Feb 16 2025 01:23:09 GMT+0200 (Восточная Европа, стандартное время)

// 17:48 мин
// ==================================
// методы Date
// ==================================
const date = new Date();

// console.log(date.getDate()); //день месяца  16

// console.log(date.getMonth()); // месяц c 0   1й  (февр с 0)

// console.log(date.getFullYear()); //4 цифры года
// в Pdf - много других методов

// // ------------------
// // переести на укр. язык
// // ------------------
// const ukr0 = date.toLocaleString("Uk-uk");
// console.log(ukr0); //в уроке просто цифры вывело, а у меня - ничего
// // (не было "const date = new Date()")

// // ----------
// const options1 = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

// // это - есть в help, формат вывода значения можно менять
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "short",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
// };

// // const ukr = date.toLocaleString("Uk-uk", options);
// const ukr = date.toLocaleDateString("Uk-uk", options1);
// const ukre = date.toLocaleString("en-US", options);
// console.log(ukr); //неділя, 16 лютого 2025 р.
// console.log(ukre); ///Sunday, Feb 16, 2025, 01:52 AM

// 20:40 мин
// ==================================
// Promise
// ==================================
/////////
// ф - ция resolve - производитель (виробник), ожидает, когда произойдет событие
//                  - это resolve отрабатывает,  если ф-ция закончилась ок
// ф - ция reject - потом, с результатов будет работать эта ф-ця
//                  - это reject отрабатывает,  если ф-ция закончилась НЕок
// т.е. передается 2 состояния resolve, reject

// let prom1 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(console.log("resolve0")), 1000); //resolve0
//   //   setTimeout(() => reject("reject"), 1000);
// });
// т.е. ф-ция - исполнитель resolve  выполняет задачу асинхронную
// наприм, дает запрос на сервер и в зависимости от реузльтата
// позитивного - resolve
// или негативного - reject
// делает манипуляции

// 23:00 мин
// ====================================
// потребители
// then,   catch,  finally
// ---------------------------------
// let prom = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("resolve1"), 1000);
//   setTimeout(() => reject("reject2"), 1000);
// });

// // ---------------------------------
// // then
// // Позволяет выполнить код, в котором обработать результаты
// // ---------------------------------
// prom.then(
//   (resolve) => console.log(resolve),
//   (reject) => console.log(reject)
// );

// // выплоняется только одно из двух  - или resolve, или reject
// // через сек  выполнилось  - resolve1
// //1. resolve выполняется. когда promise успешно выполнился
// //2. reject выполняется ,если prom переходит в состояние 2 reject
// // В примере - ф-ция передана первым аргуменнтом, она выполнилась
// //написалось "resolve1". 2-го состояния reject уже нет

// // Если надо чтобы только успешно выполнялась задача,
// //   тогда Then передают только одну ф-цию

// // ---------------------------------
// // catch
// // для обработки ошибки
// // ---------------------------------

// // для примера - resolve нет, чтобы он не отработал как успешный,
// //  чтобы  ошиюка была

// let prom2 = new Promise(function (resolve, reject) {
//   // setTimeout(() => resolve("resolve1"), 1000);
//   setTimeout(() => reject("reject2"), 1000);
// });

// // Остановка просто alert-ом
// prom2.catch(alert);

// // 12_promis_catch_alert.png  - сообщение на формочке "reject2"
// // если пришла 404 ошибка - тут обрабаываетм - что делать по этой ошиюке

// 26:04 мин
// ---------------------------------
// finally
// подобен then
// но - выполняется в любом случае. неважно resolve, reject
// Используется для очистки состояний,
//   или loader остановить

// Если finally стоит раньше в исходнике,
// то он пропустит ошибку дальше

// не принимает  аргументов finally
// - не знаем - будет ли promis закончен или нет, или ошибку выдал

// // ---------------------------------

// let prom3 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("resolve1"), 1000);
//   setTimeout(() => reject("reject2"), 1000);
// });

// // можно вызвать отдельно , так:
// prom3.finally();
// // можно написать сразу после скобок объявления promis
// let prom4 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("resolve1"), 1000);
//   setTimeout(() => reject("reject2"), 1000);
// })
//   .finally()
//   .then().catch;

// В принципе finally пишут в конце, т.к. надо очищать состояния
// но - можно так передавать аргументы (сразу после скобочек объявления propmis)
// А не передавать кажд. раз вызов отдельно "prom3.finally();"

// 27:34 мин
// // ===========================
// // задача на Promis
// // ----------------

// //функция загрузки src
// function load(src) {
//   // возврат return обязательно
//   return new Promise(
//     //функция получает resolve, reject
//     function (resolve, reject) {
//       let script = document.createElement("script");
//       script.src = src;

//       // если успешно загружен:
//       script.onload = () => resolve(script);
//       // если ошиюка - надо делать reject через error
//       script.onerror = () => reject(new Error(`Err ${script}`));

//       document.head.append(script);
//     }
//   );
// }

// //прокинуть . В prom запишется результат
// let prom = load(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );
// // Это - отправили  загрузку адреса

// // // обработка ошика в then:
// // // script получаем аргументом
// // prom.then(
// //   (script) => console.log(`Download ${script}`),
// //   (error) => console.log(`Error ${error.message}`)
// // );
// // //При правильном адресе - вывод "Download [object HTMLScriptElement]"
// // //При НЕправильном адресе (убрать libs)- вывод "Error Err [object HTMLScriptElement]"

// // prom.finally(console.log("Finally"));
// // // "Finally" выводится - отрабатывает и при ошибке, и при успешной загрузке
// // // ПРичем в консоли - сначала выводится "Finally", а потом от then сообщение

// //-------------------
// // или все отдельно - then, catch, finally:
// prom.then((script) => console.log(`Download ${script}`));
// // ошибку  обработать отдельно в catch
// prom.catch((error) => console.log(`Error ${error.message}`));

// prom.finally(console.log("Finally"));
// // вывод в консоли тот же  - сначала выводится "Finally", а потом от then или catch сообщение

// promise, this -частый вопрос на собес

// 34:19 мин
// ============================
// задача 2  практика
//--------------------------------
// new Promise(function (resolve, reject) {
//   // вывести 2 через 1000ms
//   setTimeout(() => resolve(2), 1000);
// }).then(function (result) {
//   console.log(result);
// });
// // Вывело 2
// // т.е. result - Приняло 2. и его вывед=ло в консоль
// // Без then - Ничего не выводит в консоль

// 35:33 мин
// // -------------------
// // После выполнения ф - ции надо сделать что - то с результатом
// // -------------------
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(2), 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     //возврат обязательно , новый promise
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + 5), 1000);
//     });
//   })
//   //еще один обработчиик then
//   .then(function (result) {
//     console.log(result);
//   });

// вывело 2 потом 7

// // -------------------
// // и таких обработчиков then и функций продолжений раоты с предыд.результатом
// // м.б. бескончено
// // Повторять - от return предыдущего
// // -----------
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(2), 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     //возврат обязательно , новый promise
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + 5), 1000);
//     });
//   })
//   //еще один обработчиик then
//   .then(function (result) {
//     console.log(result);
//     // повторять послдений отсюда и до конца --------------
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + 5), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });
// вывело 2 потом 7 потом 12

// -------------------
// и таких обработчиков then и функций продолжений раоты с предыд.результатом
// м.б. бескончено
// Повторять - от return предыдущего
// -----------
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(2), 1000);
})
  .then(function (result) {
    console.log(result);
    //возврат обязательно , новый promise
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 5), 1000);
    });
  })
  //еще один обработчиик then
  .then(function (result) {
    console.log(result);
    // повторять послдений отсюда и до конца --------------
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 5), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
    //вставлять сюда
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 5), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
  });

// вывод 2 7 12 17:
//   Socket is closed. Reconnect will be attempted in 1 second. <empty string> fiveserver.js:1:11938
// [Five Server] connecting... fiveserver.js:1:5399
// [Five Server] connected. fiveserver.js:1:8360
// 2 index.js:445:13
// 7 index.js:453:13
// 12 index.js:460:13
// 17 index.js:467:13

// можно добавлять finally, ключи
// пример м.б. такой - приходит сообщение, в первый resolve
// new Promise(function (resolve, reject) {
// в 1-м then, 2-m Promise  - обработали, вытянули значение - ссылку или имя
// return new Promise((resolve, reject) => {
// в 2-м then, 3-m Promise  - обработали, из полученной ссылки что-то загрузили
// return new Promise((resolve, reject) => {
// и так далее можно обрабатывать результаты и ошибки отработки пошагово

// 38:00 мин
// Выводы:
// promise, this -частый вопрос на собес
// нужна практика
// Много будет Promise, когда будет отправка  запросов и получение и обработка  результатов
