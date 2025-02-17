// //----------------------------
// //----------------------------
// // js mod29
// // -  Local Storage & node.js
// //----------------------------
// //----------------------------

// // ======================
// // // Продолжение предыд. урока сначала
// // // в html пишем ------
// // //    <form class="form">
// // //   <p>Имя</p>
// // //   <input id="name" class="inputName" />
// // // </form>
// // //
// // // есть место для имени, вводим имя, и обновляем страницу
// // // input очищается
// // // Можно сохранить введенную инф-ю в браузер------------
// // localStorage.setItem("name", "Kristina");
// // // посмотреть - где это лежит:
// // // ф12 в уроке - application
// // // ф12 у меня - Хранилище, локальное храилище, адрес сессии http://127.0.0.1:5500
// // // key name, value Kristina
// // // 10_ХранилищеMy.png,10_Хранилище.png
// // // вытащить из хранилища
// // const a = localStorage.getItem("name");
// // console.log(a); //Kristina

// //дозаполняем форму и практикуемся
// // html
// // <form class="form">
// //   <p>Имя</p>
// //   <input id="name" class="inputName" />
// //   <p>Фамилия</p>
// //   <input id="name" class="inputLastName" />
// //   <p>Пол</p>
// //   <input type="radio" name="radio" value="female" onchange="check()" /> жен
// //   <br />
// //   <input type="radio" name="radio" value="male" onchange="check()" /> муж
// //   <br />
// //   <p>Есть 18?</p>
// //   <input type="checkbox" id="age" />
// //   <button>Отправить</button>
// // </form>

// //
// //привязываем js к форме
// // если true - провеяряем женский пол на True
// // function check() {
// //   let val = document.getElementsByName("radio");
// //   if (val[0].checked) {
// //     console.log("Женский");
// //   } else {
// //     console.log("Мужской");
// //   }
// // }

// //слушатель на форму, input-ы
// //объекты
// let form = document.querySelector(".form"); //. -  по классу=form
// let nameInput = document.querySelector(".inputName");
// let lastNameInput = document.querySelector(".inputLastName");
// let age = document.querySelector("#age"); //  # по id = age
// let male = document.getElementsByName("radio");

// //собственно слухач
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   //отправляем preventDefault - чтобы форма не отправлялсь при каждом изменении
//   event.preventDefault();
//   //создаем объект для LocaleStorage
//   const info = {
//     name: nameInput.value,
//     lastName: lastNameInput.value,
//     age: age.value,
//     male: male[0].checked,
//   };
//   console.log(info);
//   //(method) Storage.setItem(key: string, value: string): void

//   // localStorage.setItem("info", info);
//   //особенность. нельзя значением value отправить объект.
//   //надо из объекта сделать строку c пом . JSON.stringify(info)
//   localStorage.setItem("info", JSON.stringify(info));
// }

// //убрали ф-цию check()
// // из html
// // было: <input type="radio" name="radio" value="female" onchange="check()" /> жен
// // стало : <input type="radio" name="radio" value="female" /> жен
// //из js
// // function check() {...}

// // внимание - Почему Жен - муж одинак name = Radio
// // т.к.если разные бы были Name, то могли выбрать оба
// // КОгда надо выбрать одно из - имя пишем одно у всех

// // у меня error на строке:
// // male: male[0].checked, //Uncaught TypeError: male is null
// //потому что
// // let male = document.querySelector("#radio");  было по id cРешеткой. А его нет в HTMLAllCollection
// // надо без решетки:
// // let male = document.querySelector("radio");
// //и надо getElementsByName, а не querySelector:
// // let male = document.getElementsByName("radio");

// // вывод консоли норм : Object { name: "dfbdgh", lastName: "gxnxgngn", age: "on", male: true }

// // 13:22 мин

// // теперь localStorage;
// // дописывать в ф-цию
// // function handleSubmit(event) {
// // после строки
// //   console.log(info);
// // ...................сюда
// // }

// // // если не преобразовать объект в строку:-
// // // ф - ция handleSubmit со строкой info объект, а не строка
// // // localStorage.setItem("info", info);
// // const a = localStorage.getItem("info");
// // console.log(a);

// // //выдаст [object Object] . его уже никак не  распарсить
// // // ПОэтму надо передавать строкой, а  не объектом (так по синтаксису и надо - строкой)
// // // 15:15 мин
// // // меняем в ф-ции на строку правильную, с info , преобразованным в строку
// // // localStorage.setItem("info", JSON.stringify(info));
// // 10_JSON.png

// // //вынимаем сохраненное из localStorage (хранилище)
// // //удалить сначала из хранилища вручную  ф12 то, что до этого уда сохранили объектом
// // const b = localStorage.getItem("info");
// // console.log(JSON.stringify(b));
// // // выводит "{\"name\":\"dfbdgh\",\"lastName\":\"gxnxgngndssgzdf\",\"age\":\"on\",\"male\":true}"

// //смысл сохранения - вернуть из LocalStorage в форму
// //после автоочистки при отправке данных или обновлении стариницы
// if (localStorage.getItem("info")) {
//   //если True - т.е. есть сохраненное info в localStorage
//   //вынимать и возвраащть в элементы на форму
//   const ls = JSON.parse(localStorage.getItem("info"));
//   console.log(ls); //Object { name: "dfbdgh", lastName: "gxnxgngndssgzdf", age: "on", male: true }
//   // nameInput.value = ls.name;
//   lastNameInput.value = ls.lastName;
// }

// проверить как заполнение элементов
//1. заполнить  - отправит кнопкйо. Записшется в localStorage info
//2. ОБновить страницу, чтобы очистились автомтически данные в форме
//  - в адресе enter нажать
//моргнет - ушло и записалось сразу из localStorage.
// можно убрать например заполнение
// nameInput.value = ls.name;
//   И оно  останетс пустым после обновения страницы, после очистки при этои полей формы
// 10_возвратИзlocalStorage.png

// 17:45 мин

// это все было  в целях объяснить - что откуда можно взять в localStorage
// этот код писать реально ненадо.
// т.к.
//1. при нажатии кнопки отправить надо в любом случае таки затереть все данные
// а не сохранять их в localStorage.
// Большие формы - надо сохранять по ходу (всмысле постепенно ? до нажатия кнопки отправить?)
// 2. если каждое значние будем отдельно вынимать, то будет много ненужного кода
// поэтому есть более оптималный метод.

// 18:13 мин
// Другой метод=====================
// код предыдущий комментируем, и форму html тоже
// пишем еще одну форму
// особенность в том, что все на id
//
// в html пишем ------
// <form id="form">
//   <label>Name</label>
//   <input id="name" type="text" />
//   <label>Last Name</label>
//   <input id="lastname" type="text" />
//   <label>Age</label>
//   <input id="age" type="number" />
//   <label>Contry</label>
//   <select id="contry">
//     <option value="1">Ukraine</option>
//     <option value="2">Poland</option>
//     <option value="3">USA</option>
//   </select>
// </form>
//
//слушатель на форму, input-ы
//объекты
let form = document.querySelector("#form"); //# -  по id=form
// значение форме - просто объект дать
let formData = {};

//Делаем перебор:
// //собственно слухач
//на форму на input
//получаем event - Любое событие
form.addEventListener("input", function (event) {
  //в html должны быть name у всех объектов (помимо id)
  //иначе под каким ключом оно будет храниться
  // в объект formData
  formData[event.target.name] = event.target.value;
  // сохраняем в localStorage formData, куда уже вспе отправили
  localStorage.setItem("formData", JSON.stringify(formData));
});

// как будем восстанавливать
if (localStorage.getItem("formData")) {
  //если true
  formData = JSON.parse(localStorage.getItem("formData"));
  //делаем перебором
  for (let key in formData) {
    // form - оформленный id- слухач
    form.elements[key].value = formData[key];
  }
}

// проверяем с пустым циклом  - обновим стрраниц - ничего не происходит. Норм
//Теперь проверяем с строкой внутри цикла
// form.elements[key].value = formData[key];
// вносим данные в форму драугие
// обновляем страницу в адресе (прсто стрелочкой - не очищается в firefox)
//моргает - очистились и восстановились данные
// ок;
// автоматически при каждом изменении все данные формы записываются,
// потом можно обновлять

// удалять из localStorage - ф-ция remove===================
// в конспекте есть.

// localStorage - все
// 25:33 мин

// ================================
// node и ее библиотеки
// ================================
// это легкая и эффективная среда выполнения JS
// Node.js нужна в процессе раоты с библиотеками, допутитлитами
// Сначала создавался, чтобы быть серверным окружением , срдеой для приложения
// нНо разработчики начали использовать его для разралотки инструментов,
//  которые помоглают реализовать выполнение локальных задач.
//
// как установить nodejs=======================
// nodejs.org - зайти на сайт
// https://nodejs.org/uk
// есть рекомендованная версия и последняя
// последнюю ненадо ставить, она м.б. нетабильной
// в уроке на картинке
// 18.14.2 LTS рекомендована
// 19.7.0 - последння

// я сегодня 9.02.2025-
// 22.13.1 рекомендована
// 23.7.0 - последння

// качать устанавливать в зависмости от Window, Mac
// найти в inet как устновить
// -----------
// как проверить , что установили. - открываем терминал
// tty  у нее??
// или просто cmd?
// пишем node - напишет что есть или нет, кк\акая версия
// 10_node_termnal.png

//
// Это среда разраотки
// node Похволяяет выполняь ф-ции без HTMLAllCollection

// при установленном node, после команды Node
// пишем в командной строке
const hello = "Hello world";
// этот треминал - это наша консоль и есть
// выводим в консоль переменную назначенную hello
console.log(hello); //Hello world
//в консоли node - без точки с запятой в конце
// выполняется в этой консоли, без html.HTml не нужен

// 27:35 мин
// =====================
// npm
// ========================
// с установкой  Node получаем npm
//npm - Это  nodePaketManager
// https://www.npmjs.com/
// заходим
// на сайте есть библиотеки, для облегчения кода
// например нужны уникальные id - щники
// в поиске на сайте www.npmjs.com пишем uuid
// нашло в уроке: uuid 4122, у меня - uuid9562
// 10_node_npmjs_uuid.png
// Заходим в найденное. У меня:
// https://www.npmjs.com/package/uuid
// 10_node_npmjs_uuid_RFC8562_4122.png
// на странице написано : (версия 9562 - примерно тоже что 4122)
// For the creation of RFC9562(formally RFC4122) UUIDs

// На этой странице инфо - как установить
// Установить

// node устанавливать глобально(не в проекте)
// uuid устнавливать тут - где, в VScode? да.
// внизу перейти в закладку Terminal - и там писать команды из сайта для инсталла
// npm install uuid   //------------------------
// 10_node_uuid_Install.png

// установилась, например.в VScode
// там же , на той же странице сайта - примеры ее использования

// пример
// создаем в этом же учебном уроке Lesson10
// еще один script-File    uuid.js в каталоге /js/
// 28:30 мин
// подключаем этот файл в HTML
// дописываем в html за script30   - новый uuid.js
// <script src="./js/script30.js"></script>
// <script src="./js/uuid.js"></script>
// в файле uuid.js пишем команду с сайта
import { v4 as uuidv4 } from "uuid";
// 10_node_uuid_command.png
// это значи импортировали с этой библиотеки
// и вызвать (тоже копией команды с сайта)
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// 10_node_uuid_command2.png

// про пути:
// на странице  сайта npm  https://www.npmjs.com/package/uuid:
// 29:11мин
// см.содержимое описание этой страницы
//  как инсталить, репозиторий на github, что делает примеры, потестить...
// можно копировать код

// =============
// 30:17мин
// еще популярная библиотека:
// lodash
// lodash v4.17.21 (написали в поиске - нашло такую. Такая же в уроке)
// в ней много стандартных методов - map? не услышала четко
// но эти методы немного иначе описаны
// плюс дополнительные фичи
// https://www.npmjs.com/package/lodash
//
// библиотек оч. много
// они помогают с анимацией, ...
// т.е. не удем писать рукми много кода, т.к. используются именно библиотеки

// =============
// 30:42мин
// по примерам работы
//
// вернулись в файл uuidv4.JS
// после установки библиотеки
// в проекте VScode появились файлы в корне
// package*
// 10_node_PackageinVSCode.png
// package-lock.json
//   package.json

//     в файле package.json   открываем - там написано какие в нем библиотеки
// , которые мы установили себе в проект
// dependencies - Библиотеки, (зависимости)
// "dependencies": {
//   "uuid": "^11.0.5"
// },

// и если запушить код на github, а другой захочет его использвать
//   , чтобы его запустить  без ошибок, надо будет
//   ввести в терминале(на закладке  TERMINAL в VScode) команду:

// npm install
// можно просто
// npm i   //--------------------------
//терминал поймет
// будет установлены все dependencies c этой библиотеки, указанной в файле   package.json
// 10_node_uuid_npm_i_depenencies.png

// =============
// 31:25мин
// еще команды:
// npm install ( или просто  npm i)
// npm init  - чтобы установить package.json,
//        т.е.инициализировать package.json, т.к. его нет

// если устанавливаем - пишем
// npm install и название библиотеки
//
// при удалении библиотеки:
// npm uninstall uuid  //например -----
// после uninstall - очистилось содержимое файла  package.json.
// остались только скобочки фигурные { }
// 10_node_uuid_npm_uninstall.png

// поставила назад, для демо дальше
// npm install uuid     ------------
// 10_node_uuid_npm_install.png

// =============
// 32:05мин
// после установки зависимостей (это про dependencies в ббиблиотеке установленной uuid?)
// след команда
// npm start------------
// (если есть файл package.json с напонением, а не пустой)
// error Пошли - нет такой команды Start
// запустити скрипт. Который сейчас научимся делать

// =============
// 32:27мин
// делаем пуcтой проект test
//я скопирила Lesson   в /lesson10  же рядом
// и открыла его в  отдельном VScode
// но в уроке - пустой test
//Сейчас мы сделаем его (проект в test) через Npm
//идем внизу в закдадку ternminal
// пишем
// npm Init
// 10_node_uuid_test_npm_init.png

// оно говорит package name, стягивает имя папки, назван был нами проект TEST
// жмем Enter
// дальше появляются ниже, в  окне терминала, где пишем каманды VScode
// description
// будет предлагать - доп команды, репозитории
// репозиторий оно стянет по -умолч, если берете...
// покажет содержимое созданного package.json
// 10_node_uuid_test_npm_afterinit.png
// спросит ок? про этот файл.
// нажать enter - да.
// и добавится этот файл package.json в проект
// 10_node_uuid_test_npm_after2init.png

// =============
// 32:59мин
// создался  package.json
// открываем его
// 10_node_uuid_test_package_json.png

// в нем name, description(сейчас пустые)
// установим npm
// npm i uuid
// дописались в файле dependencies
// и появились в проекте еще файлы

// переклюилась на файл package.json в проекте lesson10 - там всего понаписано уе много с путями, репозиториями..JSON
// 10_node_uuid_test_package_jsonLesson10.png

//перешла в проекте lesson10 в файл uuid.js
// там можно работать - в нем писать

// 33:31 мин
// package.json (Lesson10)
// в нем есть "scripts"=============================
// бывают оч большие команды, которые надо выполнить и это надо укоротить
// можно в этом разделе под новый ключ - значение
// сохранить новый скрипт
// ПРимер
// созздаем в Lesson10 файл index.js (рядом на уровне с package)
// в корне проектв
// Пишем в файле index.js
// console.log "Hello! I'm JS"
//
// в ф. package.json  Пишем в разделе "scripts" следом за существующей там строкой
// "hello": "node index.js"
// это означает - node должна идти в index.js
// 10_node_uuid_test_package_jsonhello.png
//
// ВНизу в терминале VScode пишем:
// npm run hello   //-------------------
// 10_node_uuid_npm_run_hello.png
// результат - написало внизу, в терминале же текст из файла index.js
// Hello, I'm JS

// Это надо на больших проектах, если надо сделать сборкку многофункциональную,
//   много кода написать.
//   Таким методом это упрощается

// это про "scripts" было
// 34:53 мин
// после установки node ?
// в проект появилась папка node_modules
// таких node_modules м.б. много в проекте, много библиотек
// и много места это занимает.
// Поэтому на git ненадо пушить node_modules
// 1 договоренность между программитсами.
// 2. закэшируется, могут быть проблемы. надо быдет npm пробивать это. это тяжко
//
// а что делаем ======================
// в корне проекта делаем файл
//   .gitignore
//   в этот файл пишем - что при Push на git надо игнорировать (не отправлять)
// а именно:
// node_modules/
// всю папку node_modules/ надо проигнорить, не качать на Git
// Обязательно!!!
//
// как это проверить=====
// в меню vscode - terminal - new terminal
// // git status
// выдастся список файлов для передачи на git
// Папок node_modules нет!!!
// 10_node_uuid_git_ignore.png
//
// если убрать из файла gitignore node_modules/
//   сохраняем
// снова в терминале пишем " git status"
// в списке появились node_modules/
//
// Проверять и не пушить node_modules/ на git!

// библиотек сейчас устанавливать не будем.
// Это надо уже в сборке, в проектовых pack и galp ???
// это позже

// npm установить на комп себе надо
