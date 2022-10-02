const list = document.querySelector("#categories");
const numberCategories = list.querySelectorAll("li.item");
console.log(`Number of categories: ${numberCategories.length}`);

const arreyCategories = numberCategories.forEach((item) => {
    console.log("");
    console.log(`Categories: ${item.querySelector("h2").textContent}`);
    console.log(`Categories: ${item.querySelectorAll("li").length}`)
})