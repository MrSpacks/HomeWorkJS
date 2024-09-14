// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.

let billList = [
  { product: "Jajca", quantity: 5, price: 100 },
  { product: "jogurt", quantity: 1, price: 20 },
  { product: "Хлеб", quantity: 1, price: 10 },
];

function renderBillList() {
  // 1. Распечатка чека на экран.
  const billListContainer = document.getElementById("bill_list");
  billListContainer.innerHTML = "";
  billList.forEach((item) => {
    const itemElement = document.createElement("ul");
    itemElement.innerHTML = `
        <li class="items_bill">
          <div class="item_name">${item.product}</div>
          <div class="itemQuant">${item.quantity}</div>
          <div class="item_price">${item.price}</div>
        </li>`;
    billListContainer.appendChild(itemElement);
  });
}

function addProductTobill() {
  const productName = document.getElementById("prodName").value.trim();
  const productQuantity = parseInt(
    document.getElementById("proQuantity").value
  );
  const productPrice = parseFloat(document.getElementById("prodPrice").value);

  const existingProduct = billList.find(
    (item) => item.product.toLowerCase() === productName.toLowerCase()
  );

  if (existingProduct) {
    existingProduct.quantity += productQuantity;
  } else {
    billList.push({
      product: productName,
      quantity: productQuantity,
      price: productPrice,
    });
  }

  renderBillList();
  ExpensProduct();
  AveragePrice();
  addFullPrice();
}
// 4. Подсчет средней стоимости одного товара в чеке
function AveragePrice() {
  const totalItems = billList.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = addFullPrice();
  const averagePrice = totalPrice / totalItems;
  document.getElementById(
    "average_price"
  ).innerHTML = `Средняя стоимость товара:   ${averagePrice.toFixed(2)}`;

  return averagePrice;
}

function addFullPrice() {
  // 2. Подсчет общей суммы покупки.
  const totalPrice = billList.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);
  document.getElementById(
    "full_price"
  ).innerHTML = `Общая Стоимость :  ${totalPrice}`;
  return totalPrice;
}
function ExpensProduct() {
  // 3. Получение самой дорогой покупки в чеке
  let mostExpensive = billList.reduce((maxItem, currentItem) => {
    const currentTotal = currentItem.quantity * currentItem.price;
    const maxTotal = maxItem.quantity * maxItem.price;
    return currentTotal > maxTotal ? currentItem : maxItem;
  });

  document.getElementById(
    "most_expensive"
  ).innerHTML = `Самая дорогая : ${mostExpensive.product}`;
  return mostExpensive;
}

export {
  renderBillList,
  addProductTobill,
  addFullPrice,
  AveragePrice,
  ExpensProduct,
};
