<template>
  <div class="big-box">
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
    <!-- 频道列表 -->
    <van-tabs animated>
      <van-tab v-for="item in channel" :title="item.name" :key="item.id">
        <!-- 内容区 -->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { channel } from '../../api/channel'
export default {
  name: 'home',
  data () {
    return {
      // 频道列表
      channel: [],
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    async getchannel () {
      let res = await channel()
      // console.log(res.channels)
      this.channel = res.channels
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  },
  created () {
    this.getchannel()
  }
}
</script>

<style lang='less' scoped>
.big-box{
  // position: relative;
  .van-row {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #3e9df8;
    z-index: 2;
    .van-icon {
      color: white;
      margin: 14px auto;
      padding-left: 4px;
    }
  }
}
.van-tabs {
  margin-top: 54px;
  margin-bottom: 50px;
}
</style>
