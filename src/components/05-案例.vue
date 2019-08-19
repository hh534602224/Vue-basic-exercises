<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model="brand.id"/>
      品牌名称:
      <input type="text" v-model="brand.bname"/>
      <!-- 绑定事件 -->
      <input type="button" v-on:click="add" value="添加"/>
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入条件" v-model="usersearch" />
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
          <tr v-for="(value,index) in shaixuan" :key="index">
            <td >{{value.id}}</td>
            <td>{{value.bname}}</td>
            <td>{{value.time | newtime('/')}}</td>
            <td>
              <a href="#" v-on:click="del(index)">删除</a>
            </td>
          </tr>
          <tr>
            <td colspan="4" v-show="shuju.length==0">没有任何数据，请先添加</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { newtime } from '@/components/tools/global.js'
export default {
  data () {
    return {
      usersearch: ' ',

      brand: {
        id: '',
        bname: ''
      },
      shuju: [
        {
          id: '1',
          bname: '大众',
          time: new Date()
        },
        {
          id: '2',
          bname: 'QQ',
          time: new Date()
        },
        {
          id: '3',
          bname: '比亚迪',
          time: new Date()
        }
      ],
      shaixuan: []

    }
  },

  // 事件处理函数，有关事件发生的都这里写
  methods: {
    // `this` 在方法里指向当前 Vue 实例
    del (index) {
      this.shuju.splice(index, 1)
    },
    add () {
      this.brand.time = new Date()
      this.shuju.push({ ...this.brand })
      // console.log(this)
    }
    // search () {
    //   return this.shuju.filter((data) => {
    //     // console.log(data.bname.includes(this.usersearch))
    //     return data.bname.includes(this.usersearch)
    //   })
    // }

  },
  mounted () {
    this.usersearch = ''
  },
  // 过滤器
  filters: {
    newtime
  },
  // 侦听器
  watch: {
    // 作用 监听一个值的变化 执行函数
    // 常规方式
    usersearch (newV, oldV) {
      this.shaixuan = this.shuju.filter((data) => {
        // console.log(data.bname.includes(this.usersearch))
        return data.bname.includes(this.usersearch)
      })
    }
  }
  // 加计算属性
  // computed: {

  // }
}
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
