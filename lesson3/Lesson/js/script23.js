//----------------------------
//----------------------------
// ja mod23
// - массивы циклы
//----------------------------
//----------------------------

// //----------------------------
// //----------------------------
// //области видимости
// // глобальные, блочные 
// //----------------------------
// //----------------------------

// // //нельзя вызывать функцию или константу (а переменную?) до того, как она объявлена
// // console.log(a);     //Error Uncaught ReferenceError: can't access lexical declaration 'a' before initialization
// //     //вызвали пееременную перед ее инициализацией
// // const a = 5;
// // console.log(a);


// //области видимости - доступность в любом месте кода
// // есть несколько областей видимости.
// // 1. глобальная - сверху всех функций, в самом начале объявляется
// // 2. любая конструкция с фигурными скобками  { } создает свою область видимости.и все const, let юудут доступны только в рамках этих скобок


// const a = 5;
// console.log("GLobal", a);       //ok   GLobal 5



// if (true) {
//     // console.log("Block", а);  //ok   Block 5  - ок, т.к. объявили над {}, выше
//     const b = 10;
//     console.log("Block b", b);   //Block b 10
// };

// console.log("GLobal b", b);   //err  "Uncaught ReferenceError: b is not defined"


//----------------------------
//----------------------------
//Цикли
//----------------------------
//----------------------------

// while

// do while

// for
//    break && continue

// //----------------------------
// // while (условие ) { тело цикла. итерации (одновыполнение шага)}
// // while () {}
// //----------------------------

// let a = 0;
// while (a < 5) {
//     // a + 1;
//     a++;        //это a+1
//     console.log("a",a);
// }

// let a = 3;
//// Условие (a)  - это и есть условие a>0. т.к. a=0 - это false Всегда. В условии цикла идет проверка true - false
// alert(a > 0);       //true
// alert(a == 0);      //false

// while (a) {
//     console.log("a", a);
//     a--;
// }

// let a = 3;
// //можно писать в одну строку цикл
// while (a) { console.log("a", a--); }

//  let a = 3;
// // и если ОДНО действие в цмкле - без фигурных скобок!!!---------------------------------
// while (a) console.log("a", a--);   //также отрабатывает



// //----------------------------
// // // do while  { тело цикла , итерации (одновыполнение шага)} ...(условие );
// // do { тело } while (условие)
// //----------------------------
// //06:30мин
// // do while -  сначала выполняется, потом проверяется условие
// // while - было наоборот, сначала проверяется условие, потом выполняется тело цикла


//   let a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a < 5);




//----------------------------
// // for{ тело цикла , итерации (одновыполнение шага)}
//----------------------------
//07:25мин
//перебор аргументов

// for (let a = 0;  // объявление и назначений начального значения аргумента;
//     i < 3; //условие
//     a++  //изменение аргумента
// )
//     {
//     тело - действия
// }
    
// for (let a = 0; a < 3; a++) {
//        console.log(a);
// }
// //0 1 2

// // а можно объявить раньше цикла
// let a = 0;

// // внутри условия цикла for в первой позиции -
// //     1.можно переназначить аргумент a,
// for (a = 1; a < 3; a++) {
//         console.log(a);
// }
// // 1 2
        
// //     // 2. можно воббще ничего не писать, но точку с запятой поставить
// let a = 0;
// for (; a < 3; a++) {
//     console.log(a);
// }
// //0 1 2

//     // 3. можно перенести наращивание- изменение аргумента  внутрь фигурных скобок {}, в тело цикла
//     // но - 2 точки с запятой в круглых скобках аргументов- условий должны быть:
// let a = 0;
// for (; a < 3;) {
//     a++;
//     console.log(a);
// }
// // 1 2 3            //внимание - с 1. сначала 0+1 =1.... Ну да - сначала же a++ а потом вывод

    
// //----------------------------
// //    break && continue
// //----------------------------
// //09:12мин
// // прервать выполнение цикла


// //    break------------------------------------------
// //----------------------------
// // пример.Задача -получать от пользователя цифры, пока не нажмет "отмена"

// let summ = 0;
// while (true) {
//     let value = +prompt("Введите число");
//     if (!value) break;

//     summ += value;  //summ = summ + value

//     // // //более длинный аналог summ += value; :
//     // let i = summ + value;
//     // summ = i;

//     // //так тоже работает!!!
//     // summ = summ + value;

// }

// console.log("Summ=",summ);      //  нажимали в каждом prompt 1 2 3   результат  Summ= 6


// // + перед prompt,!!!!! new-------------- иначе - конкатенация вводов
// // + перед prompt,!!!!! чтобы не было конкатенации строчек ввода
// //пример без + перед prompt
// let summ = 0;
// while (true) {
//     let value = prompt("Введите число");
//     if (!value) break;
//     summ += value;  //summ = summ + value
// }
// console.log("Summ=",summ);   //нажимали в каждом prompt 1 2 3   - результат: Summ= 0123


//if (!value) break;   new ---------------- прервать цикл  по esc при вводе с prompt
//if (!value) break;  если значение не true , не - это!.
    // "!value" в условии -  это означает нажали "отмена"!!!!
    //      т.к. когда нажимают "Отмена" - получаем false


// //---------- if (!value) break;   так прерывать цикл по отмене пользователем. Esc из alert, например. ИЛи кнопка ОТмена в prompt.apply


// // //    continue-----------------------------------------
// // //----------------------------
// // //11:40мин
// // continue - это облегченный break
// //      не прерывает весь цикл
// //      прерывает текущий шаг и продолжает цикл на следующем шаге и значении аргумента

// //пример - вывести нечетные. (остаток от деления на 2 <>0)
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;      //четные пропускаем
//     console.log(i);
// }

// //1 3 5 7 9



// //----------------------------
// //----------------------------
// //Масиви
// //----------------------------
// //----------------------------
// // //12:58мин

// // набор значений.значений.значений
// // Object - ненужен, там key и значение. Надо просто набор значений одномерный
// // прим - перечислить фрукты

// // Массив объявляется:
// // let arr=[];
// // let arr = [1, 2, 3, 4, 5];
// let arr = ["Apple", "Orange", "Plum"];

// // В массиве все элементы под интексами. от 0 и дальше.

// // вызывать чере индекс
// console.log(arr[1]);        //Orange
// console.log(arr[0]);        //Apple
// console.log(arr);           //Array(3) [ "Apple", "Orange", "Plum" ]

// //взаимодействие с миссивом
// //замена
// console.log("замена");
// console.log(arr[2]);        //Plum
// console.log(arr);           //Array(3) [ "Apple", "Orange", "Plum" ]
// arr[2] = "Lemon";
// console.log(arr);           //Array(3) [ "Apple", "Orange", "Lemon" ]
// console.log(arr[2]);        //Lemon

// //добавить
// console.log("добавить");
// arr[3] = "Cherry";
// console.log(arr);       //Array(4) [ "Apple", "Orange", "Lemon", "Cherry" ]

// //длина массива
// console.log(arr.length);    //4

// //в массиве м.б. разного типа элементы
// let arr2 = [1, "Hello", { key: "" }];
// console.log(arr2);
// //​Array(3) [ 1, "Hello", {…} ]
// // 0: 1
// // 1: "Hello"
// // 2: Object { key: "" }
// // length: 3


//  //16:09мин
// // очередь - первый, последний
// // можно добавлять в начало или в конец массиваю  ????
// // и удялть - с начала или с конца?????

// // с конца-------------push("что")   pop()----------------------------------
// // push("что") - добавляет элемент в конец массива
// console.log(arr);       //Array(4) [ "Apple", "Orange", "Lemon", "Cherry" ]
// arr.push("Tomat");
// console.log(arr);      //Array(5) [ "Apple", "Orange", "Lemon", "Cherry", "Tomat" ]

// //pop - удаляет последний.  pop() - без параметра.
// arr.pop();
// console.log(arr);    //Array(4) [ "Apple", "Orange", "Lemon", "Cherry" ]

// // с начала------------unshift()-add1  shift()-Del1  -----------------------------------
// // с первым элементом массива
// // shift() - удалить первый элемент
// console.log(arr);    //Array(4) [ "Apple", "Orange", "Lemon", "Cherry" ]
// arr.shift();
// console.log(arr);   //Array(3) [ "Orange", "Lemon", "Cherry" ]
// //- ушел первый "Apple"

// // unshift() - добавить первый элемент
// console.log(arr);    //Array(3) [ "Orange", "Lemon", "Cherry" ]
// arr.unshift("Tomat");
// console.log(arr);   //Array(4) [ "Tomat", "Orange", "Lemon", "Cherry" ]
// //- добавился первый "Tomat"

// //18:14мин
// //----------------
// //перебирать массив
// //----------------
// //1. циклом for  старый метод------------------
// console.log(arr);   // //Array(4) [ "Tomat", "Orange", "Lemon", "Cherry" ]
// console.log("Вывести массив");
// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// // Tomat script23.js:303:13
// // Orange script23.js:303:13
// // Lemon script23.js:303:13
// // Cherry
// // циклом for  старый метод

// //1. циклом for  новый  метод  for - item of-------
// console.log("Вывести массив item of");
// for (let item of arr) {
//     console.log(item);
// }

// // тот же вывод:
// // Tomat script23.js:314:13
// // Orange script23.js:314:13
// // Lemon script23.js:314:13
// // Cherry

// //20:42Мин
// // что плохого при выводе for - Off.Нет доступа к индексу.Толлко к текущему элементу

// // если нужен интдекс:
// console.log("Вывести массив for c доступом к индексу key");
// console.log(arr);   // Array(4) [ "Tomat", "Orange", "Lemon", "Cherry" ]

// for (let key in arr) {
//     console.log(key);
//     console.log(arr[key]);
// }
// // 0
// // Tomat
// // 1
// // Orange
// // 2
// // Lemon
// // 3
// // Cherry

// //------------------
// //т.е. item и key - зарезервированные слова?  НЕт  меняла на key1
// //item - of   - значение элемента массива
// //key - in   - индекс элемента массива

// //это не оч. хороший перебор
// // 21:28мин
// // Массивы могут срдержать внутри массивы

// let matrix = [
//     [1, 2, 3] ,
//     [4, 5, 6] ,
//     [7, 8, 9] ,
// ];
// //внимание - запятая после каждого элемента массива.
// //      и запятая после последнего элемента,
// //              перед закрывающей фигурной скобкой

// //ка добраться до цифры 5 как элемента массива
// //весь масссив:
// console.log(matrix);        //Array(3) [ (3) […], (3) […], (3) […] ]

// console.log(matrix[1]);        //Array(3) [ 4, 5, 6 ]
// console.log(matrix[0]);        //Array(3) [ 1, 2, 3 ]

// console.log(matrix[1][1]);        //5
// console.log(matrix[1][0]);        //4
// console.log(matrix[1][2]);        //6
// console.log(matrix[0][0]);        //1
// console.log(matrix[0][1]);        //2
// // [row][col]

// // и такая вложенность м.б. бесконечная.

// //22:46мин
// //----------------
// //сравнение массивов--------------------
// //----------------
// 5 == 5; // c приведением типов
// 5 === 5;

// console.log(5 == 5);        //true
// console.log(5 === 5);        //true
// console.log(5 =="5");        //true  - c приведением типов к одному
// console.log(5 === "5");        //false  - тип другой. без приведения типов сравнение

// // массивы нельзя сравнивать
// // ни ==
// // ни ===
// // можно сравнивать только одинаоквые по размерности массивы. Сначала это проверить.
// // Только перебирать и в переборе сравнивать каждый элемент



// //----------------------------
// //----------------------------
// // методы массива
// //----------------------------
// //----------------------------
// //23:11мин


// //----------------------------
// // 1.методы присвоения
// //----------------------------
// //разница между примитвными  и непримитивными типами - это как они сохраняются и копируются
// // примитивные типы копируются byValue  - по значению
// let a = 5;
// let b = a;
// console.log(b);        //5

// a = 10;
// console.log(b);        //5 т.к. его скопировали ПО ЗНАЧЕНИЮ
// console.log(a);        //10

// // сложные типы (объекты и массивы) копируются ПО ССЫЛКЕ byREf
// let arr1 = [1, 2, 3];
// let arr2_ = arr1;
// console.log(arr1);        //Array(3) [ 1, 2, 3 ]
// console.log(arr2_);        //Array(3) [ 1, 2, 3 ]


// arr1.push(4);
// console.log(arr1);        //Array(4) [ 1, 2, 3, 4 ]
// console.log(arr2_);       //Array(4) [ 1, 2, 3, 4 ]
// //оба одинаковые

// //итого:
// // примитивные типы копируются byValue  - по значению
// // сложные типы (объекты и массивы) клпируются по ссылке byREf




// //----------------------------
// // 2.методы присвоения
// //----------------------------
// //25:43мин
// let arr = ["a", "b", "c", "d", "f"];
// //----------------------------
// //удалить не крайние, средние.
// //----------------------------

// // - delete   - удаляет значение , ключ осталяет------------------------
// //----------------------------
// console.log(arr);       //Array(5) [ "a", "b", "c", "d", "f" ]
// delete arr[2];
// console.log(arr);       //Array(5) [ "a", "b", <1 empty slot>, "d", "f" ]

// // delete удалаил значение, ключ-индес остался.!!!!
// // поэтому с массивами так делать нельзя - удалять средний элемент с пом. delete!!!!!!!

// //----------------------------
// //         splice
// //----------------------------
// // //- splice(удалить с какого, сколько, полностью элемент)--------------------
// //----------------------------
// // let arr = ["a", "b", "c", "d", "f"];
// // console.log(arr);       //Array(5) [ "a", "b", "c", "d", "f" ]
// // arr.splice(2, 1);       //со 2-го элемента, 1 один удлаить
// // console.log(arr);       //Array(4) [ "a", "b", "d", "f" ]
// // //удален средний - и значение, и ключ.


// //----------------------------
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// // Метод splice() изменяет содержимое массива, удаляя существующие элементы и / или добавляя новые.
// //----------------------------
// //     array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// // Примеры
// // Удаляет 0 элементов по индексу 2 и вставляет "drum"
// var myFish = ["angel", "clown", "mandarin", "sturgeon"];
// var removed = myFish.splice(2, 0, "drum");
// // myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
// // removed равен [], ничего не удалено

// // Удаляет 1 элемент по индексу 3
// var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
// var removed = myFish.splice(3, 1);
// // removed равен ["mandarin"]
// // myFish равен ["angel", "clown", "drum", "sturgeon"]

// // Удаляет 1 элемент по индексу 2 и вставляет "trumpet"
// var myFish = ["angel", "clown", "drum", "sturgeon"];
// var removed = myFish.splice(2, 1, "trumpet");
// // myFish равен ["angel", "clown", "trumpet", "sturgeon"]
// // removed равен ["drum"]

// // Удаляет 2 элемента начиная с индекса 0 и вставляет "parrot", "anemone" и "blue"
// var myFish = ["angel", "clown", "trumpet", "sturgeon"];
// var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
// // myFish равен ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// // removed равен ["angel", "clown"]

// // Удаляет 2 элемента начиная с индекса 2
// var myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
// var removed = myFish.splice(myFish.length - 3, 2);
// // myFish равен ["parrot", "anemone", "sturgeon"]
// // removed равен ["blue", "trumpet"]

// // Удаляет 1 элемент по индексу -2
// var myFish = ["angel", "clown", "mandarin", "sturgeon"];
// var removed = myFish.splice(-2, 1);
// // myFish равен ["angel", "clown", "sturgeon"]
// // removed равен s ["mandarin"]

// // Удаляет все элементы после индекса 2 (включительно)
// var myFish = ["angel", "clown", "mandarin", "sturgeon"];
// var removed = myFish.splice(2);
// // myFish равен ["angel", "clown"]
// // removed равен ["mandarin", "sturgeon"]



// // - скопировать   ------------------------
// //----------------------------
// // //- slice (копирует с какого, по какой < (а не  <=) индексы (а не сколько!!!), полностью элемент)--------------------
// //           индекс 2 д.б. хотя бы на один больше индекс1!!!!!!!!!!. Иначе возвращается пусто
// //----------------------------
// // let arr = ["a", "b", "c", "d", "f"];
// // console.log(arr);       //Array(5) [ "a", "b", "c", "d", "f" ]
// // let arr2 = arr.slice(1, 2);
// // console.log(arr);       //Array(5) [ "a", "b", "c", "d", "f" ]
// // console.log(arr2);       //Array [ "b" ]  - почему 1 элемент - в параметрах 2???

// //slice  с индекс1 (счет с 0) по индекс2-1!!!!
// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr);                   //Array(5) [ "a", "b", "c", "d", "f" ]
// console.log(arr.slice(1, 3));       //Array [ "b", "c" ]  с 1 до  2 (3-1), не включая 3й. <3-го
// console.log(arr.slice(1, 2));       //Array [ "b" ]       с 1 до  1 (2-1), не включая 2й. <2-го

// // индекс 2 д.б. хотя бы на один больше индекс1!!!!!!!!!!. Иначе возвращается пусто
// console.log(arr.slice(1, 1));       //Array [ ]           с 1 до  1, не включая 1й. <1-го  .  т.е. пустой возврат
// arr.slice(2, 1));       //Array [ ]           с 2 до  1, не включая 1й. <1-го  .  т.е. пустой возврат

// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]
// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]
// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



// // //----------------------------
// // // //- конкатинация  arr.concat
// // //
// // //----------------------------
// // //28:16мин

// //с переменными можно так:
// let s = "test" + "RRR";
// console.log(s);     //testRRR
// //с массивами так (+) не работает

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// console.log(a + b);       //1,2,34,5,6
// // так (+) с массивами  не делают.

// //concat - создает новый массив.и добавляет в него переданные данные
// // //----------------------------
// let arr = ["a", "b", "c", "d", "f"];
// let a = [1, 2, 3];
// console.log(arr);                   //Array(5) [ "a", "b", "c", "d", "f" ]
// // arr.concat(a);
// console.log(arr.concat(a));         //Array(8) [ "a", "b", "c", "d", "f", 1, 2, 3 ]
// console.log(arr);                   //Array(5) [ "a", "b", "c", "d", "f" ]

// let arr = ["a", "b", "c", "d", "f"];
// let b = [4, 5, 6];

// console.log(arr);           //Array(5) [ "a", "b", "c", "d", "f" ]
// console.log(b);             //Array(3) [ 4, 5, 6 ]
// arr = arr.concat(b);
// console.log(arr);           //Array(8) [ "a", "b", "c", "d", "f", 4, 5, 6 ]

// let arr = ["a", "b", "c", "d", "f"];
// let b = [4, 5, 6];
//  console.log(arr);                   //Array(5) [ "a", "b", "c", "d", "f" ]
// let arrb = arr.concat(b);
//  console.log(arr);                   //Array(5) [ "a", "b", "c", "d", "f" ]
//  console.log(arrb);                  //Array(8) [ "a", "b", "c", "d", "f", 4, 5, 6 ]


//  //аргуметов у concat м.б. много и не только массивы
//   console.log(arr.concat(b, "test")); //Array(9) [ "a", "b", "c", "d", "f", 4, 5, 6, "test" ]



// // //----------------------------
// // // //- поиск по массиву
// // //
// // //----------------------------
// // //29:49мин


// 3 метода поиска  по массиву
// indexof
// lastindexof
// include


// indexof
//arr.indexOf(что, с какого индекса начинать)  - возвращает индекс 1-го найденного , слева направо (с начала)
// // //----------------------------

// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr.indexOf("c"));      //2

// //здесь 3 искомых - возвраил индекс 1-го
// let arr = ["a", "b", "c", "d", "f", "c", "f", "c"];
// console.log(arr.indexOf("c"));      //2

// //2й параметр - с какого индекса  начинать поиск
// let arr = ["a", "b", "c", "d", "f", "c", "f", "c"];
// console.log(arr.indexOf("c", 2));      //2
// console.log(arr.indexOf("c", 3));      //5
// console.log(arr.indexOf("c", 6));      //7

// let arr2 = ["a", "b", "c", "d", "f"];
// console.log(arr2);
// console.log(arr2.indexOf("c", 3));      // нет после 3 такого - не найдет. возврат -1

// // //30:32мин

// lastIndexOf
//arr.lastIndexOf(что, с какого индекса начинать)  - возвращает индекс 1-го найденного с конца массива
// // //----------------------------
// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr.lastIndexOf("c"));      //2

// let arr = ["a", "b", "c", "d", "f", "c", "f", "c"];
// console.log(arr.lastIndexOf("c"));      //7
// console.log(arr.lastIndexOf("d", 5));   //3

// let arr = ["a", "b", "c", "d", "f", "d", "f", "c"];
// console.log(arr.lastIndexOf("d", 5));   //5
// console.log(arr.lastIndexOf("d", 6));   //5
// console.log(arr.lastIndexOf("d", 4));   //3
// console.log(arr.lastIndexOf("d", 2));   //-1

// // //30:50мин
// includes
// // //----------------------------
//arr.includes(что, с какого индекса начинать)  - возвращает true- false. Есть- нет искомое в массиве.
//        с заданного индекса, если указано
// // //----------------------------

// let arr = ["a", "b", "c", "d", "f", "c", "f", "c"];
// console.log(arr.includes("c"));       //true
// console.log(arr.includes("cf"));      //false
// console.log(arr.includes("c", 6));       //true
// console.log(arr.includes("d",6));       //false


// // // //31:00мин
// // find
// // // //----------------------------
// const fruts = [
//     { id: 0, name: "Apple" },
//     { id: 1, name: "Tomat" },
//     { id: 2, name: "Cherry" },
//     { id: 3, name: "Orange" },
// ];

// // //поиск по id - name
// // console.log(fruts.find((item) => item.id === 2));       //Object { id: 2, name: "Cherry" }
// // console.log(fruts.find((item) => item.id === 1));       //Object { id: 1, name: "Tomat" }
// // // минус find - ищет только превое вхождение.
 


// // // //32:46мин
// // filter
// // // //----------------------------
// //поиск всех вхождений искомого в массиве
// console.log(fruts.filter((item) => item.id > 2));       //Array [ {…} ]
//                                                         //Object { id: 3, name: "Orange" }
//                                                         //length: 1

// console.log(fruts.filter((item) => item.id < 2));       // Array [ {…}, {…} ]
//                                                         // ​0: Object { id: 0, name: "Apple" }
//                                                         // ​1: Object { id: 1, name: "Tomat" }
//                                                         // ​length: 2

// const fruts2 = [
//     { id: 0, name: "Apple" },
//     { id: 1, name: "Tomat" },
//     { id: 2, name: "Cherry" },
//     { id: 3, name: "Orange" },
//     { id: 4, name: "Apple" },
//     { id: 5, name: "Tomat" },
// ];
// console.log(fruts2.filter((item) => item.name == "Apple"));       // Array [ {…}, {…} ]
//                                                                 // ​0: Object { id: 0, name: "Apple" }
//                                                                 // ​1: Object { id: 4, name: "Apple" }
//                                                                 // ​length: 2

// console.log(fruts2.filter((item) => item.name == "Asgsgpple"));       // Array [] ​length: 0


// // // //33:30мин
// // map
// // // //----------------------------
// // самый часто использ.
// //вызывает функцию для каждого элемента массива и возвращает массив с результатами


// const fruts = [
//     { id: 0, name: "Apple" },
//     { id: 1, name: "Tomat" },
//     { id: 2, name: "Cherry" },
//     { id: 3, name: "Orange" },
// ];
// //длина всех элементов
// let result = fruts.map((item) => item.name.length);
// console.log(result);        //Array(4) [ 5, 5, 6, 6 ]

// //  чаще map использ. для отрисовки - все фотки, всех item...



// // // //34:33мин
// // split
// // // //----------------------------
// //задача: есть строка с именами. С ними надо сделать что-то.
// //удобнее работать с массивом. ПОэтому преобразуем строку в массив
// let names = 'Оля, Юля, Аня, Петя';
// let arr = names.split(", ");
// console.log(names);         //Оля, Юля, Аня, Петя
// console.log(arr);           //Array(4) [ "Оля", "Юля", "Аня", "Петя" ]
//                                 // ​0: "Оля"
//                                 // ​1: "Юля"
//                                 // ​2: "Аня"
//                                 // ​3: "Петя"
//                                 // ​length: 4

// // наоборот. Из массива сделать строку  - join
// // // join
// // // // //----------------------------
// //параметр - что БУДЕТ разделать в строке элементы из массива
// let newString = arr.join(" +");
// console.log(newString);     //Оля +Юля +Аня +Петя
// let newString2 = arr.join(", ");
// console.log(newString2);     //Оля, Юля, Аня, Петя



// // // //36:40мин
// // reduce
// // // //----------------------------
// надо рассчитать одно значение на основе всего массива
//сумма, например
// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((sum, item) => sum + item);
// // sum - аккумулятор, куда результат
// console.log(red);       //15


// // найти среднее
// let arr2 = [23, 45, 30];
// let summ = arr2.reduce((sum, item) => sum + item)/arr2.length;
// console.log(summ);  //32.666666666666664

// // // //39:51мин
//Это основные - есть много др. методов работы с массивами
// в библиотеках.
//google