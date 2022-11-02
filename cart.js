const items = [
  {
    id: 1,
    title: "NZXT",
    desc: "NZXT C1000 PSU",
    img: "https://m.media-amazon.com/images/I/51nrWKGjFwL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    id: 2,
    title: "AMD",
    desc: "AMD Ryzen 9 5900X",
    img: "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX300_SY300_.jpg",
  },
  {
    id: 3,
    title: "Nvidia",
    desc: "ZOTAC Gaming GeForce RTX™ 3060 Ti ",
    img: "https://m.media-amazon.com/images/I/81iKGq2f77L._AC_UY218_.jpg",
  },
  {
    id: 4,
    title: "Corsair",
    desc: "Corsair Vengeance DDR5 64GB",
    img: "https://m.media-amazon.com/images/I/41Q8eUJZndL._AC_SR320,320_.jpg",
  },
];

const container = document.querySelector(".items");
const number = document.querySelector(".num");
const basket = document.querySelector(".basket");
const shop = document.querySelector(".shop");
const overlay = document.querySelector(".overlay");

const newItems = [];
function AddToCart(id) {
  items.forEach((i) => {
    if (i.id == id) {
      newItems.push({
        id: id,
        title: i.title,
        img: i.img,
        desc: i.desc,
      });
    }
  });
  addedToCartItem();
  number.textContent = newItems.length;
}

function addedToCartItem() {
  basket.innerHTML = "";
  newItems.forEach((i) => {
    basket.innerHTML += `
        <div class="shopItem">
                <img src="${i.img}"/>
            <div class="content">
                <h1>${i.title}</h1>
            </div>
            <button class="button" onclick="deletFromCart(${i.id})">Delete</button>
        </div>
              `;
  });
}

items.map((i) => {
  container.innerHTML += `
    <div class="card">  
    <h1>${i.title}</h1>
    <img src="${i.img}"/>
    <p>${i.desc}</p>
    <button class="add" onclick="AddToCart(${i.id})">Add To Cart</button>
    </div
    `;
});

function deletFromCart(id) {
  const find = newItems.find((item) => item.id === id);
  const index = newItems.indexOf(find);
  newItems.splice(index, 1);
  number.textContent = newItems.length;
  addedToCartItem();
}

let clicked = false;

shop.addEventListener("click", () => {
  overlay.classList.toggle("active");
});
