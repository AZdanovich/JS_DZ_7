//Задание 1
/*const input = document.querySelector("input");
const list = document.querySelector("ul");
input.addEventListener("keyup", function (event) {
  const text = event.key;
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
});*/

//Задание 2
/*const input = document.querySelector("input");
input.addEventListener("keyup", function (event) {
  console.log(input.value);
});*/

//Задание 3
/*const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value;
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
  input.value = "";
});*/

//Задание 4.1
/*const form = document.getElementById("calculator");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const number1 = parseFloat(num1.value);
  const number2 = parseFloat(num2.value);
  const operation = operator.value;
  let result;
  if (operation === "+") {
    result = number1 + number2;
  } else if (operation === "-") {
    result = number1 - number2;
  } else if (operation === "*") {
    result = number1 * number2;
  } else if (operation === "/") {
    result = number1 / number2;
  }
  resultDiv.textContent = result;
});*/

//Задание 4.2
/*const form = document.getElementById("calculator");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const resultDiv = document.getElementById("result");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const number1 = num1.value;
  const number2 = num2.value;
  const operation = operator.value;
  const result = eval(`${number1} ${operation} ${number2}`);
  resultDiv.textContent = result;
});*/

//Задание 5
const button = document.querySelector("button");
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomAngle() {
  return Math.floor(Math.random() * 361) - 180;
}

button.addEventListener("mouseenter", function () {
  button.style.backgroundColor = getRandomColor();
});

button.addEventListener("mouseleave", function () {
  button.style.transform = `rotate(${getRandomAngle()}deg)`;
});
