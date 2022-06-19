export default Vue.component('basket_product', {
    props:[
      'item'
    ],
    template:`
    <div class="goods-item">
      <img src="https://picsum.photos/200" alt="photo">
      <h3>{{item.product_name}}</h3>
      <p>{{item.price}}$</p>
      <div class="count_module">
     
      <custom-button class="count_button" @click="$emit('del', item.id_product)">-</custom-button>
     
        <p>{{item.count}}</p>
        <custom-button class="count_button" @click="$emit('add', item.id_product)">+</custom-button>
      </div>
    </div>
    `,
   
  }) 