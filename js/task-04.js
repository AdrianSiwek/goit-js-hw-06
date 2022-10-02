let counterValue = 0;
const reductionBtn = document.querySelector('button[data-action="decrement"]');
const riseBtn = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

reductionBtn.addEventListener("click", decrement);
riseBtn.addEventListener("click", increment);
