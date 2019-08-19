<template>
    <div class="box">
        <input type="text" v-model="neirong">
        <button @click='getCateList'>get请求</button>
        <button>post请求</button>
    </div>
</template>
<script>
import { getAllCate } from '../axios.js'
export default {
  data () {
    return {
      neirong: ''

    }
  },
  methods: {
    getCateList () {
      getAllCate()
      //   then就是请求成功，就会调用then,里面有一个参数就是成功时的回调
        .then((res) => {
          console.log(res)
        })
        // catch就是请求失败时调用，里面一个回调函数，传入错误信息对象
        .catch((err) => {
          console.log(err)
        })
    }

  }
}
</script>
<style lang="less" scoped>

</style>
