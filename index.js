const url = "https://fakestoreapi.com/products";
let items = [];

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    items = data;
    document.querySelector("#clothes").innerHTML = `${items}`;
    showItems(items);
  });

function showItems(items) {
  document.querySelector("#clothes").innerHTML = "";
  items.forEach((items) => {
    document.querySelector("#clothes").innerHTML += `${items}`;
  });
}

// function addItems() {
//   const item = document.querySelector("#addProduct").value;
//   if (item === "")
//     document.querySelector("#products").innerHTML = `ENTER VALID VALUE`;
//   else {
//     items.push(item);
//     showItems(items);
//   }
// }
