//----------------------------
//----------------------------
// Ввод - выод данных
//----------------------------
//----------------------------

// const message = "JavaScript is awesome";
// // 1. вывод данных
//  alert      console.log
// alert(message);

// console.log(message);

// ПОлучение данных
// confirm   prompt

// // confirm
// // отправляем вопрос (формочку MsgBox на экран) - будtт ответ ок, cancel
// const isConfirm = confirm("Please, confirm reservation");
// console.log(isConfirm);    //нажатие кнопки OK - вернет true, cancel - false

// // объявляем переменную и в нее отправляем результат confirm
// const test = confirm("Yes or no&");
// console.log(test);



// // prompt
// // в форме на экране помимо кнопко есть окно ввода, куда можно вносить данные
// // тоже объявляем переменную и в нее отправляем результат зкщьзе
// const userName = prompt('Please enter your name:');
// console.log(userName);
//   //нажатие кнопки OK  при пустом вводе  - вернет <empty string>
//   //нажатие кнопки OK  при заполненом окне ввода   - вернет введенные данные sdvdsv
//   //нажатие кнопки Отмена  - вернет null  в любом случае

// const number = prompt('Please enter number:');
// console.log(number);


// //----------------------------
// //----------------------------
// // Преобразование типа
// //----------------------------
// //----------------------------

// const value = prompt('Please enter a number:');
// console.log(typeof value);     //string
// console.log(value);     //на экране 5, но это символьная '5'
 
// // Возврат символьный.  В число надо преобразовывать , если надо число.

// let value;
// // ---------String-------//
// value = false;
// console.log(typeof value);     //boolean

// // преобразование.
// //     объявить новую переменную
// //     и поместить туда новое приведеное к нужному типу значение
// const newValue = String(value);
// console.log(typeof newValue);     //string

// // ---------Number-------//
// value = '123';
// console.log(typeof value);      //string
// const newValue = Number(value);
// console.log(typeof newValue);     //number

// //преобразование к числу из текста, где нет цифр даст значение Nan (а не тип!11)
// const test = Number("qwerty");
// console.log(typeof test);     //number
// console.log(test);            //NaN   !!!!



// // ---------Boolean-------//
// // Правила преобразования в Boolean
// // Значения, которые интуитивно "пустые", такие как 0,
// //     пустая строка, null, undefined, NaN,
// //     становятся true.
        
// // Остальные значения - становятся false

// console.log(Boolean(1));    //true
// console.log(Boolean(0));    //false

// console.log(Boolean("Привет"));    //true
// console.log(Boolean(""));    //false

// console.log(Boolean(NaN));    //false
// console.log(Boolean(null));    //false



// //----------------------------
// //----------------------------
// // Операторы
// //----------------------------
// //----------------------------

// Термины: "унарный", "бинарный", "операнд"

// Операнд - это то, к чему применяется оператор.Операнд
// Например, в умножении 5 * 2 есть два операнда: левый операнд 5 и правый операнд 2
// Чаще их называют "аргументами

// Оператора явлется унарным, если он имеет один Операнд
// let x = 1;
// х = - х;


// Оператора явлется бинарным, если он имеет два Операнда
// let x = 1, y = 3;
// alert(y - x);


//---------------------------------
// JavaScript обеспечивает математические и логические операции:

// математические------------------:
// Прибавление +
// вычитание -
// умножение *
// деление /
// остаток от деления %
// возведение в степень **

// // Прибавление +
// console.log(2 + 2);

// // вычитание -
// console.log(10 - 4);

// // умножение *
// console.log(5 * 5);

// // деление /
// console.log(6 / 2);

// // остаток от деления %
// console.log(8 % 3);     //2
// console.log(10 % 3);     //1
// console.log(9 % 3);     //0

// // возведение в степень **
// console.log(5 ** 2);     //25
// console.log(4 ** 4);     //256

// логические операции------------------:
//------------Операции сравнения---------//
// результатом возвращается логическая Boolean

// a > b  и a < b  //--больше/меньше
// a >= b  и a <= b  //--больше/меньше или равно
// a == b          //-- равно
// a != b          //-- не равно
// a === b          //-- строго равно
// a !== b          //-- строго не равно

// console.log(5 > 2);     //true
// console.log(5 < 2);     //false

// console.log(5 >= 5);     //true
// console.log(7 <= 3);     //false


// // = одно = это присвоение значения
// let value = 0
// console.log(value == 0);       //true
// console.log(value === 0);      //true   (строгое ===      0=0)
// console.log(value === "0");    //false   (строгое ===     0<>"0")

// // а если через двойное ==, простое сравнение, тут будет приведение типов и сравнит как одинаковые
// // Лучше проверять равно тройным равно - через СТРОГОЕ РАВНО ===
// //     При двойном ==  делается приведение типов.

// console.log(5 != 5);     //false
// console.log(5 !== 5);     //false
// // ! - это будет означать НЕ в js

//  == (2 равно) делает приведение к типу сравниваемых переменных или значений

//12:40 мин
// //----------------------------
// //----------------------------
// // or  -and  --not
// //----------------------------
// //----------------------------

// // ------- and   (&&) -------
// console.log(5 === 5 && 6 > 3);     // true
// console.log(5 === 6 && 6 > 3);     // false
// console.log(6 + 3 >= 9 && 8 + 1 === 9);     // true


// // ------- or    (||) -------
// console.log(5 + 5 === 25 || 2 * 2 === 6);     //false
// console.log(5 * 5 === 25 || 2 * 2 === 6);     //true


// // ------- not   (!)  -------
// console.log(5 !== 4);     //true
// console.log(!true);     //false
// console.log(false);     //false
// console.log(!false);     //true

// 15:46 мин
// //----------------------------
// //----------------------------
// // условие if/else
// //----------------------------
// //----------------------------

// // ------- одинарные ------- ///
// if (5 + 5 === 10) { console.log("Hello!"); }        //Hello!
// if (5 * 5 === 10) { console.log("Hello!"); }        //не выполн

// if (5 + 5 === 25) {
//     console.log("1");
// }
// else {
//     console.log("2");
// }
// //2



// if (2 + 2 === 4) {
//     console.log("Hello");
// } else {
//     console.log("No Hello");
// }


/// ------- Тернарный оператор ------- ///
// аналог iif  или ?

// // условие ?    да : нет
// 2 + 2 === 4 ? console.log("1") : console.log("2");   //1
// 5 * 5 === 24 ? console.log(true) : console.log(false);   //false


//  {console.log("")}

// if (5 + 5 === 7) {
//     console.log("5+5===7");
// }
// //ничего не напишет


// /// ------- if / else if /else ------- ///
// //если много условий :  if / else if /else

// if (5 + 5 === 7) {
//     console.log("5+5===7");
// } else if (2 + 2 === 4) {
//     console.log("2+2===4");
// } else {
//     console.log("no");
// }

// //тоже самое. структурнее для меня

// //одно условие выполняется
// if (5 + 5 === 7) {console.log("5+5===7");}
// else if (2 + 2 === 4) { console.log("2+2===4"); }
// else { console.log("no"); }
// //вывод 2+2===4

// //ни одно условие выполняется
// if (5 + 5 === 7) {console.log("5+5===7");}
// else if (2 + 2 === 6) { console.log("2+2===4"); }
// else { console.log("no"); }
// //вывод no


// //2 условия выполняются  - первое работает
// if (5 + 5 === 10) {console.log("5+5===10");}
// else if (2 + 2 === 4) { console.log("2+2===4"); }
// else { console.log("no"); }
// //вывод 5+5===10



// let lang = "ua";
// if (lang === "ua") { console.log("пнд"); }
// else if (lang === "en") { console.log("Monday"); }
// else console.log("Reset");


// 23:09 мин
// //----------------------------
// //----------------------------
// // switch/case
// //----------------------------
// //----------------------------

// let num = 10;
// switch (num) {
//     case 0: console.log(0); break;
//     case 5: console.log(5); break;
//     case 10: console.log(10); break;
// }

// //аргумент в скобках передается в виде переменной или значения
// switch (5) {
//     case 0:
//         console.log(0);
//         break;
    
//     case 5:
//         console.log(5);
//         break;
        
//     case 10:
//         console.log(10);
//         break;
// }

// // Пример. определить стоимость подписки
// let cost=null;
// const sub = "fghzfhzf";
// // const sub = "premium";
// // const sub = "pro";
// switch (sub) {
//     case "free":
//         cost = 0;
//         break;
    
//     case "pro":
//         cost = 100;
//         break;
    
//     case "premium":
//         cost = 500;
//         break;
   
//     default:
//         console.log("Invalide sub");
// }
// console.log(cost);


// //default  выплонится если не выполняется ничего из условий выше в этом switch


// 27:43 мин
// //----------------------------
// //----------------------------
// // Решение логическаих задач и построение алгоритмов
// //----------------------------
// //----------------------------

// // задача:
// // объявмит переменную с минутами
// // и посчитать - в какую четверть часа она попадает

// const min = prompt("Введите минуту");
// if (min >= 0 && min <= 14) {
//     console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//     console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//     console.log("Третя чверть");
// }
//  else if (min >= 45 && min <= 59) {
//     console.log("Четверта чверть");
// }


// 31:20 мин
// поделили экран
// // задача2
// // продавец спрашивает стоимость товара
// // Мы говорим-отвечаем стоимость товара

// const value = prompt("Введiть назву товару");
// let cost;

// switch (value) {
//     case "яблуко":
//         cost = 10;
//         break;
//     case "вишня":
//         cost = 50;
//         break;
//     case "грушка":
//         cost =45;
//         break;
//     case "кавун":
//         cost = 70;
//         break;
//     case "чорниця":
//         cost = 110;
//         break;
//     case "диня":
//         cost = 150;
//         break;
//     default: alert(`Товару ${value}, нема в наявностi`);
// }
// alert(`${value} стоит ${cost} гривень`);

//чтобы по default не вылетал еще и 2й alert - копируем 2й alert  в каждый case

// const value = prompt("Введiть назву товару");
const value = prompt("Введiть назву товару").toLowerCase();
let cost;

switch (value) {
    case "яблуко":
        cost = 10;
        alert(`${value} стоит ${cost} гривень`);
        break;
    case "вишня":
        cost = 50;
        alert(`${value} стоит ${cost} гривень`);
        break;
    case "грушка":
        cost = 45;
        alert(`${value} стоит ${cost} гривень`);
        break;
    case "кавун":
        cost = 70;
        alert(`${value} стоит ${cost} гривень`);
        break;
    case "чорниця":
        cost = 110;
        alert(`${value} стоит ${cost} гривень`);
        break;
    case "диня":
        cost = 150;
        alert(`${value} стоит ${cost} гривень`);
        break;
    default: alert(`Товару ${value}, нема в наявностi`);
}

//Добавляем toLowerCase() в prompt