<template>
  <div>
    <van-tabs animated>
  <van-tab v-for="item in channel" :title="item.name" :key="item.id">
    {{ item.name }}
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
import { channel } from '../../api/user'
export default {
  name: 'home',
  data () {
    return {
      // 频道列表
      channel: []
    }
  },
  methods: {
    async getchannel () {
      let res = await channel()
      // console.log(res.channels)
      this.channel = res.channels
    }
  },
  created () {
    this.getchannel()
  }
}
</script>

<style>

</style>
