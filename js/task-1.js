const items = document.querySelectorAll(".item");
console.log(`Number of categoties: ${items.length}`);

items.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    console.log(`Category: ${title}`);

    const subItemsAmount = item.querySelectorAll("li").length;
    console.log(`Elements: ${subItemsAmount}`);
});
