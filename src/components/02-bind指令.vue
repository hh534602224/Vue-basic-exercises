<template>
    <div class="hahah">
        <!-- <img src="../assets/hots_3.jpg" alt=""> -->
        <img v-bind:src="img" alt="">
        <p></p>
    </div>
</template>
<script>
// 如果是图片的话，要引出属性出来先；@：代表当前项目根目录 ，根目录 就是指入口文件所在的目录
import img from '@/assets/hots_3.jpg'
export default {
  data () {
    return {
      img: img
    }
  }
}
</script>
