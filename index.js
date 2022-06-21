const url = "https://fakestoreapi.com/products";
let items = [];

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    items = data;
    console.log(data);
    showItems(data);
    // for (let i = 0; i < items.length; i++) {
    //   document.querySelector("#clothes").innerHTML += `
    //   <img onClick="toggleActive('#item${i}')" src=${items[i].image} style="width:200px; height:200px; padding:20px; ">

    //   `;
    // }
  });

function showItems(items) {
  document.querySelector("#clothes").innerHTML = "";
  items.forEach((item, i) => {
    document.querySelector(
      "#clothes"
    ).innerHTML += ` <img onClick="toggleActive('#item${i}')" src=${item.image} style="width:200px; height:200px; padding:20px; ">`;
  });
}

function addItems() {
  let item = {
    category: document.querySelector("#category").value,
    description: document.querySelector("#description").value,
    productId: document.querySelector("#productId").value,
    image: document.querySelector("#image").value,
    price: document.querySelector("#price").value,
    rating: document.querySelector("#rating").value,
    title: document.querySelector("#title").value,
  };
  items.push(item);
  showItems(items);
  console.log(items);
}
