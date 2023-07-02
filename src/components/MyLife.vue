<template>
    <div>
        <h2>我是子组件</h2>
        <b>{{ msg }}</b>
    </div>
</template>

<script>
export default {
    props: {
        msg:String
    },
    // 1.beforeCreate：创建了vue实例，但是还没有创建data
    beforeCreate() {
        console.log('1-子组件-beforeCreate')
        console.log(this) //vm实例
        console.log(this.msg)
    },
    // 2.created：已经创建了data，但是还没有挂载点$el
    // 常用钩子：最早可以操作data的钩子，一般用于发送Ajax请求
    created() {
        console.log('2-子组件-created')
        console.log(this)
        console.log(this.msg)
        console.log(this.$el)
    },
    // 3.beforeMount：创建了$el，但是还没有完成挂载
    beforeMount() {
        console.log('3-子组件-beforeMount')
        console.log(this)
        console.log(this.$el)
        console.log(this.$refs)
    },
    // 4.mounted：完成初始渲染
    // 常用钩子：最早可以操作dom元素的。一般用于dom操作
    mounted() {
        console.log('4-子组件-mounted')
        console.log(this)
        console.log(this.$el)
        console.log(this.$refs)
    },
    // 5.beforeUpdate：当data数据发生变化了执行，但是数据变了。还没有更新视图
    beforeUpdate() {
        console.log('5-子组件-beforeUpdate')
        console.log(this)
        console.log(this.msg)
    },
    // 6.updated：更新视图（将变化后的数据重新渲染）
    updated() {
        console.log('6-子组件-updated')
        console.log(this)
    },
    // 7.beforeDestroy：销毁前执行（还没有销毁）
    //执行时机 （1）组件使用v-if切换   （2）调用 vm.$destroy
    // 应用场景：清除定时器 setinterval
    beforeDestroy() {
        console.log('7-子组件-beforeDestroy')
        console.log(this)
    },
    // 8.destroyed：vm完成销毁（解绑侦听器、子组件、methods事件）
    destroyed() {
        console.log('8-子组件-destroyed')
        console.log(this)
    },
}
</script>

<style scoped></style>