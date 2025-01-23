// // --3-­
// // Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// // функція має повертати назву товару і вартість

// // перевірити на варіантах:
// // 1) banana 30, 4,5
// // 2) cherry 58, 1,3
// // 3) jrange 89. 3,4

//--------------------------------------

function createShop(productName, pricePerKg, quantity) {
  return function () {
    console.log(`${productName}  ${pricePerKg * quantity}`);
  };
}

const shop = createShop("banana", 30, 4.5)();
// shop();
const shop1 = createShop("cherry", 58, 1.3)();
// shop1();
const shop2 = createShop("orange", 89, 3.4)();
// shop2();

function shop_(prod) {
  return function () {
    console.log(`${prod.name}  ${(prod.price * prod.count).toFixed(2)}`);
  };
}

const prod1 = {
  name: "banana",
  price: 30,
  count: 4.5,
};

const prod2 = {
  name: "cherry",
  price: 58,
  count: 1.3,
};

const prod3 = {
  name: "jrange",
  price: 89,
  count: 3.4,
};

const shopMk = shop_(prod1)();
const shopMk2 = shop_(prod2)();
const shopMk3 = shop_(prod3)();
