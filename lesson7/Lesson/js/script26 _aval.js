//----------------------------
//----------------------------
// js mod26
// -  ООП
//----------------------------
//----------------------------

// /добавляют конструктор, в него передаем опции
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

// //выводим
// console.log(aval.card); //error
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

// // теперь "console.log(aval.card);" выдала true, как и назначили в объектк нового наследованного класса NewBank  а не //error
// console.log(aval.card); //true     //ок вызвался то, что назначили выше в обхекте aval

// //у нового банка aval (объекта aval, экземпляра наследованного класса NewBank от базового класса Bank)
// // вызываем метод credit (мы там у базового поменяди формулу на текст "I am Priat")
// console.log(aval.credit); //пишет function credit() - это не вызов, это только получли эту ф-ю
// //надо скобочки добавить после credit, чтобы вызывать и поучить значение
console.log(aval.credit()); //I am Privat
