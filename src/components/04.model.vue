<template>
<div class="logion">
     <span>账号</span><input type="text" >
     <span>密码</span><input type="text" v-myfocus>
</div>
</template>
<script>
export default {
  directives: {
    myfocus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>
