import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入路由对象
import router from '@/router/index.js'
// 测试是否为原型上的router
// router.a = 1
// 6.挂载路由
new Vue({
  router,  //Vue.prototype.$router
  render: h => h(App)
}).$mount('#app')
