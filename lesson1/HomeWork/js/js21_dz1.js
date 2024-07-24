// Домашня робота
// //***1***
// // Робота зі змінними
// // Оголосіть дві змінні: name та city.
// // Присвойте значення "Іван" змінній name.
// // Скопіюйте значення зі змінної name в city.
// // Виведіть значення змінної city, використовуючи функцію console.log (яка
// // повинна показати “Іван”).

// let name = "Іван";
// let city = name;
// // let city = `${name}`;
// // city = name;
// console.log(city);  //Іван

// //***2***
// //Який буде результат виконання скрипта?
// // let name = "Olga";
// // console.log(`привіт ${1}`); //
// // console.log(`привіт ${"name"}`); //
// // console.log(`привіт ${name}`); // ?

// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); //привіт name
// console.log(`привіт ${name}`); //привіт Olga


// // ***3***
// // Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";


// let an = Number(a);
// console.log(typeof (a));    //string
// console.log(typeof (an));   // number
// console.log(an);            // 5
// console.log(Number(a));     // 5


// console.log(Number(b));             // NaN
// console.log(Number.parseInt(b));    //13
// console.log(Number.parseFloat(b));  //13
// let bn = Number.parseInt(b);
// console.log(bn);                    //13


// console.log(Number(c));             // NaN
// console.log(Number.parseInt(c));    //12
// console.log(Number.parseFloat(c));  //12.9
// let cn = Number.parseFloat(c);
// console.log(cn);                    //12.9
// console.log(typeof (cn));           //number

// // вивести в консоль тип
// console.log(`an=` + an + ` ` + typeof (an));           //an=5 number
// console.log(`bn=` + bn + ` ` + typeof (bn));           //bn=13 number
// console.log(`cn=` + cn + ` ` + typeof (cn));           //cn=12.9 number

// // ***4***
// // Зробіть, щоб 0.1 + 0.2 = 0.3
// console.log((0.1*10 + 0.2*10)/10);                          //0.3
// console.log(`0.1 + 0.2 = ` + (0.1*10 + 0.2*10)/10);         //0.1 + 0.2 = 0.3


// //***5**
// //Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20,10,50,40));         //50


// //***6**
// //Поверніть випадкове число в діапазоні від 2 до 4
//  console.log(Math.random()*(4-2)+2);


// //***7**
// //дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);                                //19
// console.log(`Довжина message = "Welcome to Bahamas!" : ` + message.length);        //Довжина message = "Welcome to Bahamas!" : 19


// //***8**
// //вивести в консоль message великими літерами
// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());         //WELCOME TO BAHAMAS!


// //***9**
// // створити пустий об*єкт
// // додати туди ім*я, вік і місто
// // вивести результат в консоль
// // видалити місто
// // додати буль з ключем: like flowers
// // вивести результат в консоль



// // створити пустий об*єкт
// let user = {};  
// // додати туди ім*я, вік і місто
// user.name = "Mikle";
// user.age = 45;
// user.city = "Berlin";
// // вивести результат в консоль
// console.log(user);   //Object { name: "Mikle", age: 45, city: "Berlin" }
// // видалити місто
// delete user.city;
// console.log(user);   //Object { name: "Mikle", age: 45 }
// // додати буль з ключем: like flowers
// user["like flowers"] = true;
// // вивести результат в консоль
// console.log(user);   //Object { name: "Mikle", age: 45, "like flowers": true } 
  



// //***10**
// // За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта
// for (let key in user) {
//    // console.log(code);
//     console.log(key + ": "+ user[key]);
// }

// // name: Mikle
// // age: 45 
// // like flowers: true 