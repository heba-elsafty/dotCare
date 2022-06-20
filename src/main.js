import Vue from 'vue'
import App from './App.vue';
import router from './router';
import {
  BootstrapVue
} from 'bootstrap-vue';




import "./assets/stylesheet/App.scss"


import i18n from './i18n'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(require('vue-moment'));


new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')