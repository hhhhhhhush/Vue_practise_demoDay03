<template>
  <div>
    <div class="footer_wrap">
      <!-- 路由导航 -->
      <!-- rout-link是内置组件，会被渲染成a标签，to会被href -->
      <router-link to="/find">发现页面</router-link>
      <router-link to="/my">我的</router-link>
      <router-link to="/friend">关注</router-link>
      <!-- <router-link to="/notfound">未知</router-link> -->
      <a href="#/notfound">未知</a>
    </div>
    <div class="top">
      <!-- 7.路由出口 内置组件，相当于一个占位盒子。用于渲染路由匹配到的组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  margin-left: 30px;
}
</style>