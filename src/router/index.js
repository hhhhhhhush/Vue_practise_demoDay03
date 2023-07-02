import Vue from 'vue'
// 1.导入vue-router
import VueRouter from 'vue-router'

// 2.注册内置全局组件VueRouter
Vue.use(VueRouter)

// 3.导入组件
import FindPage from '@/views/FindPage.vue'
import MyPage from '@/views/MyPage.vue'
import FriendPage from '@/views/FriendPage.vue'
import NotFound from '@/views/NotFound.vue'

// 4.定义路由规则：路径 和 页面（组件） 一一对应
const routes = [
  { path: '/find', component: FindPage },
  { path: '/my', component: MyPage },
  { path: '/friend', component: FriendPage },
  { path: '/notfound', component: NotFound },
]

// 5.创建路由实例
const router = new VueRouter({
  routes
})

// 导出路由对象
export default router