
import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui'

let loadingInstance
const Axios = axios.create({
  baseURL: '',
  timeout: 20000,
  responseType: 'json',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  loadingInstance = Loading.service({
    text: '处理中...',
    fullscreen: false,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  if (config.method === 'post' || config.method === 'get') {
    config.data = qs.stringify(config.data)
  }
  if (localStorage.token) {
    config.headers.Authorization = localStorage.token
  }
  return config
}, function (error) {
  Message({
    type: 'error',
    message: '提交出错 ' + error,
    showClose: true
  })
  return Promise.reject(error)
})
// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  loadingInstance.close()
  return success(response)
}, function (error) {
  loadingInstance.close()
  Message({
    type: 'error',
    message: '出错了 ' + error,
    showClose: true
  })
  return Promise.reject(error)
})
// 成功处理
function success (response) {
  if (response.status === 200 || response.status === 304) {
    return response.data
  }
  return {
    data: {
      code: -404,
      message: response.statusText,
      data: response.statusText
    }
  }
}
// 失败处理
function error (error) {
  return error
}
export default {
  post (url, params, callback) {
    return Axios({
      url: url,
      method: 'post',
      params: params
    }).then(callback).catch(error)
  },
  get (url, params, callback) {
    return Axios({
      url: url,
      method: 'get',
      params: params
    }).then(callback).catch(error)
  }
}
