<template>
  <div>
    <van-tabs animated>
  <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index.id">
    内容 {{ index }}
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>

</style>
