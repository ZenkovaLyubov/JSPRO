import {BASE_URL, GOODS_ADD, GOODS, GOODS_BASKET} from '/src/constants.js';
import {service, serviceWithBody} from '/src/services.js';

export default Vue.component('good', {
  props:[
    'item'
  ],
  template:`
  <div class="goods-item">
                            <img src="https://picsum.photos/200" alt="photo">
                            <h3>{{item.product_name}}</h3>
                            <p>{{item.price}}$</p>
                            <div>
                            <custom-button @click="addGood">В Корзину</custom-button>
                            </div>
                            </div>
                        
  `,
  methods:{
    addGood(){
      serviceWithBody(GOODS_BASKET, "POST", {
        id: this.item.id_product,
      })
    }
  }
  
})

