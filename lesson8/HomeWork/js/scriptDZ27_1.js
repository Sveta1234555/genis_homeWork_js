// Домашнє завдання
// 7 mod27
// ----1---­

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:

// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

const Calculator = function (a, b) {
  this.a;
  this.b;
};

Calculator.prototype.readPrototype = function () {
  let a = 0;
  let b = 0;
  this.a = prompt("Введите первое значение:", Number(a)); // Запрашиваем первое значение и сохраняем в c.a
  this.b = prompt("Введите второе значение:", b); // Запрашиваем второе значение и сохраняем в c.b
};

Calculator.prototype.sumPrototype = function (a, b) {
  return Number(a) + Number(b); // Возвращаем сумму значений
};

Calculator.prototype.mulPrototype = function (a, b) {
  return Number(a) * Number(b); // Возвращаем произведение значений
};

const calc1 = new Calculator(5, 7);
calc1.readPrototype();
// console.log(calc1.readPrototype());
console.log("Сумма calc1:", calc1.sumPrototype(calc1.a, calc1.b));
console.log("Произведение calc1:", calc1.mulPrototype(calc1.a, calc1.b));
