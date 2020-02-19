import Vue from 'vue'
import App from './App.vue'
//import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// New Vue instance
new Vue({
  // Vue instance options
  el: '#appId', //
  template: 'App'
})
