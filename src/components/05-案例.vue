<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text"/>
      品牌名称:
      <input type="text"/>
      <!-- 绑定事件 -->
      <input type="button" value="添加"/>
    </div>
    <div class="add">
      品牌名称:
      <input type="text"/>
    </div>
    <div>
      <table class="tb">
        <thead>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <a href="#">删除</a>
            </td>
          </tr>
          <tr>
            <!-- <td>没有任何数据，请先添加</td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less" scoped>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
