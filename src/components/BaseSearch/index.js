export default Vue.component('base-search', {
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
