import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index"
import store from "@/store"
import '@/mock'
import "swiper/css/swiper.css"
Vue.config.productionTip = false
import { queryProductList } from "@/api/index"

queryProductList()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
