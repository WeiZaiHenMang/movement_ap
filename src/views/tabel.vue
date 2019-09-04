<template>
  <div>
    <!-- 头部 -->
    <van-row>

      <van-col span="2">
        <van-icon name="qr" size="26"/>
      </van-col>
      <van-col span="20">
        <van-search placeholder="请输入搜索关键词" background="#3e9df8" v-model="value" shape="round" />
      </van-col>
      <van-col span="2">
        <van-icon name="search" size="26"/>
      </van-col>
    </van-row>

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
  name: 'table',
  data () {
    return {
      active: 0,
      value: '你好'
    }
  }
}
</script>

<style lang ='less' scoped>
.van-row {
  background-color: #3e9df8;
  .van-icon {
    color: white;
    margin: 14px auto;
    padding-left: 4px;
  }
}
</style>
