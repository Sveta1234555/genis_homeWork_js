// Домашнє завдання
// 8 mod28 DOM

// Домашнє завдання
// -----1-----
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
//   </html>

// Вибираємо елемент з атрибутом data-widget-name
const element = document.querySelector("[data-widget-name]");

// Читаємо значення атрибута data-widget-name
const widgetName = element.getAttribute("data-widget-name");

//getAttribute - уже готового найденного объекта-элемента ищет! (поэтому так не находит)
const widgetNameBody = document.body.getAttribute("data-widget-name"); //null
const widgetNameBody_ = document.body.getAttribute("[data-widget-name]"); //null

// Виводимо значення в консоль
console.log(element); //  объект div
console.log(widgetName); //  "menu"

// Читаємо текстове вміст элементу
const textContent = element.textContent; // або element.innerText;

// Виводимо значення в консоль
console.log(textContent); // Виведе: "Виберіть жанр"
console.log(element.innerHTML); // Виведе: "Виберіть жанр"
console.log(element.innerText); // Виведе: "Виберіть жанр"
console.log("---------------");

console.log("--нет-------------");
var atr = document.getElementsByName("menu"); //  объект atr: NodeList []  , но длина 0
// console.log(atr[0].tagName); // err (atr[0]  undefined)

console.log("--по name=menuName-------------");
var atrName = document.getElementsByName("menuName"); //объект длина 1
console.log(atrName[0].tagName); // DIV
console.log(atrName[0].textContent); // Виберіть жанр

console.log("--по sveta=isveta-----нет--------");
var atrSveta = document.getElementsByName("isveta"); //объект длина 0
// console.log(atrSveta[0].tagName); // err
// console.log(atrSveta[0].textContent); // err

console.log("--по sveta=isveta-----да--------");
const elementSveta = document.querySelector("[sveta]");
const Sveta = elementSveta.getAttribute("sveta");
console.log(elementSveta.innerHTML); // Виведе: "Виберіть жанр"
console.log(elementSveta.innerText); // Виведе: "Виберіть жанр"

console.log("--по sveta=isveta ----- getElementsByName-----тоже нет--------");
const elSveta = document.getElementsByName("isveta"); //объект длина 0 , по атрибуту name в INPUT - нашел, а по атрибуту sveta - нет
console.log(elSveta.tagName); //undefined
console.log(elSveta.textContent); //undefined
console.log(elSveta.innerText); //undefined

console.log("--INPUT-------getElementsByName----да---------");
var up_names = document.getElementsByName("up"); //по итрибуту name - нашел
console.log(up_names[0].tagName); // displays "INPUT"
