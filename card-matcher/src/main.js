import Vue from 'vue'
import Game from './Game.vue'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(Game),
  store,
}).$mount('#app')
