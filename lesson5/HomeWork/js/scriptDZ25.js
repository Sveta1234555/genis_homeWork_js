// // //Домашнє завдання 5 mod25.
// // // this

// Домашнє завдання к мод25 this
// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

const student = {
  name: "Ivan",
  speciality: "developer",
  GPA: "4",
  missedClasses: 50,
  logInfo: function () {
    console.group(`${name} info:`);
    console.log(`Name is : ${this.name}`);
    console.log(`speciality is : ${this.speciality}`);
    console.log(`GPA is : ${this.GPA}`);
    console.log(`MissedClasses is : ${this.missedClasses}`);
    console.groupEnd();
  },
};

student.logInfo.bind(student)();
// info:
// Name is : Ivan
// speciality is : programmer
// GPA is : 4
// MissedClasses is : 50

//--------------------------------------
const showStudent = {
  name: "Ivan",
  speciality: "developer",
  GPA: "4",
  missedClasses: 50,
  logInfo: function (GPA, missedClasses) {
    console.group(`${name} info:`);
    console.log(`Name is : ${this.name}`);
    console.log(`speciality is : ${this.speciality}`);
    console.log(`GPA is : ${GPA}`);
    console.log(`MissedClasses is : ${missedClasses}`);
    console.groupEnd();
  },
};

const student2 = {
  name: "Anna2",
  speciality: "cook",
  //   GPA: "3.9",
  //   missedClasses: 25,
};

const student3 = {
  name: "Nata3",
  speciality: "lawyer",
};

const student4 = {
  name: "Niko4",
  speciality: "psychologist",
};

showStudent.logInfo.bind(student, "5", "50")();
showStudent.logInfo.bind(student2, "6", "25")();
showStudent.logInfo.call(student3, "5", "30");
showStudent.logInfo.apply(student4, ["4", "35"]);

// // --2--
// // Написати дві кнопки і закріпити на них функції
// // при натисканні на кнопку html - має видати коротке визначення що це таке
// // при натисканні на кнопку css - має видати коротке визначення що це таке
const cart = {
  showItems() {
    console.log("Що це таке: ", this.items);
    console.log("Що це таке: ", this.name + " - " + this.help);
  },
};

const html = {
  items: ["html,  що це таке1"],
  name: "HTML",
  help: " (від англійської HyperText Markup Language) - це мова гіпертекстової розмітки тексту. Він потрібен, щоб розміщувати на веб-сторінці елементи: текст, зображення, таблиці та відео.",
};

const css = {
  items: ["css,  що це таке2"],
  name: "CSS",
  help: " це мова опису зовнішнього вигляду документа, тобто вона відповідає за те, як виглядають веб-сторінки: колір фону та декоративних елементів, розмір та стиль шрифтів. Термін розшифровується як Cascading Style Sheets (каскадні таблиці стилів).",
};
//присоединяем вызов на кнопки , по id
document
  .querySelector("#htm")
  .addEventListener("click", cart.showItems.bind(html));

document
  .querySelector("#css")
  .addEventListener("click", cart.showItems.bind(css));

// // --3-­
// // Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// // функція має повертати назву товару і вартість

// // перевірити на варіантах:
// // 1) banana 30, 4,5
// // 2) cherry 58, 1,3
// // 3) jrange 89. 3,4
