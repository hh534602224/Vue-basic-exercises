<template>
<div class="product">
<h1>产品区</h1>
<!-- 产品信息在这里渲染 -->
<p>{{info}}</p>
<button v-on:click="detail">点击查看详情</button>
<!-- 产品的详情页在这里渲染 -->
<router-view></router-view>
</div>
</template>
<script>
import router from '@/router/index.js'
export default {
  data () {
    return {
      info: '什么都没有'
    }
  },
  // 监听路由变化页面加载的时候先判断路由
  mounted () {
    // console.log(this.$route.params.id)
    if (this.$route.params.id === '1') {
      this.info = '这是电脑'
    } else if (this.$route.params.id === '2') {
      this.info = '这是手机'
    } else if (this.$route.params.id === '3') {
      this.info = '这是水果'
    }
  },
  watch: {
    '$route' (a, b) {
      if (this.$route.params.id === '1') {
        this.info = '这是电脑'
      } else if (this.$route.params.id === '2') {
        this.info = '这是手机'
      } else if (this.$route.params.id === '3') {
        this.info = '这是水果'
      }
    }

  },
  methods: {
    // 点击详情页发生的函数
    detail () {
      console.log(this.$route.params.id)
      let id = this.$route.params.id
      if (id === '1') {
        router.push({ name: 'computer' })
      } else if (id === '2') {
        router.push({ name: 'phone' })
      } else if (id === '3') {
        router.push({ name: 'fruits' })
      }
    }

  }
}
</script>
<style lang="less" scoped>

</style>
