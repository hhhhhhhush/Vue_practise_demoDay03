<template>
    <div>
        <p>我是friend</p>
        <p>这是当前页面的query接收到的参数</p>
        <p>姓名：{{ $route.query.name }}   年龄： {{ $route.query.age }} </p>
        <p>这是当前页面的params接收到的参数</p>
        <p>姓名：{{ $route.params.name }}   年龄： {{ $route.params.age }} </p>
    </div>
</template>

<script>
    export default {
        name: "friend"
    }
</script>

<style scoped>

</style>    