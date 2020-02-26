import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'

// Import the styles directly. (Or you could add them via script tags.)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(NavbarPlugin)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

// New Vue instance
new Vue({
  // Vue instance options
  el: '#App', //
  template: 'App'
})
