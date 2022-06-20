import {BASE_URL, GOODS_ADD, GOODS, GOODS_BASKET} from '/src/constants';
import {service, serviceWithBody} from '/src/services';

export default Vue.component('basket', {
    data(){
      return{
        basketGoodsItems: []
      
      }
    },
    template:`
    <div class="cart-window center__content">
                      <i class="fa-solid fa-xmark close-icon" @click="$emit('close')"></i>
                      <div class="cart-list " v-if="basketGoodsItems.length">
                      
                          <basket_product 
                          v-for="item in basketGoodsItems" 
                          :item="item"
                          @add="addGood"
                          @del="delGood"
                          ></basket_product>
                                              
                      </div>
                      <h3 v-else>Корзина пуста</h3>
                     
                  </div>
    `,
    mounted(){
      service(GOODS_BASKET).then((data)=>{
        this.basketGoodsItems = data;
      })
    },
    methods:{
      addGood(id){
        serviceWithBody(GOODS_BASKET, "POST", {
          id
        }).then((data)=>{
            this.basketGoodsItems = data;
        
        })
      },
      delGood(id){
        serviceWithBody(GOODS_BASKET, "DELETE", {
          id
        }).then((data)=>{
            this.basketGoodsItems = data;
       
        })
      }
    }
  })
  