<template>
  <div class="big-box">
    <!-- 头部 -->
    <van-row>
      <van-col span="2">
        <van-icon name="qr" size="26"/>
      </van-col>
      <van-col span="20">
        <van-search placeholder="请输入搜索关键词" background="#3e9df8" shape="round" />
      </van-col>
      <van-col span="2">
        <van-icon name="search" size="26"/>
      </van-col>
    </van-row>
    <!-- 频道列表 -->
    <van-tabs animated v-model="active">
      <van-tab v-for="item in channel" :title="item.name" :key="item.id">
        <!-- 内容区 -->
        <van-list v-model="channel.loading" :finished="channel.finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in newdate.navjournalism" :key="item.art_id" :title="item.title" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { channel } from '../../api/channel'
import { journalism } from '../../api/journalism'
export default {
  name: 'home',
  data () {
    return {
      // 频道列表
      channel: [],
      // 频道当前索引值
      active: 0
    }
  },
  computed: {
    newdate () {
      return this.channel[this.active]
    }
  },
  methods: {
    // 请求频道列表
    async getchannel () {
      let res = await channel()
      res.channels.forEach(result => {
        result.timestamp = null
        result.navjournalism = []
        result.loading = false
        result.finished = false
      })
      // console.log(res.channels)
      this.channel = res.channels
    },
    // 请求新闻数据
    async onLoad () {
      // let newdate = this.channel[this.active]
      // console.log(newdate)
      let content = await journalism({
        channelId: this.newdate.id,
        timestamp: this.newdate.timestamp || Date.now(),
        withTop: 1
      })
      this.newdate.timestamp = content.pre_timestamp
      this.newdate.navjournalism.push(...content.results)
      this.channel.loading = false
      if (content.results === 0) {
        this.channel.finished = true
      }
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
