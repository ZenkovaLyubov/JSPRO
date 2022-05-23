const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },

];

class GoodsItem {
  constructor({ title = 'Default title', price = 0 }) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
    <img src="https://picsum.photos/200" alt="photo">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
    </div>
  `;
  }
}
class GoodsList {
  items = [];
  fetchGoods() {
    this.items = goods;
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

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
goodsList.getCount();