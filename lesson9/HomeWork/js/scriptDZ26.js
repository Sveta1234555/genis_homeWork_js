// Домашнє завдання
// 6 mod26

// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон  і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
  constructor(options) {
    this.namePhone = options.namePhone;
    // this.phone = options.phone;
  }
  name = "";
  phone = "";

  set namePhone(newNamePhone) {
    const rowBook = newNamePhone.split(" ");
    //после split получим массив
    this.name = rowBook[0];
    this.phone = rowBook[1];
  }

  get namePhone() {
    return ` Abonent book  name : ${this.name} , phone: ${this.phone}`;
  }
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
