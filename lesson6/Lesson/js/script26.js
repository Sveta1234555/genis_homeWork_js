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
//
// https://uk.javascript.info/private-protected-properties-methods
// Відокремлення внутрішнього інтерфейсу від зовнішнього називається інкапсуляція.
// // Якщо користувач класу ззовні змінить речі, які не повинні бути змінені – наслідки непередбачувані.
// Якщо ми суворо відокремимо внутрішній інтерфейс, то розробник класу може вільно змінювати свої внутрішні властивості та методи, навіть не повідомляючи користувачів.
// Якщо ви розробник такого класу, це чудово знати, що
//приватні методи можуть бути безпечно перейменовані,
//а їх параметри можуть бути змінені та навіть видалені, оскільки зовнішній код від них не залежить.

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
  // static type = "bank";
  static type = "Privat";
  constructor(options) {
    this.summ = options.summ;
    this.month = options.month;
    this.p = options.p;
  }
  credit() {
    // return console.log(this, this.summ + this.p * this.month);
    return console.log("I am Privat");
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

// что еще можем задать в классе:
// статичные данные
// добавляем в class Bank первой строку static type ="bank"

//вызываем userBank.type
console.log(userBank.type); //undefined  (не вызвался)
//undefined. т.к. статичные данные static вызываются только из самого класса
// а не из объектов, которые его наследуют.
// т.е. значение static можно вызвать из класса  Bank, а не объекта (экземпляра класса ) userBank.
console.log(Bank.type); //bank (ок - из самого класса вызвался)

//  18:06 мин
// сделан объект userBank.   закомментировали его
// можно наследовать класс
// (на примере - как выходит новая модель айфона)
// static type="bank" меняем на static type="Privat" выше, в  class Bank
//типа, " открываем новый банк"
// пишем "class newName extends",  он должен полностью скопировать предыдущий базовый класс Bank
class NewBank extends Bank {
  constructor(options) {
    super(options);
    this.card = options.card;
  }
  credit() {
    super.credit(); //чтобы оставить метод со значеннием базового класса
    return console.log("I am Aval");
  }
}

// В новом банке появится лополнитеьлное новое поле.
// Для этого
// пишем фигурных скобках constructor...
//Делаем объект из нового класса. поля берем все из предыдущего объекта. И добавляем новое поле card

const aval = new NewBank({
  summ: 60000,
  month: 6,
  p: 600,
  card: true,
  // //Значение метода credit - 3-е выводимое знаение вызовом "console.log(aval.credit());"
  // // думала, с этим - напишет НЕ "undefined" в 3-й строке вывода "console.log(aval.credit());"
  // // а значение summ.  а НЕТ!!! все равно undefined!!!
  // credit() {
  //   return aval.summ;
  //   // return this.summ;
  // },
});

//выводим
console.log(aval.card); //error
// Uncaught ReferenceError: must call super constructor before using 'this' in derived class constructor

// ПРичина error:
// когда наследуем класс от класса, надо скопировать весь его предыдущий конструктор.
// с пом. "super(options)"
// У базового класса Bank были options в конструкторе constructor  (this.поля),
// // class Bank {
// //   // static type = "bank";
// //   static type = "Privat";
// //   constructor(options) {
// //     this.summ = options.summ;
// //     this.month = options.month;
// //     this.p = options.p;
// //   }

// И скопировав предыдущие options (из базового класса Bank), сможем менять  следующие, в классе-наследнике NewBank
// передаем эти options с пом. "super(options)"
// class NewBank extends Bank {
//   super(options);

// У базового класса Bank была формула,
//   credit() {
//     return console.log(this, this.summ + this.p * this.month);
//   }
//    но для простоты пока пишем (меняем в class Bank) просто символьную строку вместо формулы.
// return console.log("I am Privat");

// теперь "console.log(aval.card);" выдала true, как и назначили в объектк нового наследованного класса NewBank  а не //error
console.log(aval.card); //true     //ок вызвался то, что назначили выше в обхекте aval

//у нового банка aval (объекта aval, экземпляра наследованного класса NewBank от базового класса Bank)
// вызываем метод credit (мы там у базового поменяди формулу на текст "I am Priat")
console.log(aval.credit); //пишет function credit() - это не вызов, это только получли эту ф-ю
//надо скобочки добавить после credit, чтобы вызывать и поучить значение
console.log(aval.credit()); //I am Privat

//т.е отразил значение метода базового класса
// т.е. из объекта aval, как экземпляра наследованного класса NewBank от базового класса Bank,
//   вызвалось значение метода credit первого базового класса Bank
//   (именно класса Bank, а не его объекта (не объекта userBank базового класса Bank) )
// "I am Privat"
//Но у нас новый банк. "aval"
// для этого меняем методы нового банка aval (объекта наследованного класса NewBank)
// меняем метод не  объекта aval, а метод в наследованном классе NewBank

// классы, которые наследуют , могут перезаписывать родительские методы
// Дописали в class NewBank метод credit  с другим текстом
// credit() {
//     return console.log("I am Aval");
//   }

// теперь вызов метода credit объекта aval (наследованного класса newBank от базового класса Bank)
//выдаст значение метода credit наследованного класса NewBank (чей экземпляр класса и есть объект aval)
console.log(aval.credit()); //I am Aval

//21:58 Мин
// если хотим чтобы оставить и родительские методы, и новые дописать------------
// тогда в метод credit наследоанного класса NewBank Пишем
// super()
// но не вызываем его, а пишем "super.credit()"  .см. выше в классе NewBank
console.log(aval.credit());
//выодится:
//I am Privat
//I am Aval
// undefined;

//т.к. в базовом классе в методе вот что:
//I am Privat - от 1й строки "super.credit()"", это метод базового класса
//  super.credit;  - так получаем ф-ю  credit базового класса в наследованном дочернем  клаасе NewBank
//  super.credit(); - а так, со скобочками, вызыаем эту ф-ю и  получаем значение из нее

//I am Aval - от 2й строки  return console.log("I am Aval");
// undefined - от чего???

// //udefined  - от :
// //отсутсвия назначения метода credit в объекте aval.
// //дописала credit так (credit внутри aval добавлен): , выдало вместо undefined 3000
// const aval = new NewBank({
//   summ: 60000,
//   month: 6,
//   p: 600,
//   card: true,
//   //Значение метода credit - 3-е выводимое знаение вызовом "console.log(aval.credit());"
//   // Без этого - пишет "undefined" в 3-й строке вывода "console.log(aval.credit());"
//!   credit() {
//!    return this.summ;
//!  },
// });

// credit() {
//   super.credit(); //чтобы оставить метод со значеннием базового класса
//   return console.log("I am Aval");
// }
// см. 6_bank_NewBank_aval_metod_credit.png

//22:25мин
//выводы - что тут происходило выше.--------

//оператор "new" можно использовать 1.с классом и 2. с функцией
// new  работает  одинаково.
// например, можем сделать ф-ю client , и на базе этой ф-ции делать много разныз клиентов
//называются ф-ции-конструкторы
// С пом. new мы создаем много новых...
// new можно использовать к 1.классам и 2. любым функциям, кроме стрелочных!!!
// У стрелочных ф-ций нет this,  нет new , нет psevdoarray...

//=======================================
//get & set
//=======================================
// // 22:55 мин
// get - для считывания инфориации
// set - для изменения информации

class User {
  // props (внутри скобок возле constructor) -  произвольное название.
  constructor(props) {
    this.name = props.name;
  }
  firstName = "";
  lastName = "";
  age = "";
  city = "";

  //set меняем name (получаем newName)
  //будем получать Фамилию и имя и его надо будет разделить на firstNamr  lasName
  set name(newName) {
    //name , который нам дают (это newName?), По пробелу split-ом разделим
    const nameRow = newName.split(" ");
    //после split получим массив
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  }

  //get
  get name() {
    return ` First name : ${this.firstName} last name: ${this.lastName}`;
  }
}

// создаем нового user-a, объект
//оператором new наследуем класс User, в скобках передаем name
const Kris = new User({
  name: "Kristina Malitowska",
});

//прверяем выводом в консоль объект Kris
console.log(Kris);

// 6_User_set_get.png
//выведен весь обект Kris по полям и ...:
// Object { firstName: "Kristina", lastName: "Malitowska", age: "", city: "" }
// age: ""
// city: ""
// firstName: "Kristina"
// lastName: "Malitowska"
// <prototype>: Object { … }

// получили в выводе firstName lastName
// т.е. get set вызывать ненадо - они сработают сами

// 27:30 мин
// можно
// 1.создать доп.классы. (я - но это мы объект создаем, а не класс ?)
const Dasha = new User({
  name: "Dasha Happy",
});

console.log(Dasha);
// Object { firstName: "Dasha", lastName: "Happy", age: "", city: "" }
// age: ""
// city: ""
// firstName: "Dasha"
// lastName: "Happy"
// <prototype>: Object { … }

// 2. можем с доп полями age  city работать
// get set все-------------------------------------

// 28:05 мин
//=======================================
// прототипы
//=======================================
// у массивов есть методы pop  push

// создаем массив a
const a = [1, 2, 3];
// у массива есть методы pop  push
console.log(a);
// вывод см.6_arr_push_pop_metod.png
// в выоде в консоль есть самииэлементы массива, дляина массива
// И есть prototype, в котором есть все методы, которые можно с массивом исползовать

// неужели каждый массив содержит в себе эти методы ?
//   Нет, т.к.это бы сЪедало много памяти в браузере и массивов оч.много...Bank
// все происходит методом наследования
// Массив   - это тоже объект!!
// Все массивы обращаются  к своему наиввысшему  объекту (родительскому), который хранит все эти ф-ции
// Т.е. НЕ у каждого массива есть и он себе копирует все возможные методы,
// а у него - массива есть ссылка туда (к родителю), куда массив может сходить и посмотреть все методы

//посмотрим на это как на 2 объекта (массив и родитель с методами?)
const a2 = {
  x: 10,
  y: 20,
};

// объект b будет содержать ссылку на объект a
//чтобы b держад где-то у себя x y от объекта a
const b = Object.create(a2);

console.log(b); //вернуло пустой объект "Object {  }"
console.log(a2); //вернуло объект Object { x: 10, y: 20 }...

// см. 6_arr_b_ObjectCreate_a2.png
// Но в нем есть только <prototype>: Object { x: 10, y: 20 }...
// внутри которого есть и x и y
//Т.е  внутри обекта b , в области памяти содержит ключ,
// по которому пошло и нашло данные от a2

//И внимание: у объекта "a2" тоже есть свой prototype
// с множеством методов.

// 30:45мин
// Т.е.- когда мы создаем переменную, объект , функцию ,
// она уже тянет за собой ключи от того глобального родительского объекта
// с теми  прототипами, методами и т.д.

// выводим в консоль объект a2
console.log(a2);
// Array(2) [ 10, 20 ]
// 0: 10
// 1: 20
// length: 2
// <prototype>: Array []
// см.6_arr_a_a2_b.png

//я. внимание -
//   Просто от массива a - вывод  Array(3)[1, 2, 3].Array
//   По этому массиву a не создавали другой объект.Array

// А по массиву a2, по которому создан массив b,
//   в консоль выдатся Object { x: 10, y: 20 }...

//   А по массиву b, который создан по массиву a2,
//   в консоль выдатся пустой Object { }...
//   Но внутри, если развернуть в prototype  есть a2
// см.6_arr_a_a2_b.png

//вывод в консоль a2
//тоже имеет ссылку на базовый реестр (все, что разворачивается при нажатии в консоли от a2 под словом prototype)
// prorotype - это по факту ключи, ссылки к базовому реестру(значений, ф - ций)

// Но с пом Object.create я говорю "сделать ссылку не на этотглобальный объект"
//(это если в скобках пусто, ничего не указано, по чем создавать обект новый)
// а на объект a2 (который я указываю , в скобках)
// А в a2 лежат данные, кторые нам нужны,
// и основные ключи тут (в prootype a2) тоже лежат
// и они видны в новом объекте b

// 31:25 мин

console.log(b); //вернуло пустой объект "Object {  }"
console.log(b.x); //вернуло просто 10 (без объектов..., прототипов)

//как оно ищет в объекте
//см. по console.log(b); (пустому объекту в возврате. но с прототипом)
//1. ищет - в b есть x?  нет
//2. а в прототипах? есть x?
//т.е. оно будет по цепочке прототипов искть-искать , пока не дойдет до конца цепочки
//это называется цепочка прототипов
//Это для понимания того, как вообще происходит поиск данных по этой цепочке (в объекте)

// можно поискать в b другой...
console.log(b.hasOwnProperty);
// вывод - разворачиваемый объект-функция "function hasOwnProperty()..."

console.log(b.hasOwnProperty("x")); //false  (не нашел)
// hasOwnProperty; - это один из методов объекта b, который лежит в prototype в списке
// см.6_arr_b_hasOwnProperty.png

// 32:44 мин
//=======================================
// используем на практике
//=======================================
// магазин, менеджеры;
//  у каждого менеджера  - своя скидка sales
//     скидка растет каждый месяц на 1

//ф-я менеджера
const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;

  this.sale = function () {
    this.sales += 1;
  };
};

//менеджеры
const ann = new Manager("Anna", 5);
const ivan = new Manager("Ivan", 10);

console.log(ann); //Object { name: "Anna", sales: 5 }
//выводится имя, скидка sales, откуда наследуется (prototype)

//ф-я, увеличивающая значение на 1. в const Manager
// this.sales = function () {
//   this.sales += 1;
// };

console.log(ann.name); // Anna
console.log(ann.sales); //5
ann.sale(); //вызвали ф-ю +1
console.log(ann.sales); //6

//магазин будет расти, менеджеров будет много
//Все это будет клпировать ф-ю sale(), сЪедать память.
//Надо уменьшить расход памяти.

//можно эту ф-ю не копировать в каждый из новых объектов,
// а можно положить эту ф - ю sale() куда - то в отдельный объект
// и просто оставить ссылку (как было в массивах a2 и b)

// как это сделаем:
// комментируем  ф - ю sale() в const Manager. (потом раскомментарила sale. Добавленную новую назвала с черточкой sale_)

// Есть такой метод (в prototype прописать ):
Manager.prototype.sale_ = function () {
  this.sales += 1;
};

console.log(ann.sales); //6  (от 5 увеличено до 6 предыдущим вызовом ф-ции sale() изнутри , оъявленной внутри const Manager)
ann.sale_(); //вызвали ф-ю +1 , но другую , sale_ (обявлена prototype)
console.log(ann.sales); //7

// но мы теперь сэкономили память, т.к. не переносим ф-ю в каждый объект при его созаднии
// а положили эту ф-ю глобально куда-то (в базовый прототип)
// и тепер каждый клиент имеет доступ к этой ф-ции
// см.6_manager_sale_prototype.png

// 37:07 мин
// проверяем
// как можно проверять какие-то ф - ции
// и все, что лежитв прототипах
console.dir(Manager);
// //см. 6_console_dir_Manager.png - от урока
// тут лежат - аргументы.... , длина, название
// и в prototype - наша функция sale_()
// см.6_manager_sale_prototype_my.png    - по моим исходникам урока (отличаются sale_)

// Сюда, (в Prototype?) можем записывать то, что  надо для эконорми  памяти
// Для того, чтобы оно наследовалось
// И в console.dir можем посмотреть все добавленные ф-ции

// 37:37мин
//=======================================
// приватные и защщенные методы  в классах
//=======================================
//  защщенные методы  в классах
//=======================================
class CoffeMachine {
  // кол-во воды
  // water = 0;
  _water = 0; //такие имена (начинаются с подчеркивания) по синатаксису не должны меняться
  #waterLimit = 500; //private, чтобы нельзя было вытянуть в интерфейс даже

  constructor(power) {
    //можность
    this.power = power;
  }
  //Получаем value.
  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    //Если нет (не <0) - то назначить переданным value
    this._water = value;
  }
}

// если будем создавать от этойо новую клфе - машину (с мал. буквы!)
//ТО можно менять и мощность и др.
let coffeMachine = new CoffeMachine(100);
console.log(coffeMachine); //объект  Object { water: 0, power: 100 }...

//Если развернуть выдачу в консоли - :
//Object { water: 0, power: 100 }
// power: 100
// water: 0
// <prototype>: Object { … }
// constructor: class CoffeMachine { constructor(power) }
// length: 1
// name: "CoffeMachine"
// prototype: Object { … }
// <prototype>: function ()

//Надо сделат свойство защищенным
// чтобы потом ее нелья было изменить

// в синтаксисе заищенные поля, которые не должны меняться начинаются с подчеркивания
// например; _water;
// это никак не раотает функционально, это просто договоренность между программистами
// о том, что защиищенные поля, которые не должны изменяться, обозначаются таким образом
// (подчеркиванием перед именем)

// А сделать ее защищенной фукницонально по исходникам мы можем через "set"
// Например, вода в минусе не м.б.
// дописывыаем в CoffeMachine

// class CoffeMachine {
//...
// //Получаем value.
// set waterAmount(value) {
//   if (value < 0) {
//     value = 0;
//   }
//   //Если нет (не <0) - то назначить переданным value
//   this._water = value;
// }

//оъявляем нову кофемашину (2e в названии)
let coffeeMachine = new CoffeMachine(100);
console.log(coffeeMachine); //объект  Object { water: 0, power: 100 }...
//добавляем setter
// coffeeMachine.waterAmount(20);  //внимание! - не так, в скобочках (ругалось в консоли), а =20 надо!!!
coffeeMachine.waterAmount = 20; //внимание! - не так, в скобочках, а =20 надо!!!
console.log(coffeeMachine); //Object { _water: 20, power: 100 }
coffeeMachine.waterAmount = -20; // минус -20 - будет _water= 0
console.log(coffeeMachine); //Object { _water: 0, power: 100 }  да. 0

// т.е. вместо нижнего подчеркивания можем делать спомо. set дополнительных

// _water
//но договоренность между программистами таки предполалагет:
// знаем, то с подчеркиванием впередеи - это защищенное дополнительное поле
//и учитыаем это.

//или такое поле (с подчеркиванием впереди _water) может быть "только для чтения"

//=======================================
// приватные свойства
// #waterLimit
//=======================================
// 41:39 мин
// добавляем #waterLimit в class CoffeMachine {...
// Он не должен быть даже читабельным,
// чтобы его нельзя было вытянуть в интерфейс

// такое объявление # не даст даже вывести в консоль
// #waterLimit = 500; //private, чтобы нельзя было вытянуть в интерфейс даже
// Так - вывело в объект:
console.log(coffeeMachine); //Object { _water: 0, power: 100, #waterLimit: 500 }
//так - не дает оборатиться. ошибка. даже синтаксично подчеркивает ошибку красным
// console.log(coffeeMachine.#waterLimit);

//без # - undefined
console.log(coffeeMachine.waterLimit); //undefined

// в таком формате мы можем получит доступ к этому полю # только внутри класса

// // итого:
//_water
// что начинается с нижнего подчеркивания - защищенные поля
// Это не поддерживается языком, компилятором
// Это просто договоренность между программистами
// Не менять значеня этих полей

// что начинается с #
// privaet поля - недоступные
// это поддерживается на уровне JavaScript, (а не только договоренность)
//но поддерживаются не совсем хорошо пока браузерами
// И тогда можно использовать поле fill ??    #privateField; чтоли?

//==========================
// Итог за урок:
//==========================
// говорили про ООП
// абстракция, инкапсуляция, наследование, полиморфизм
// на примере телефона
// эти термины важдны для соеседованния

// https://uk.javascript.info/private-protected-properties-methods
// Щоб приховати внутрішній інтерфейс, ми використовуємо захищені або приватні властивості:

//     Захищені поля починаються з _. Це відома домовленість, яка не підкріплена на рівні мови. Програмісти повинні отримувати доступ до поля, що починається з _, лише з його класу та класів, успадковуваних від нього.
//     Приватні поля починаються з #. JavaScript гарантує, що ми можемо отримати доступ до них лише з середини класу.

// Зараз, приватні поля не дуже добре підтримуються браузерами, але можна використовувати поліфіл.

// “поліфіл”
// полифил
// Сучасний підручник з JavaScript
// https://uk.javascript.info › ... › Якість коду
// 23 окт. 2024 г. — Скрипт, який оновлює/додає нові функції називається “поліфіл” (polyfill). Він “заповнює” прогалини й додає відсутній функціонал. Для нашого ...
