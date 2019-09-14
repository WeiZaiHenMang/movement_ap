<template>
  <div class="big-box">
    <!-- 头部 -->
    <van-row>
      <van-col span="2">
        <van-icon name="qr" size="26" />
      </van-col>
      <van-col span="20">
        <van-search placeholder="请输入搜索关键词" background="#3e9df8" shape="round" />
      </van-col>
      <van-col span="2">
        <van-icon name="search" size="26" />
      </van-col>
    </van-row>
    <!-- 频道列表 -->
    <van-tabs animated v-model="active">
      <van-tab v-for="item in channel" :title="item.name" :key="item.id">
        <!-- 内容区 -->
        <van-list
          v-model="channel.loading"
          :finished="channel.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell
            v-for="item in newdate.navjournalism"
            :key="item.art_id.toString()"
            :title="item.title"
          >
            <div slot="label">
              <van-grid v-if="cover.type" :border="false" :column-num="3">
                <van-grid-item
                v-for="(item,id) in cover.images"
                :key="item+id"
                center
                square
                lazy-load
                >
                  <van-image  :src="item">
                    <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                    </template>
                    <template v-slot:error>加载失败</template>
                  </van-image>
                </van-grid-item>
              </van-grid>
              <span>{{item.aut_name}}</span>&nbsp;
              <span>{{item.comm_count}}评论</span>&nbsp;
              <span>{{item.pubdate|fmday}}</span>
              <span class="ico" @click="byvalue(item)">
                <van-icon name="cross" />
              </span>
            </div>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
    <popup :popup="bypopup" @interestok='interestok' v-model="popup_sh"></popup>
  </div>
</template>

<script>
import { channel } from '../../api/channel'
import { journalism } from '../../api/journalism'
// 图片懒加载
import Vue from 'vue'
import { Lazyload } from 'vant'
// X事件弹出层
import popup from './components/Xpopup'
Vue.use(Lazyload)
export default {
  name: 'home',
  components: {
    popup
  },
  data () {
    return {
      // 频道列表
      channel: [],
      // 频道当前索引值
      active: 0,
      // 封面
      cover: {},
      // X弹窗判定
      popup_sh: false,
      // X弹窗收值
      bypopup: {}
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
      let content = await journalism({
        channelId: this.newdate.id,
        timestamp: this.newdate.timestamp || Date.now(),
        withTop: 1
      })
      // 下拉功能实现
      this.newdate.timestamp = content.pre_timestamp
      this.newdate.navjournalism.push(...content.results)
      this.channel.loading = false
      if (content.results.length === 0) {
        this.channel.finished = true
      }
      // 图片功能实现
      content.results.forEach(result => {
        this.cover = result.cover
        // console.log(result.cover)
      })
    },
    // X点击传值
    byvalue (item) {
      // 弹窗显示
      this.popup_sh = true
      // 传值
      this.bypopup = item
      // console.log(item)
    },
    // 当不感兴趣完成后
    interestok () {
      // 弹窗隐藏
      this.popup_sh = false
      // 找出数组中的这项，取他的id进行删除
      // console.log(this.newdate)
      const newSuZu = this.newdate.navjournalism
      const index = newSuZu.findIndex(item => {
        return newSuZu.art_id === this.newdate.art_id
      })
      newSuZu.splice(index, 1)
    }
  },
  created () {
    this.getchannel()
  }
}
</script>

<style lang='less' scoped>
.big-box {
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
.ico {
  font-size: 16px;
  float: right;
}
</style>
