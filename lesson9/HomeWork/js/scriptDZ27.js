// Домашнє завдання
// 7 mod27
// ----1---­

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:

// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

class Calculator {
  constructor(arg) {
    // новые значения из prompt будут здесь (в this.c)
    this.a = arg.a;
    this.b = arg.b;
  }
}

// Определяем функции на прототипе
Calculator.prototype.readPrototype = function () {
  //"+"" преобразует его в число
  this.a = +prompt("Введите первое значение:", this.a); // Запрашиваем первое значение и сохраняем в c.a
  this.b = +prompt("Введите второе значение:", this.b); // Запрашиваем второе значение и сохраняем в c.b
};

Calculator.prototype.sumPrototype = function () {
  return Number(this.a) + Number(this.b); // Возвращаем сумму значений
};

Calculator.prototype.mulPrototype = function () {
  return Number(this.a) * Number(this.b); // Возвращаем произведение значений
};

const calc2 = new Calculator({ a: 6, b: 8 });
calc2.readPrototype();
console.log("Сумма calc2:", calc2.sumPrototype(calc2.a, calc2.b));
console.log("Произведение calc2:", calc2.mulPrototype(calc2.a, calc2.b));

// const calc1 = new Calculator({ a: 4, b: 10 });
// //при таком объявлении исходные переменные останутся неизменными в c2.
// //новые значения будут в this.c
// // const c2 = {
// //   a: 5,
// //   b: 7,
// // };
// // const calc1 = new Calculator(c2);
// calc1.readPrototype();
// console.log("Сумма calc1:", calc1.sumPrototype(calc1.a, calc1.b));
// console.log("Произведение calc1:", calc1.mulPrototype(calc1.a, calc1.b));
