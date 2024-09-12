// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.

// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах<p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве

const StyleArr = [
  { color: "blue" },
  { fontSize: "16px" },
  { textAlign: "center" },
  { textDecoration: "underline" },
];

export default function Styles(StyleArr, text) {
  console.log(StyleArr);
  let styleString = StyleArr.map((styleObj) => {
    let [styleName, styleValue] = Object.entries(styleObj)[0];
    return `${styleName}: ${styleValue};`;
  }).join(" ");
  document.getElementById(
    "style_text"
  ).innerHTML = `<p style="${styleString}">${text}</p>`;
}
Styles(StyleArr, "Какая то бородень");
