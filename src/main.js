import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue} from 'bootstrap-vue'


import "./assets/stylesheet/App.scss"


Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')