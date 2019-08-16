<template>
<div class="hh">
<span>{{msg}}</span>
<p>{{age}}</p>
<p>{{gender}}</p>
</div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hahaahah',
      age: 20,
      gender: '男'
    }
  }
}
</script>
// 样式
<style>
p{
    color :red;
    font-size: 30px;
}
</style>
