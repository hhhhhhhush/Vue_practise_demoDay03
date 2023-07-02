<template>
  <div>
    <h1>我是首页</h1>
    <p ref="pp">{{ msg }}</p>
    <button @click="msg='666'">修改数据，触发钩子</button><br><br>
    <button @click="$destroy()">点我销毁,data数据被销毁，上面按钮失效</button>
    <my-life :msg="msg"></my-life>
  </div>
</template>

<script>
/* 1.Vue的生命周期函数四个阶段 8个钩子
    初始化阶段：beforeCreate，created
    挂载阶段：beforeMount，mounted
    更新阶段：beforeUpdate，updated
    销毁阶段：beforeDestroy，destroyed
  
  2.常用的生命周期钩子函数
    created：一般用于发送ajax请求
    mounted：一般用于dom操作

  3.请问vue在第一次加载时会执行哪些钩子？
    前四个beforeCreate，created，beforeMount，mounted


*/
import MyLife from '@/components/MyLife.vue'
export default {
  components: { MyLife },
  data() {
    return {
      msg: "学前端，纯靠敲"
    }
  },
  // 1.beforeCreate：创建了vue实例，但是还没有创建data
  beforeCreate() {
    console.log('1-父组件-beforeCreate')
    console.log(this) //vm实例
    console.log(this.msg)
  },
  // 2.created：已经创建了data，但是还没有挂载点$el
  // 常用钩子：最早可以操作data的钩子，一般用于发送Ajax请求
  created() {
    console.log('2-父组件-created')
    console.log(this)
    console.log(this.msg)
    console.log(this.$el)
  },
  // 3.beforeMount：创建了$el，但是还没有完成挂载
  beforeMount() {
    console.log('3-父组件-beforeMount')
    console.log(this)
    console.log(this.$el)
    console.log(this.$refs)
  },
  // 4.mounted：完成初始渲染
  // 常用钩子：最早可以操作dom元素的。一般用于dom操作
  mounted() {
    console.log('4-父组件-mounted')
    console.log(this)
    console.log(this.$el)
    console.log(this.$refs)
  },
  // 5.beforeUpdate：当data数据发生变化了执行，但是数据变了。还没有更新视图
  beforeUpdate() {
    console.log('5-父组件-beforeUpdate')
    console.log(this)
    console.log(this.msg)
  },
  // 6.updated：更新视图（将变化后的数据重新渲染）
  updated() {
    console.log('6-父组件-updated')
    console.log(this)
  },
  // 7.beforeDestroy：销毁前执行（还没有销毁）
  //执行时机 （1）组件使用v-if切换   （2）调用 vm.$destroy
  // 应用场景：清除定时器 setinterval
  beforeDestroy() {
    console.log('7-父组件-beforeDestroy')
    console.log(this)
  },
  // 8.destroyed：vm完成销毁（解绑侦听器、子组件、methods事件）
  destroyed() {
    console.log('8-destroyed')
    console.log(this)
  },

}
</script>

<style scoped></style>