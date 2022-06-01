const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },

];

const BASE_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const GOODS = `${BASE_URL}/catalogData.json`;
const GOODS_BASKET = `${BASE_URL}/getBasket.json`;

function service(url) {
  return fetch(url)
    .then((res) => res.json());
}

class GoodsItem {
  constructor({ product_name = 'Default name', price = 0 }) {
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
    <img src="https://picsum.photos/200" alt="photo">
      <h3>${this.product_name}</h3>
      <p>$${this.price}</p>
    </div>
  `;
  }
}
class GoodsList {
  items = [];
  filteredItems = [];
  fetchGoods() {
    return service(GOODS).then((data) => {
      this.items = data;
      this.filteredItems = data;
      return data;
    })

  }
  filter(str) {
    this.filteredItems = this.items.filter(({ product_name }) => {
      return (new RegExp(str, 'i')).test(product_name);
    })
  }
  render() {
    const goods = this.filteredItems.map(item => {
      const goodItem = new GoodsItem(item);
      return goodItem.render()
    }).join('');

    document.querySelector('.goods-list').innerHTML = goods;
  }
  calculatePrice() {
    const initialValue = 0;
    const sum = this.filteredItems.reduce(
      (accumulator, { price = 0 }) => accumulator + price,
      initialValue
    );
    return sum;
  }
  renderCalculatePrice(sum) {
    const divSum = document.querySelector('.sumPrice');
    if (divSum) {
      divSum.remove();
    }
    document.querySelector('.goods-list').insertAdjacentHTML('afterend', `<div class='sumPrice center_content'>Сумма: $${sum}</div>`);
  }
}

class BasketGoods {
  items = [];
  fetchGoods() {
    return service(GOODS).then((data) => {
      this.items = data;
      return data;
    });
  }
}

const goodsList = new GoodsList();
goodsList.fetchGoods().then(() => {
  goodsList.render();
  goodsList.renderCalculatePrice(goodsList.calculatePrice());
});

const basketGoods = new BasketGoods();
basketGoods.fetchGoods().then((data) => console.log(data));

document.querySelector('.search-button').addEventListener('click', () => {
  const input = document.querySelector('.goods-search');
  goodsList.filter(input.value);
  goodsList.render();
  goodsList.renderCalculatePrice(goodsList.calculatePrice());
})

