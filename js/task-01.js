const liItems = document.querySelectorAll(".item");
console.log("number of categories: ", liItems.length);

// liItems.forEach(item => {
//     const category = item.querySelector("h2");
//     console.log(`Category: ${category.textContent}`);

//     const element = item.querySelectorAll("ul li").length;
//     console.log(`Elements: ${element}`);
// });

// Розумію, що це потрібно було зробити по ТЗ, 
// але мені здається, що краще виглядає мій код вище 
liItems.forEach(item => {
    const category = item.firstElementChild;
    console.log(`Category: ${category.textContent}`);

    const elements = item.lastElementChild.children.length;
    console.log(`Elements: ${elements}`);
});