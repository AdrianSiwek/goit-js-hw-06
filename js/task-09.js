function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const variableBtn = bodyColor.querySelector(".change-color");
const color = bodyColor.querySelector(".color");

const changeColor = () => {
  const variableColor = getRandomHexColor();
  bodyColor.style.backgroundColor = `${variableColor}`;
  color.textContent = `${variableColor}`
};

variableBtn.addEventListener("click", changeColor);