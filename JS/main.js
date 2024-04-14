let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div class="col-sm-12 col-md-6 col-lg-3 mt-4">
          <div class="card" id=${id}>
            <img src=${img} class="card-img-top">
            <div class="card-body">
                <h5 class="card-title"><span class="badge">New</span>${name}</h5>
                <div class="price-quantity">
                    <h6>Price: €${price}</h6>
                    <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
              </div>
          </div>
        </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();


/*const products = [
    {
      id: 0,
      name: "Flower Pink Earrings",
      price: 10,
      img: "../img/products/earrings/flowerPink.jpeg",
    },
    {
      id: 1,
      name: "Daisy Earrings",
      price: 10,
      img: "../img/earrings.daisys.jpeg",
    }
   
  ];

  const categories = [...new Set(products.map((item)=>
    {return item}))]
    let i=0;
  document.getElementById("shoppingCart").innerHTML = categories.map((item)=>{
    var{img, name,price} = item;
    return `
    <div class="col-sm-12 col-md-6 col-lg-3 mt-4">
                <div class="card" id=${id}>
                    <img src=${img} class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title"><span class="badge">New</span>${name}</h5>
                      <div class="price-quantity">
                        <h6>Price: €${price}</h6>
                        <div class="buttons">
                            <i class="bi bi-dash-lg" onclick='addtocart("+(i++)+")'>Add to cart</i>
                            <div class="quantity" id="quant2">0</div>
                            <i class="bi bi-plus-lg" onclick="increment(2)"></i>
                        </div>
                  </div>
                    </div>
                </div>
      </div>
    `;
    }).join('');*/