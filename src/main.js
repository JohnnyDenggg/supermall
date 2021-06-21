import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'

Vue.config.productionTip = false

new Vue ({
  render: h => h(App),
  router
}).$mount('#app')

// 解决移动端300ms延迟
FastClick.attach(document.body)
