let shoppingList = [
  { product: "Квартира В New York", quantity: 5, bought: false },
  {
    product: "Участок под завод на Силиконовой долине",
    quantity: 1,
    bought: false,
  },
  { product: "Хлеб", quantity: 1, bought: true },
];

function renderShoppingList() {
  const listContainer = document.getElementById("shopping_list");
  listContainer.innerHTML = "";

  shoppingList.sort((a, b) => a.bought - b.bought);

  shoppingList.forEach((item, index) => {
    const itemElement = document.createElement("ul");
    itemElement.className = item.bought ? "bought" : "";
    itemElement.innerHTML = `<li class="item">
  <div class="iteam_name">${item.product}</div>
  <div class="item_quabtn">
  <div class="item_quantity">${item.quantity}</div>
  <button class="item_btn" onclick="markProductAsBought(${index})">&#10004;</button></div>    
</li>`;
    listContainer.appendChild(itemElement);
  });
}

function addProduct() {
  const productName = document.getElementById("product-name").value.trim();
  const productQuantity = parseInt(
    document.getElementById("product-quantity").value
  );
  const existingProduct = shoppingList.find(
    (item) => item.product.toLowerCase() === productName.toLowerCase()
  );
  if (existingProduct) {
    existingProduct.quantity += productQuantity;
  } else {
    shoppingList.push({
      product: productName,
      quantity: productQuantity,
      bought: false,
    });
  }

  renderShoppingList();
}
function markProductAsBought(index) {
  shoppingList[index].bought = true;
  renderShoppingList();
}
export { renderShoppingList, addProduct, markProductAsBought };
