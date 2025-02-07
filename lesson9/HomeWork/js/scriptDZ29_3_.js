function toggleNode(element) {
  element.parentNode.classList.toggle("open");
}

// // в html  - div  с <p id="textHidden">
// // //
// //     <div><p id="textHidden">Текст для проверки</p></div>
// let textden = document.getElementById("textHidden");
// //задаем найденному по id элементу свойство скрыть (.hidden=true)
// textHidden.hidden = true; //в браузере <p> спрятался
// //=false - появился

let elem = document.getElementById("parentid_");
elem.addEventListener("click", handleClick8(elem));

function handleClick() {
  // elemDel.remove();
  //так по клику на parent - все прячет, включая parent
  console.log(elem.hidden);
  if (elem.hidden) {
    elem.hidden = false;
  }
  elem.hidden = true;
}

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

// дописываем /убираем в ф-цию   строку event.target.classList.add("active");
function handleClick8(event) {
  //смотреть - что нажали , какой event
  console.log(event.target);
  // event.target.classList.add("active");
  // проверить - есть лди этот класс
  // к nav.  т.к. только на nav есть слухач
  //ищем "li.active"  - Li с классом active
  //ищем "div.hiden"  - div с классом hiden
  const checkClass = event.querySelector("div.child");
  if (checkClass) {
    //если есть  (true) - удалить (remove)
    // event.target.classList.add("hiden");
    event.classList.add("hiden");
  } else {
    // event.target.classList.add("hiden");
  }
}
