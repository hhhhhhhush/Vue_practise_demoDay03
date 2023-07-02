<template>
  <div>
    我是根组件
    <my-life></my-life>
  </div>
</template>

<script>
import MyLife from '@/components/MyLife.vue'
export default {
  components: { MyLife },

}
</script>

<style scoped></style>