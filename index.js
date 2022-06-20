const url = "https://fakestoreapi.com/products";
let items = [];

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     items = data;
//     document.querySelector("#clothes").innerHTML = `${items}`;
//     showItems(items);
//   });

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    items = data;
    console.log(data)
    for (let i=0; i < items.length; i++){
      document.querySelector("#clothes").innerHTML += `
      <img onClick="toggleActive('#item${i}')" src=${items[i].image} style="width:200px; height:200px; padding:20px; ">
      <div class="modal" id="item${i} >
      <button onClick="toggleActive('#item${i}')">x</button>
      ${items[i].category}
      `
    }
  });

  function toggleActive(el) {
    document.querySelector(el).classList.toggle("active");
  }

// function showItems(items) {
//   document.querySelector("#clothes").innerHTML = "";
//   items.forEach((items) => {
//     document.querySelector("#clothes").innerHTML += `${items}`;
//   });
// }

function addItems() {
  const product = document.querySelector("#addItems").value;
  let item = {
    category : items.category,
    description :  items.description,
    productId : items.id,
    image : items.image,
    price:  items.price,
    rating : items.rating.rate,
    title: items.title
  }
  if (item === "")
    document.querySelector("#clothes").innerHTML = `ENTER VALID VALUE`;
  else {
    items.push(item);
    showItems(items);
  }
}
