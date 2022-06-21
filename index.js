const url = "https://fakestoreapi.com/products";
let items = [];

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    items = data;
    console.log(data);
    showItems(data);
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
    id: items.length + 1,
    image: document.querySelector("#image").value,
    price: document.querySelector("#price").value,
    rating: document.querySelector("#rating").value,
    title: document.querySelector("#title").value,
  };
  items.push(item);
  showItems(items);
  console.log(items);
}
