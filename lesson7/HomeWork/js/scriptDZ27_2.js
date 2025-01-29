// Домашнє завдання
// 7 mod27
// ----1---­

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:

// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

function Calculator(arg) {
  this.c = {
    // новые значения из prompt будут здесь (в this.c)
    a: arg.a,
    b: arg.b,
  };
}

// Определяем функции на прототипе
Calculator.prototype.readPrototype = function () {
  //"+"" преобразует его в число
  this.c.a = +prompt("Введите первое значение:", this.c.a); // Запрашиваем первое значение и сохраняем в c.a
  this.c.b = +prompt("Введите второе значение:", this.c.b); // Запрашиваем второе значение и сохраняем в c.b
};

Calculator.prototype.sumPrototype = function (c) {
  return Number(this.c.a) + Number(this.c.b); // Возвращаем сумму значений
};

Calculator.prototype.mulPrototype = function () {
  return Number(this.c.a) * Number(this.c.b); // Возвращаем произведение значений
};

const calc1 = new Calculator({ a: 4, b: 10 });
//при таком объявлении исходные переменные останутся неизменными в c2.
//новые значения будут в this.c
// const c2 = {
//   a: 5,
//   b: 7,
// };
// const calc1 = new Calculator(c2);
calc1.readPrototype();
console.log("Сумма calc1:", calc1.sumPrototype(calc1.a, calc1.b));
console.log("Произведение calc1:", calc1.mulPrototype(calc1.a, calc1.b));
