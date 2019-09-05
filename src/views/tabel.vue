<template>
  <div>
    <!-- 内容区 -->
    <router-view></router-view>
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="edit">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      active: 0,
      value: '你好'
    }
  }
}
</script>

<style lang ='less' scoped>
</style>
