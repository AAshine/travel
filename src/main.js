import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import './assets/css/reset.css'
import './assets/css/border.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
console.log(router);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
