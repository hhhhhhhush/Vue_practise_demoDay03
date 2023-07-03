<template>
    <div>
        <p>
            我是find<br>
            <router-link to="/find/rank">rank</router-link>
            <router-link to="/find/rec">rec</router-link>
            <router-link to="/find/songlist">songlist</router-link>
        </p>
        <div style="border:1px solid red;">
            <!-- 路由出口 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "find"
    }
</script>

<style scoped>
    a {
        margin-left: 20px;
    }
</style>