// function toggleNode(element) {
//   element.parentNode.classList.toggle("open");
// }

// // в html
// <div class="parent parent_ node_" id="parentid_">
//   parent
//   <!-- <p id="textHidden">Текст для проверки</p> -->
//   <div class="div_ child">
//     child
//     <div class="div_ item">item</div>
//   </div>
// </div>

// // //
// //     <div><p id="textHidden">Текст для проверки</p></div>
// let textden = document.getElementById("textHidden");
// //задаем найденному по id элементу свойство скрыть (.hidden=true)
// textHidden.hidden = true; //в браузере <p> спрятался
// //=false - появился

// let elem = document.getElementById("parentid_");
// let elem2 = document.querySelector(".child");
// let elem3 = document.querySelector(".item");
// v1-----------------------
// handleClick вызов без скобочек, event в ф-ции аргументах принятия нет
// elem.addEventListener("click", handleClick); //так по клику на parent - все прячет, включая parent

// function handleClick() {
//   // elemDel.remove();
//   //так по клику на parent - все прячет, включая parent
//   console.log(elem.hidden);
//   // console.log(event.hidden);
//   if (elem.hidden) {
//     elem.hidden = false;
//   }
//   elem.hidden = true;
// }

// // v2----------------------------------
// //так кликнутый прячется. Но 2й , child не прячется!!!
// elem.addEventListener("click", handleClick3); //так по клику на parent - все прячет, включая parent
// elem2.addEventListener("click", handleClick3); //так по клику на parent - все прячет, включая parent
// elem3.addEventListener("click", handleClick3); //так по клику на parent - все прячет, включая parent

// function handleClick3(event) {
//   // elemDel.remove();
//   //так по клику на parent - все прячет, включая parent
//   console.log(event.target);
//   console.log(event.target.hidden);
//   if (event.target.hidden) {
//     event.target.hidden = false;
//   } else {
//     event.target.hidden = true;
//   }
// }

// // см. lesson9/ script29.js  handleClick8;
// function handleClick() {
//   // elemDel.remove();
//   //так по клику на parent - все прячет, включая parent
//   console.log(elem.hidden);
//   if (elem.hidden) {
//     elem.hidden = false;
//   }
//   elem.hidden = true;
// }

// v3

const elem8 = document.querySelector(".parent"); //по классу , а не по id как выше в v1
elem8.addEventListener("click", handleClick8);
// дописываем /убираем в ф-цию   строку event.target.classList.add("active");
function handleClick8(event) {
  //смотреть - что нажали , какой event
  console.log(event.target);
  // event.target.classList.add("active");
  // проверить - есть лди этот класс
  // к nav.  т.к. только на nav есть слухач
  //ищем "li.active"  - Li с классом active
  //ищем "div.hiden"  - div с классом hiden
  // const checkClass = event.querySelector(".div_.hiden");
  // const checkClass = event.target.querySelector("div.div_.hiden");
  // const checkClass = event.target.querySelector("div.hiden");
  const checkClass = elem8.querySelector("div.hiden");
  // const checkClass = elem8.querySelector("p.hiden");

  // .........................
  //так - по клику на  div кликнутый div прячет (красн фон)
  //повторный клик туда же - покажет (убирает красн фон)
  //НО - parent повторный клик не убрает красн
  if (checkClass) {
    //если есть  (true) - удалить (remove)
    // event.target.classList.add("hiden");
    event.target.classList.remove("hiden");
  } else {
    event.target.classList.add("hiden");
  }

  // const checkClass2 = event.target.lastElementChild.querySelector("div.hiden");
  // if (checkClass2) {
  //   //если есть  (true) - удалить (remove)
  //   // event.target.classList.add("hiden");
  //   event.target.lastElementChild.classList.remove("hiden");
  // } else {
  //   event.target.lastElementChild.classList.add("hiden");
  // }

  //так ошиюка- клик по div child - нет nextElementSibling
  // const checkClass3 =
  //   event.target.nextElementSibling.querySelector("div.hiden");
  // if (checkClass) {
  //   //если есть  (true) - удалить (remove)
  //   // event.target.classList.add("hiden");
  //   event.target.nextElementSibling.classList.remove("hiden");
  // } else {
  //   event.target.nextElementSibling.classList.add("hiden");
  // }
}
