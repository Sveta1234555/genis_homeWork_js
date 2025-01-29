// Домашнє завдання
// 7 mod27
// ----1---­

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:

// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

function C(a = 0, b = 0) {
  this.a = a; // Инициализируем значение a
  this.b = b; // Инициализируем значение b
}

function Calculator(initialC) {
  // Если initialC передан и является объектом, используем его, иначе создаем новый объект c внутри Calculator
  this.c = initialC instanceof C ? initialC : new C();
}

// Определяем функции на прототипе, принимающие объект c как параметр
Calculator.prototype.read = function (c) {
  c.a = +prompt("Введите первое значение:", c.a); // Запрашиваем первое значение и сохраняем в c.a
  c.b = +prompt("Введите второе значение:", c.b); // Запрашиваем второе значение и сохраняем в c.b
};

Calculator.prototype.sum = function (c) {
  return c.a + c.b; // Возвращаем сумму значений
};

Calculator.prototype.mul = function (c) {
  return c.a * c.b; // Возвращаем произведение значений
};

// Пример использования 1: Создание Calculator с внутренним объектом C по умолчанию
const calculator1 = new Calculator(); // Не передаем initialC, создается внутренний C
console.log("Исходные значения calculator1.c:", calculator1.c); // Выводим исходные значения по умолчанию
calculator1.read(calculator1.c);
console.log("Сумма calculator1:", calculator1.sum(calculator1.c));
console.log("Произведение calculator1:", calculator1.mul(calculator1.c));

// Пример использования 2: Создание Calculator с переданным объектом C
const externalC = new C(15, 20); // Создаем объект C вне Calculator
const calculator2 = new Calculator(externalC); // Передаем externalC в Calculator
console.log("Исходные значения calculator2.c:", calculator2.c); // Выводим переданные значения
calculator2.read(calculator2.c); // read будет работать с переданным externalC
console.log("Сумма calculator2:", calculator2.sum(calculator2.c));
console.log("Произведение calculator2:", calculator2.mul(calculator2.c));
