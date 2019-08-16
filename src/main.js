// 引用vue的模块
import Vue from 'vue'
// import App from './App.vue'
// 入口函数中引用相关的vue
// import haha from './components/01-试试.vue'
// import haha from './components/02-bind指令.vue'

import haha from './components/04.model.vue'

Vue.config.productionTip = false

new Vue({
  // el: '#app',h是用来渲染函数到页面的指定地方
  render: h => h(haha)
}).$mount('#app')
