// 引用vue的模块
import Vue from 'vue'
// import App from './App.vue'
// 入口函数中引用相关的vue
import haha from './components/01-试试.vue'

Vue.config.productionTip = false

new Vue({
  // el: '#app',h是用来渲染函数的
  render: h => h(haha)
}).$mount('#app')
