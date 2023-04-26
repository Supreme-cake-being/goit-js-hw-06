const liItems = document.querySelectorAll(".item");
console.log("number of categories: ", liItems.length);

liItems.forEach(item => {
    const category = item.querySelector("h2");
    console.log(`Category: ${category.textContent}`);

    const element = item.querySelectorAll("ul li").length;
    console.log(`Elements: ${element}`);
});