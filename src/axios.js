// 1.引入axios
import axios from 'axios'
// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8808'
// 获取全部分类
export const getAllCate = () => {
  return axios({
    url: '/getAllCate'
  })
}
