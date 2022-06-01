const BASE_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const GOODS = `${BASE_URL}/catalogData.json`;
const GOODS_BASKET = `${BASE_URL}/getBasket.json`;

function service(url) {
  return fetch(url)
    .then((res) => res.json());
}

window.onload = () => {
  const app = new Vue({
    el: '#root',
    data: {
      items: [],
      searchValue: '',
    },
    mounted() {
      service(GOODS).then((data) => {
        this.items = data;
        this.filteredItems = data;
        return data;
      })
    },
    computed: {
      calculatePrice() {
        const initialValue = 0;
        const sum = this.filteredItems.reduce(
          (accumulator, { price = 0 }) => accumulator + price,
          initialValue
        );
        return sum;
      },
      filteredItems() {
        return this.items.filter(({ product_name }) => {
          return product_name.match(new RegExp(this.searchValue, 'gui'));
        })
      }
    }
  })
}

