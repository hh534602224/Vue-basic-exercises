<template>
<!-- 这是根页面 -->
<div id="app">
    <p>根页面</p>
    <router-link to='/index'>首页</router-link><br>
    <router-link to='/product/1'>电脑</router-link><br>
     <router-link to='/product/2'>手机</router-link><br>
      <router-link to='/product/3'>水果</router-link><br>
    <router-view></router-view>
</div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>

</style>
