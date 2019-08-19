// 引用vue的模块
import Vue from 'vue'
// 引入路由模块
import router from '@/router/index.js'
import App from './App.vue'
// 入口函数中引用相关的vue
// import haha from './components/01-试试.vue'
// import haha from './components/02-bind指令.vue'
// import haha from './components/04.model.vue'
// import haha from './components/05-案例.vue'
// import haha from './components/06.axios.vue'
// import haha from './components/06.axios.vue'

Vue.config.productionTip = false

new Vue({
  // 注入路由：让当前应用使用我们所配置好的路由
  router,
  // el: '#app',h是用来渲染函数到页面的指定地方
  render: h => h(App)
}).$mount('#app')
