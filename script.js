const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = ({ title = 'Default title', price = 100 }) => `
      <div class="goods-item">
      <img src="https://picsum.photos/200" alt="photo">
        <h3>${title}</h3>
        <p>$${price}</p>
      </div>
    `;

const renderGoodsList = (list = []) =>
  document.querySelector('.goods-list').innerHTML =
  list.map(item => renderGoodsItem(item)).join('');

renderGoodsList(goods);