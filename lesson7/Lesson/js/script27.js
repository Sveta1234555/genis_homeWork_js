//----------------------------
//----------------------------
// js mod27
// -  ES6
//----------------------------
//----------------------------

// практическая задача, связазнная с html-----------------------
// кружочки - прятать и показывать

class CircleBox {
  //конструктор принимает selector
  // .. вызвается яавтоматически  при запуске компонента
  constructor(selector) {
    //инииализируем опции
    // В главный CirscleBox будем прокидвать только selector
    //потом сделаем много разных крожков

    // по соглашению конвенции между программистами, когда передаем селектор, передаем его через символ $
    this.$el = document.querySelector(selector);
  }
  hide() {
    this.$el.style.display = "none";
  }
  show() {
    this.$el.style.display = "block";
  }

  //в этом блоке делаем 2 метода, которые будут показывать и прятать кружочки
}

//от него, если мы решили сдлеать класс сначла больший , потом меньший..
// чтобы мы еще раз проговорили и повторили наследование в классах

// когда наследуем от первого класса еще один класс (а не объект)
// наследуем класс CircleItem от класса  CircleBox- пишем слово extends
class CircleItem extends CircleBox {
  constructor(options) {
    //если наследуем класс от другого класса , должен быть в консорукторе super
    //сюда надо прокинуть- передать selector
    super(options.selector);
    //навешивать стили, css небольшой здесь пропишам
    //ширину
    this.$el.style.width = options.size + "px";
    //т.к. это круг - то один раз прорпишем size  и на высоту и на ширину
    this.$el.style.height = options.size + "px";
    //можно будет поиграть с w h - Длеать овальными, квадратами ...
    //border radius стабильный для всех пропишем
    //потом можно поменять будет
    this.$el.style.borderRadius = "50%";
    //цвет
    this.$el.style.background = options.color;
  }
}

//делаем собственно круг, объект
//через оператор new, наследуем от CircleItem
// круглые объектные скобки
const CircleRed = new CircleItem({
  //здесь надо прописать стили , которые передаем для кружка
  // id  делаем по тому же названию, но с малю буквы
  // в html делаем div "    <div id="circleRed"></div>", т.е.. привязали id
  selector: "#circleRed",
  //привязать высоту и цвет (передаем как строку , в кавычках)
  color: "red",
  size: 50,
});

// 07:55 мин
// нарисовался кружок  7 - circle.png;

// ПРописываем ф-ции hide show  выше class CircleBox

//еще кружочки делаем
//в index
//   <div id="circleGreen"></div>
//   <div id="circleBlue"></div>

const CircleGreen = new CircleItem({
  //здесь надо прописать стили , которые передаем для кружка
  // id  делаем по тому же названию, но с малю буквы
  // в html делаем div "    <div id="circleRed"></div>", т.е.. привязали id
  selector: "#circleGreen",
  //привязать высоту и цвет (передаем как строку , в кавычках)
  color: "green",
  size: 80,
});

const CircleBlack = new CircleItem({
  //здесь надо прописать стили , которые передаем для кружка
  // id  делаем по тому же названию, но с малю буквы
  // в html делаем div "    <div id="circleRed"></div>", т.е.. привязали id
  selector: "#circleBlack",
  //привязать высоту и цвет (передаем как строку , в кавычках)
  color: "black",
  size: 30,
});

// 09:35 мин
// 3кружочка есть 7-circle3.png
// написаны ф-ции hide show - проверяем их
// пишем в ф12 в закл console
// CircleBlack.hide();   - спрятался черный кружок  см.CircleBlack_hide.png;
// CircleBlack.show();   -CircleBlack_show.png;

// т.е. класс  class CircleItem наследовал от класса class CircleBox все методы (hide show)
// и прокидывает их в следующие создаваемые объекты const CircleBlack...
//эти методы ненадо специально передавать  объявлять, они сами наследуются в объектах
// мы методы класса наследумого базового просто используем в объектах,
// Т.е. можем из объекта дотягиваться до любого метода из класса родителя базового.

//это было про расммотреть наследование примерчик

// 10:54 мин
//============================
// будем добавлять функции иначе
// через прототипы
// такое делали . На закрепление

function Car(name, color) {
  this.name = name;
  this.color = color;
}

//добавляем методы через прототип
//функцию message - выводить строчку
Car.prototype.message = function () {
  console.log(`${this.name} is ${this.color} color`);
};
// сделали машины  , объекты
const BMW = new Car("bmw", "red");
const opel = new Car("opel", "green");

BMW.message(); //bmw is red color
opel.message(); //opel is green color

//или проверка - в закл.консоль ф12 пишем:
// BMW.message()  //bmw is red color
// opel.message()  //opel is green color
// 7-2car_.png
// 7-2car_prototype.png

// т.е.с пом.метода prototype добавили метод в корень (глобальный верхний родительский класс, функцию...)
// чтобы не прокидывыать его каждому дочернему.

// добавим еще ф-цию туда же в корекнь
Car.prototype.start = function () {
  console.log(`${this.name} is start!!!`);
};

BMW.start(); //bmw is start!!!

//т.е. можно прокидывать ф-ции в объект наследующий способами
//1. из примера1 circle
//2. добавлять в прототипы
//3. можно setter   getter

// 15:08 мин
//======================
//миксины
// простой способ создать объект с полезными методами
// потом передать через прототип в объект
// переиспользовать

//делаем миксин

//ф-ция
let message = {
  // миксины:
  messageHello() {
    console.log(`Hello, ${this.name}`);
  },
  messageBye() {
    console.log(`Bye, ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}
//есть User, есть миксины, могуть быть другие классы
// Можем ф-ци message переиспользовать в других классах

//чтобы не переписывать сюда код message? пишем так:
Object.assign(User.prototype, message);
// User - кому
// message - что

//создаем User и вызывам метод messageHello  из message
new User("Иван").messageHello(); //Hello, Иван

//т.е. миксин можно с пом. метода "Object.assign"
// даже не в классе прописывать
// а вне класса прописывать
// использоаать.
// Потом можно использовать этот миксин в ругих классах, с инишими персонами...

// 18:15 мин
//================================================
// см.7тблЦветная.png
//javaScript развивается постоянно, доб-ся новые методы, не всеми инструментами поддерживаемые
// Таблица цветная - какие мктоды где поддерживаются
// (есть и браузеры десктопные, и мобильные версии)
// Все, что нужно для разраотки
// http://kangax.github.io/compat-table/es6/   - не открылось
//слева вниз - списк функций, для классов, для array и т.д.
//Смотрии, поддерживается ли это везде

//Существуют 2 иснтрумена:
// транспиляторы и полифилы
//==================
// транспиляторы; - специнструменты, кот переводит код из одного языка программирования на другую
// или о одной спецификации на другую
//Пример  -в javascript 20г. в обновленной версии вышла возможность
// синтакса:

height = height ?? 100;
// на старой спецификации это бы выглядело вот так:
height = height !== undefined && height !== null ? height : 100;
//но не все движки могут это новое оборабоаать
//ПОэтомку транспилятор проанализирует такой код и перепишет его
// один из известнецших траснпилятро - bubbl

//или если собираете проект через webpack (допоонительный автоматичесакий запуск)
// таи бываю часто уже вшиты транспиляторы

//==================
// полифилы
// 21:00мин
