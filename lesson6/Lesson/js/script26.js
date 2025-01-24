//----------------------------
//----------------------------
// js mod26
// -  ООП
//----------------------------
//----------------------------

// ПРоцедурное программирование-----------------------
// расчитать сумму кредита
const summ = 20000; //сумма кредита
const month = 12; //на скольк омесяцев
const p = 1000; //сколько платить в месяц

const credit = (sum, date, p) => {
  return sum + p * date;
};

//передаем отдлеьные значения, которые лежат отдельно
console.log(credit(summ, month, p)); //32000

// это пример процедурного программирования.
// все данные лежат отдельно
// мы их используем так, как нам надо.
// Потом эти данные можно вноить в жругую ф - ю
// Или эту ф-ю использовать с др. данными (которые между собой никак не связаны).

// Объектоно- ориентированное  программирование-----------------------
const credit_oop = {
  summ: 20000,
  month: 12,
  p: 1000,
  result() {
    return this, this.summ + this.p * this.month;
  },
};

// вызов
console.log(credit_oop.result()); //32000

// такая разница между процедцрным и ООП
// Можно писать и так и так.
//   Чаще - процедурно будете писать.
// Иногда удобно сделать ООП - методом.
// Прммер - корзина в интернет-магазине. Лежат все методы и данные , они нигде не рзбросаны

//====================================================================
// теория ООП:=========================================================
// Автомобиль - колса, руль,
//   ездит, поворачивает
// взаимодействуют водитель с авто, запчасти между собой.

// --Классы==================
//   Классы - это схема.Схема того, из чего должен состоять автомобиль
// Чтоб должно с чем взаимодействовать.
// Чтоб дложен сделать водитель, чтобы поехало авто.
// Это вся схема - это классы в ООП.
// В клссе описываем общую схему того, из чего будет состять.

// Свойства класса автомобиль - двигатель, колеса.
//   Методы - едет, открываются двери, томозит.

// --ОБъекты==================
// есть схема.По ней выпускают много рзаных машин.Они все строятся по этой схеме.
// Но у них разный цвет, номера кузова, др.детали.
//   ОБъеект - экземпляр класса.
// Что по этой схеме получилось.
// Дали классу данные(металл, стекло), и по это схеме  собрали объект.

// --интерфейс (методы)==================
// Интерфейс - это набор методов класса для раоты с объектом(экзмепляром класса).
// Интерфейс специализирует класс, четко показывая возможные действия с ним.
//   Например, в машине есть руль, приборна панель.Мы можем увеличить скорость, велючить фары, заблокировать двери ...

// т.е. Интерфейс - это методы взаимодействия.

// --интерфейс (методы)==================
// ООП стоит на 4х основных понятиях
// Инкапсуляция абстракция наследования полифмофизм
// На примере мобильного телефона

// -Инкапсуляция------------------
// Инкапсуляция - это свойство системы, которая позволяет объединить методы и данные,
//   работая с ними в классе,
//   и спрятать детали реализации отпользователя.
//     КОгда звоним по телефону  не думаем про микросхемы и проводочки в этот момент взаимодействуют.

// -Абстракция------------------
// Абстракция - способ выделить значимые данные объекта и не рассматривать незначимые(неважные)
// ДЛя нас в тедефоне важно - какая камера, сколько памяти.
// и не думаем про химический состав панельки.

// -Наследование------------------
// Наследование - свойство систепмы, позволяющая описать новый класс на основе существющего.
//   И частично или полностью скопировать функционал.И добавить что - то новое свое.
// На айфонах.Был 7, 8 айфон.Сделали так - повторили все от 7 - го,
//   добавили новые детали.И так далее со следующими моделями.

// -Полиморфизм------------------
// Полиморфизм - свойство, которая позовляет использовать  объекты  с одинаковым интерфейсом
// без информации про внутреннюю структуру объекта.
// есть андроиды, есть афйоны и др..
// если взять другой тип телефона, мы сможем отправить с него сообщение, позвонить , исполльзовать основные функции...

// 12: 36 мин
// Это все для техн. собеспдования , в ежедневной разработке об этом не думаешь.

//====================================================================
// класс-----------------
// Учимся работать с классами.
// Как создаются классы.
// класс -это схема.console

// сделаем схему кредита и будем выдавать его каждому.
//************************** */
//класс всегда пишется с большой буквы!!!!
//добавляют конструктор, в него передаем опции
class Bank {
  constructor(options) {
    this.summ = options.summ;
    this.month = options.month;
    this.p = options.p;
  }
  credit() {
    return console.log(this, this.summ + this.p * this.month);
  }
}

// сделали класс (схему).Bank
//Теперь выдаем кому - то кредит
// Наследуем от bank
//объектом {} внутри круглых скобок () передаем значение
const userBank = new Bank({
  summ: 30000,
  month: 5,
  p: 500,
});

console.log(userBank); //Object { summ: 30000, month: 5, p: 500 }

// Object { summ: 30000, month: 5, p: 500 }
// month: 5
// p: 500
// summ: 30000
// <prototype>: Object { … }
// ​constructor: class Bank { constructor(options) }
// ​length: 1
// ​​name: "Bank"
// ​​prototype: Object { … }
// ​​<prototype>: function ()
// ​<prototype>: Object { … }

// Выдача результата в консоли браузера
//   (урок chrome отличается от моего firefox, см.рис.)
// у меня        первое слово Object
//  в уроке chrome первое слово Bank
// 6_classBank_my.png, 6_classBank.png, 6_classBankшире.png
// 15:42 мин
// по выдаче в уроке это первое слово bank означает
// означает, что
// 1.этот объекта - наследник класса Bank
// 2. в выдаче , ы объекте есть все данные (поля)
// 3. в выдаче есть prototype  (6_classBankшире.png), где есть методы

// дописываем в определение класса Bank, под constructor-ом
// метод, который будет определять весь кредит credit()
// в вызов дописываем эту ф - ю credit

// было тав:
console.log(userBank); //Object { summ: 30000, month: 5, p: 500 }
// в вызов дописываем эту ф - ю credit из класса Bank. можно так
console.log(userBank.credit); //function credit()  вернуло ф-ю саму, ане ее выполнение- значение

// но нам надо вызвать так: (дописали console.log в ф-ю credit в классе Bank)
userBank.credit(); //32500     (я - вернуло  не объект (как раньше), а число. Это в уроке)
// см. 6_classBank_credit.png

// А у меня вернуло и обект, и после него это число:
// Object { summ: 30000, month: 5, p: 500 }  32500
// см.6_classBank_credit_my.png

// Хотя, в const UserBank эта ф-я credit не использована(нет  в тексте const...этой ф-ции credit )
// но мы ее наследовали, когд создавали объект(const userBank = new Bank) из класса (class Bamk)
// Мы наследовали те методы, которые описаны вв этом классе базовом Bank.
// Мы можем использовать ф-ции  базового класса Bank .
//( я  -В объектах, прим.const UserBank = new Bank(экземплярах класса), созданных на базе него)
// 17:20 мин
