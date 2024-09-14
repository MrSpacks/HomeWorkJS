import darkMode from "./components/dark_mode.js";
import {
  renderShoppingList,
  addProduct,
  markProductAsBought,
} from "./components/task1.js";
import {
  renderBillList,
  addProductTobill,
  addFullPrice,
  AveragePrice,
  ExpensProduct,
} from "./components/task2.js";
import Styles from "./components/task3.js";
import {
  renderClassRoom,
  renderClassRoomsByFaculty,
} from "./components/task4.js";
const button = document.getElementById("darkModeButton");
if (button) {
  button.addEventListener("click", darkMode);
}

window.renderShoppingList = renderShoppingList;
window.addProduct = addProduct;
window.markProductAsBought = markProductAsBought;
window.renderBillList = renderBillList;
window.AveragePrice = AveragePrice;
window.addProductTobill = addProductTobill;
window.ExpensProduct = ExpensProduct;
window.Styles = Styles;
window.renderClassRoom = renderClassRoom;
window.renderClassRoomsByFaculty = renderClassRoomsByFaculty;
renderShoppingList();
renderBillList();
addFullPrice();
AveragePrice();
ExpensProduct();
