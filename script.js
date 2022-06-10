const BASE_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const GOODS = `${BASE_URL}/catalogData.json`;
const GOODS_BASKET = `${BASE_URL}/getBasket.json`;

function service(url) {
  return fetch(url)
    .then((res) => res.json())
}

window.onload = () => {

Vue.component('alert', {
    template:`
    <div class="alert-window center__content">
                      <i class="fa-solid fa-xmark close-icon-alert" @click="$emit('close')"></i>
                      <div class="alert">
  Ошибка сервера.
                          
                      </div>
                  </div>
    `
  })

Vue.component('base-search', {
    model: {
      prop: 'value',
      event: 'change'
    },
    template: `
    <div class="search">
      <input
        type="text" class="goods-search" placeholder="Поиск..."
        @input="$emit('change', $event.target.value)"
      >
     
      </div>
    `
  })

Vue.component('basket', {
  template:`
  <div class="cart-window center__content">
                    <i class="fa-solid fa-xmark close-icon" @click="$emit('close')"></i>
                    <div class="cart-list ">

                        <div class="goods-item">
                            <img src="img/product.jpg" alt="photo">
                            <h3>Название товара</h3>
                            <p>$Цена</p>
                        </div>
                    </div>
                </div>
  `
})
Vue.component('custom-button', {
    template:
    `
    <button class="button cart-button" type="button" @click="$emit('click')">
    <slot></slot>
    </button>
    `
  })
Vue.component('good', {
  props:[
    'item'
  ],
  template:`
  <div class="goods-item">
                            <img src="https://picsum.photos/200" alt="photo">
                            <h3>{{item.product_name}}</h3>
                            <p>{{item.price}}</p>
                        </div>
  `
  
})

  const app = new Vue({
    el: '#root',
    data: {
      items: [],
      searchValue: '',
      isVisibleCart: false,
      isErrorAlert: false,
    },
    methods: {
      setVisibleCart() {
        this.isVisibleCart=!this.isVisibleCart;
      },
      delErrorAlert(){
        setTimeout(()=>this.isErrorAlert=false, 5000);
      },
      setErrorAlert(){
        this.isErrorAlert=false;
      }
    },
    mounted() {
        service(GOODS).then((data) => {
        this.items = data;
        this.filteredItems = data;
        return data;
      })
      service(GOODS).catch(() => {
        this.isErrorAlert = true;
        this.delErrorAlert();
       
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
      },
    },
  })
}

