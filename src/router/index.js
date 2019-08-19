// 这个页面是用来封装路由
// 1.引入vue
import Vue from 'vue'
// 2.引入vue-router
import VueRouter from 'vue-router'
// 引入组件
import index from '@/components/index.vue'
import product from '@/components/product.vue'
import computer from '@/components/computer.vue'
import phone from '@/components/phone.vue'
import fruits from '@/components/fruits.vue'
// 3.use：中间件让引入的VueRouter用起来，让vue使用vue-router进行路由管理
Vue.use(VueRouter)
// 4.创建路由对象：实现路由和组件的映射,在里面配置路由和注入路由
const router = new VueRouter({
  routes: [
    // 打开页面的跳转
    {
      // 设置默认的跳转名字
      name: 'default',
      //   路由跳转的路径
      path: '/',
      //  重定向
      redirect: { name: 'index' }
    },
    //   主页模块配置
    {
      // 这个路由跳转的名称
      name: 'index',
      //   路由跳转的路径
      path: '/index',
      //   把引入的模块组件设置
      component: index

    },
    // 产品模块的配置
    {
      // 这个路由跳转的名称
      name: 'product',
      //   路由跳转的路径
      path: '/product/:id',
      //   把引入的模块组件设置
      component: product,
      children: [
        {
          // 这个路由跳转的名称
          name: 'computer',
          //   路由跳转的路径,不带/
          path: 'computer',
          //   把引入的模块组件设置
          component: computer
        },
        {
          // 这个路由跳转的名称
          name: 'fruits',
          //   路由跳转的路径,不带/
          path: 'fruits',
          //   把引入的模块组件设置
          component: fruits
        },
        {
          // 这个路由跳转的名称
          name: 'phone',
          //   路由跳转的路径,不带/
          path: 'phone',
          //   把引入的模块组件设置
          component: phone
        }
      ]
    }
  ]
})
// 把路由对象暴露出去
export default router
