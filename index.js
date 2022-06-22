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
    ).innerHTML += ` <img src=${item.image} style="width:200px; height:200px; padding:20px; "><div>${item.title}</div>`;
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

function getSelectedValue(e) {
  const category = e.target.value;
  if (category === "all") {
    return showItems(items);
  }
  const filtered = items.filter((item) => item.category === category);

  return showItems(filtered);
}

const sortedPrice = (e) => {
  const direction = e.target.value;
  const sorted = items.sort((a, b) => a.price - b.price);
  if (direction === "ascending") {
    showItems(sorted);
  } else {
    showItems(sorted.reverse());
  }
};

const sortedName = (e) => {
  const direction = e.target.value;
  const sorted = items.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
};
