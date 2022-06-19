import {BASE_URL, GOODS_ADD, GOODS, GOODS_BASKET} from './constants.js';
import {service, serviceWithBody} from './services.js';
import './style.css';
import './components/BasketProduct/index.js';
import './components/CustomButton/index.js';
import './components/Alert/index.js';
import './components/BaseSearch/index.js';
import './components/Basket/index.js';
import './components/Good/index.js';

window.onload = () => {
  
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

