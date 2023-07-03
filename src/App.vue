<template>
  <div>
    <div class="footer_wrap">
      <!-- 路由导航 -->
      <router-link to="/find">发现页面</router-link>
      <router-link to="/my">我的</router-link>
      <!-- 声明式导航 -->
      <!-- 1.query传参 -->
      <!-- A页面传递： /路径？参数名=参数值  B页面接收：this.$route.query.参数名 -->

      <!-- 2.params传参 -->
      <!-- 配置路由参数：path:"/路径/:参数1/:参数2"  -->
      <!-- A页面传：/路径/参数值1/参数值2   B页面接收：this.$route.params.参数名-->

      <!-- <router-link to="/friend?name=张三&age=22">关注</router-link> -->
      <router-link to="/friend/李四/24">关注</router-link>


      <button @click="doClick">点击跳转朋友页</button>
    </div>
    <div class="top">
      <!-- 7.路由出口 内置组件，相当于一个占位盒子。用于渲染路由匹配到的组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    doClick() {
      // 编程式导航 this.$router.push()

      console.log(this)
      // 1.不传参
      this.$router.push("/friend")
      // 2.传参 
      // (1)query传参
      // this.$router.push({
      //   path: "/路径",
      //   query: { 参数名，参数值 }
      // }) 
      this.$router.push({
        path: "/friend",
        query: { name: "老铁", age: "33" }
      })
      // (2)params传参 router/index.js 需要配置路由名
      this.$router.push({
        // path: "/friend",
        // 编程式导航params方法必须使用name
        name: "friend",
        params: { name: "ikun", age: "30" }
      })


      // 编程式导航query和params区别
        // （1）query是路径传参，参数会在url中显示，页面刷新参数还在
        // （2）params是内存传参，参数不会在url中显示，页面刷新参数消失
    }
  }
}
</script>

<style scoped>
a {
  margin-left: 30px;
}
</style>