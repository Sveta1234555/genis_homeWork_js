
//Домашнє завдання.

//1.
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// let value = 0;
// if (value > 0) { console.log(true); }
// else  { console.log(false); }

// let value2 = 0;
// value2 > 0 ? console.log(true) : console.log(false);

// let value4 = 1;
// // let value4 = 0;
// // let value4 = -3;


// //так по 0 - пусто вiзуально, але в консоль виведено. пробiл
// if (value4 > 0) { console.log(true); }
// else if (value4 < 0) { console.log(false); }
// else console.log(" ");

// //так по 0 - немає вивода в консоль
// if (value4 > 0) { console.log(true); }
// else if (value4 < 0) { console.log(false); }

// //так по 0 - "0"  в консоль
// if (value4 > 0) { console.log(true); }
// else if (value4 == 0) { console.log("0"); }
// else  { console.log(false); }



// let num = 0;
// switch (num) {
//     case 1: console.log(true); break;
//     case 0: console.log(0); break;
//     case -3: console.log(false); break;
// }


//  let num = 0;
//  let num = 1;
//  let num = -3;

////Так не работает. вместо (num) надо (true). см. ниже
//// switch (num) {
////     case num> 0: console.log(true); break;
////     case num==0: console.log(0); break;
////     case num<0: console.log(false); break;
//// }

// switch (true) {
//     case (num> 0): console.log(true); break;
//     case (num===0): console.log("0"); break;
//     case (num<0): console.log(false); break;
// }



// //// так залишити
// let value4 = 0;          //0
// //  let value4 = 1;      //true
// //  let value4 = -3;     //false

// // if (value4 > 0) {
// //     alert(true);
// // }
// // else if (value4 === 0) {
// //     alert(0);
// // }
// // else if (value4 < 0) {
// //     alert(false);
// // }



// //  let value4 = 1;             //true
// // let value4 = 0;              //0 (or ...)
// //  let value4 = -3;            //false
// // let value4 = "ljkjkj";       //0 (or ...)
// if (value4 > 0) { console.log(true); }
// else if (value4 < 0) { console.log(false); }
// else console.log("0 (or ...)");

// Убрать!!!!
// // Перевірка на інших варіантах
// console.log(1>0); // true
// console.log(-3>0); // false - не збігається
// console.log(0>0); // false - не збігається




// // // 2
// // // Якщо змінна ="test" - виведіть true,
// // //Перевірте це на варіантах 'test', "qwerty", true

// let val = "test";           //true - строкове збіг
// // let val = "qwerty";      //false - не збігається
// // let val = true;          //false - різні типи даних

// if (val === "test") { alert(true); }
// else { alert(false); }


// // Убрать!!!!
// // Перевірка на інших варіантах
// console.log('test' === "test"); // true - строкове збіг
// console.log("qwerty" === "test"); // false - не збігається
// console.log(true === "test"); // false - різні типи даних


// // 3
// // Якщо змінна більше 10 - відніміть 5,
// //менше - додайте 5, результат виведіть в консоль
// //Перевірте це на варіантах 1, 10, 13.

// let val = 1;                   //6
// // let val = 10;               //=10
// // let val = 13;               //8
// if (val> 10) { console.log(val-5); }
// else if (val< 10) { console.log(val+5);}
// else { console.log("=10");}


// // 4
// //Зробіть сервіс який отримує число від 1 до 12
// // виведіть місяць який дорівнює числу



// let correct = 0;
// let mesn;       //тут объявлять. если let mesn ВНутри цикла, после выхода из цикла  - не видит mesn
// while (correct === 0) {
//   const mes = prompt("Введiть число від 1 до 12");
//   mesn = Number(mes);

//   if (Number.isNaN(mesn)) {
//     alert("Це не число. Введiть заново число від 1 до 12");
//   } else if (!(mesn >= 1 && mesn <= 12)) {
//     alert("Це число НЕ від 1 до 12");
//   } else {
//     // alert("Ура");
//     correct = 1;
//     break; // Exit з цикла, якщо данi коректнi
//   }
// }

// // Якщо дійшли до цього місця, значить введення було коректним
// console.log(` correct=  ${correct}`);
// console.log(' correct = ' + correct);

// console.log(' mesn = ' + mesn);


// // //------------return - из функции выход-возврат. Тут нет функции. Ошибка
// // // const mes = prompt("Введiть число від 1 до 12");
// // // let correct = 0;
// // // let mesn = Number(mes);
// // // if (Number.isNaN(mesn)) {
// // //     alert("Це не число. Введiть заново число від 1 до 12");
// // //     return; // Прекращаємо виконання, якщо це не число
// // // } else if (!(mesn >= 1 && mesn <= 12)) {
// // //     alert("Це число НЕ від 1 до 12");
// // //     return; // Прекращаємо виконання, якщо це не число
// // // } else {
// // //     alert("Ура");
// // //     correct = 1;
// // // }


// // //или так - для повторного ввода заново запускать (без цикла). Но короче 
// // // let correct = 0;
// //  const mes = prompt("Введiть число від 1 до 12");
// // let mesn = Number(mes);
// // if (Number.isNaN(mesn) || !(mesn >= 1 && mesn <= 12)) {
// //     alert(`Ви ввели значення :  ${mes}   . Це не число від 1 до 12.` )
// // } else {alert("Ура");} 
    
// let mesName = "";

// switch (mesn) {
//     case 1:
//         mesName = "January";
//         break;
//     case 2:
//         mesName = "February";
//         break;
//     case 3:
//         mesName = "March";
//         break;
//     case 4:
//         mesName = "April";
//         break;
//     case 5:
//         mesName = "May";
//         break;
//     case 6:
//         mesName = "June";
//         break;
//     case 7:
//         mesName = "July";
//         break;
//     case 8:
//         mesName = "August";
//         break;
//     case 9:
//         mesName = "September";
//         break;
//     case 10:
//         mesName = "October";
//         break;
//     case 11:
//         mesName = "November";
//         break;
//     case 12:
//         mesName = "December";
//         break;    
//     // default: alert(`Товару ${value}, нема в наявностi`);

// }
//  alert(`${mesn} - ${mesName}`);
 


// 5
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел



const num = prompt("Введіть тризначне число:");
let numn = Number(num);
if (Number.isNaN(numn) || !(numn >= 100 && numn <= 999)) {
    alert(`Ви ввели значення :  ${num}   . Це не тризначне число.`)
} else {
    alert("Ура");

    let num1 = Math.floor(numn / 100);      // Math.floor(n)  -возвращает  целое число, меньшее или равно указанному n
    console.log(num1);   //5
    let num2 = Math.floor((numn - num1 * 100) / 10);
    console.log(num2);   //3
    let num3 = Math.floor(numn - num1 * 100 - num2 * 10);
    console.log(num3);   //2
    let sum = num1 + num2 + num3;       //10
    alert(`Ви ввели значення :  ${num}   . Сумма цих цифр =  ${sum}`);
}




// function sumDigits(number) {
//   if (number < 100 || number > 999) {
//     return "Введіть тризначне число!";
//   }

//   let sum = 0;
//   let digits = number.toString().split(''); // Перетворимо число на рядок і розділимо на цифри

//   for (let i = 0; i < digits.length; i++) {
//     sum += parseInt(digits[i]); // Перетворимо кожну цифру в число та додамо до суми
//   }

//   return sum;
// }

// let number = prompt("Введіть тризначне число:");
// let result = sumDigits(parseInt(number));
// alert("Сума цифр: " + result);



// Пояснення:

// 1. Функція `sumDigits(number)`:
//    * Приймає число `number` як аргумент.
//    * Перевіряє, чи число тризначне (від 100 до 999). Якщо ні, повертає повідомлення про помилку.
//    * Ініціалізує змінну `sum` для зберігання суми цифр.
//    * Перетворює число `number` на рядок за допомогою `number.toString()`.
//    * Розділяє рядок на масив цифр за допомогою `split('')`.
//    * Цикл `for` проходить по всіх цифрах в масиві:
//      * Перетворює кожну цифру в число за допомогою `parseInt(digits[i])`.
//      * Додає число до `sum`.
//    * Повертає `sum` як результат.

// 2. Збір введення:
//    * `let number = prompt("Введіть тризначне число:");` - Запитує у користувача число.
//    * `let result = sumDigits(parseInt(number));` - Викликає функцію `sumDigits`, передаючи число як аргумент.

// 3. Виведення результату:
//    * `alert("Сума цифр: " + result);` - Виводить суму цифр в alert-повідомленні.

// Як це працює:

// * Спочатку ми перетворюємо число на рядок, щоб розділити його на цифри за допомогою `split('')`.
// * Потім ми проходимо по кожній цифрі в циклі `for`.
// * Для кожної цифри ми використовуємо `parseInt` для перетворення її назад в число і додаємо до `sum`.
// * Нарешті, ми повертаємо `sum`.

// Приклад:

// Якщо користувач введе `123`, то `sumDigits(123)` поверне `6` (1 + 2 + 3 = 6).

// Важливо: 
// * Введення користувача завжди є рядком, тому ми використовуємо `parseInt` для перетворення його в число, коли викликаємо функцію `sumDigits`.
// * Якщо користувач введе не тризначне число, то функція `sumDigits` поверне повідомлення про помилку.