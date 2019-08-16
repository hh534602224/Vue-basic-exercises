<template>
    <div class="box">
        <!-- 遍历数组:对于数组，可以遍历出数组的value和index (值和索引)
        :key:可以唯一标识当前数据行，后期的操作可以提高效率，这个值必须是唯一值 -->
     <ul><li v-for='(value,index) in bbbb' :key='index' >{{value+':'+index}}</li></ul>
     <!-- 遍历对象:对于对象，可以遍历出对象的value,key,index,(值，key,index) -->
     <ul><div v-for='(v,k,i) in aaaa' :key='k'>{{k+":"+v+":"+i}}</div></ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      aaaa: {
        msg: 'hahah',
        age: 20,
        gender: '男'
      },
      bbbb: [1, 3, 4, 56, 67]
    }
  }
}
</script>
