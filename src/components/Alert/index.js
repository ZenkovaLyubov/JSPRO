export default Vue.component('alert', {
    template:`
    <div class="alert-window center__content">
                      <i class="fa-solid fa-xmark close-icon-alert" @click="$emit('close')"></i>
                      <div class="alert">
  Ошибка сервера.
                          
                      </div>
                  </div>
    `
  })
