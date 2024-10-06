// static/js/main.js

async function fetchItems() {
    try {
        const response = await fetch("/api/recommended", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        await handleStatus(response);
    } catch (err) {
        console.error(`Error loading items: ${err}`);
    }
}

async function handleStatus(response) {
    try {
        const data = await response.json();
        createItemElements(data.items);
    } catch (err) {
        console.error(`Error parsing JSON: ${err}`);
    }
    switch (response.status) {
        case 200:
        case 500:
            break;
        default:
            break;
    }
}

function createItemElements(items) {
    const gridContainer = document.querySelector(".grid-container");

    items.forEach(item => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.alt;
        img.classList.add("item-img");

        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");

        const itemName = document.createElement("h3");
        itemName.title = item.name;
        itemName.textContent = item.name;
        itemName.classList.add("item-name");

        const itemPrice = document.createElement("h2");
        itemPrice.textContent = item.price;
        itemPrice.classList.add("item-price");

        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to cart";
        addToCartBtn.classList.add("add-to-cart");

        const bookNowBtn = document.createElement("button");
        bookNowBtn.textContent = "Book now";
        bookNowBtn.classList.add("book-now");

        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemPrice);
        itemInfo.appendChild(addToCartBtn);
        itemInfo.appendChild(bookNowBtn);

        gridItem.appendChild(img);
        gridItem.appendChild(itemInfo);

        gridContainer.appendChild(gridItem);
    });
}


document.addEventListener("DOMContentLoaded", async () => {
    await fetchItems();
});