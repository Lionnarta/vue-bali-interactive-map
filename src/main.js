import 'leaflet/dist/leaflet.css'
import Vue from 'vue'
import App from './App.vue'
import './assets/static.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
