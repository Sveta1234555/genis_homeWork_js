// Домашнє завдання
// 9 mod29 события

// -----3----
//     Створіть дерево, яке показує / приховує дочірні вузли при кліці

function toggleNode(element) {
  element.parentNode.classList.toggle("open");
}

/* для v2 div parent-child-item */
const elem8 = document.querySelector(".parent");
elem8.addEventListener("click", handleClick8);

function handleClick8(event) {
  // Знаходимо найближчого батька з класом parent, child або item
  const target = event.target.closest(".parent, .child, .item");

  if (!target) return; // Якщо клік не по одному з цих елементів, нічого не робимо

  // Знаходимо всіх прямих нащадків (дочірні елементи)
  // const children = target.querySelectorAll("> div");
  const children = target.querySelectorAll("div > div");

  // Перемикаємо клас hiden у всіх дочірніх елементів
  children.forEach((child) => {
    child.classList.toggle("hiden");
  });
}
