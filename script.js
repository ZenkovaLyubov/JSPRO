const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },

];

const BASE_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const GOODS = `${BASE_URL}/catalogData.json`;
const GOODS_BASKET = `${BASE_URL}/getBasket.json`;

function service(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url)
  xhr.send();

  const loadHandler = () => {
    callback(JSON.parse(xhr.response))
  }
  xhr.onload = loadHandler;
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
      <p>${this.price}</p>
    </div>
  `;
  }
}
class GoodsList {
  items = [];
  fetchGoods(callback) {
    service(GOODS, (data) => {
      this.items = data;
      callback();
    });
  }
  render() {
    const goods = this.items.map(item => {
      const goodItem = new GoodsItem(item);
      return goodItem.render()
    }).join('');

    document.querySelector('.goods-list').innerHTML = goods;
  }
  getCount() {
    const initialValue = 0;
    const sum = this.items.reduce(
      (accumulator, { price = 0 }) => accumulator + price,
      initialValue
    );
    console.log(sum);
    document.querySelector('.goods-list').insertAdjacentHTML('afterend', `<div class='sumPrice center_content'>Сумма: $${sum}</div>`);
  }
}

class BasketGoods {
  item = [];
  fetchData() {
    service(GOODS_BASKET, (data) => {
      this.items = data;
      console.log(this.items);
    });
  }

}

const goodsList = new GoodsList();
goodsList.fetchGoods(() => {
  goodsList.render();
  goodsList.getCount();
});

const basketGoods = new BasketGoods();
basketGoods.fetchData();
