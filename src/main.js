// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from './axios'
// 样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import './assets/css/iconfont/iconfont.css'
import './assets/css/csshake-vertical.min.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
// 修改title
Vue.directive('title', {
  inserted: function (el, binding) {
    if (!el.dataset.title) {
      document.title = binding.value
    } else {
      document.title = el.dataset.title
    }
  }
})
// 查找字符串位置
Vue.prototype.$findPositionOfCharacter = (str, cha, num) => {
  let x = -1
  for (let i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1)
  }
  return x
}
Vue.prototype.$back = () => {
  router.go(-1)
}
Vue.prototype.$post = axios.post
Vue.prototype.$get = axios.get

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
