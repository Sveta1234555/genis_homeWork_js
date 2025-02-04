// Домашнє завдання
// 7 mod27
// ----1---­

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:

// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

function Calculator {
  constructor(options1, options2) {
    this.value1 = options1;
    this.value2 = options2;
    // this.phone = options.phone;
  }
  value1 = "";
  value2 = "";

  read(valueGet) {
    let value1 = prompt("Введите число 1");
    let value2 = prompt("Введите число 2");

  }

  sum() {
    this.$el.style.display = "block";
  }

    mul() {
    this.$el.style.display = "block";
  }
  
  // set namePhone(newNamePhone) {
  //   const rowBook = newNamePhone.split(" ");
  //   //после split получим массив
  //   this.name = rowBook[0];
  //   this.phone = rowBook[1];
  // }

  // get namePhone() {
  //   return ` Abonent book  name : ${this.name} , phone: ${this.phone}`;
  // }
}

const abonent1 = new Abonent({
  namePhone: "Dmitro 1111111111",
});

const abonent2 = new Abonent({
  namePhone: "Alex 2222222222",
});

const abonent3 = new Abonent({
  namePhone: "Irina 3333333333",
});

console.log(abonent1); //Object { name: "Dmitro", phone: "1111111111" }
//get:
console.log(abonent1.namePhone); // Abonent book  name : Dmitro , phone: 1111111111
console.log(abonent2.namePhone); // Abonent book  name : Alex , phone: 2222222222
console.log(abonent3.namePhone); // Abonent book  name : Irina , phone: 3333333333
