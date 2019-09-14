<template>
  <van-dialog
  :value="value"
    @input="$emit('input', $event)"
  :showConfirmButton=false
  closeOnClickOverlay
>
<van-cell-group v-show="!showtwo">
  <van-cell icon="clear" title="不感兴趣" @click="popups('interest')"/>
  <van-cell icon="question" title="反馈垃圾内容" is-link @click="showtwo=true"/>
  <van-cell icon="warning" title="拉黑作者" @click="popups('blacklist')"/>
</van-cell-group>
<van-cell-group v-show="showtwo">
  <van-cell is-link arrow-direction="left" @click="showtwo=false"/>
  <van-cell title="标题夸张" />
  <van-cell title="低俗热情" />
  <van-cell title="错别字多" />
  <van-cell title="子文重复" />
  <van-cell title="广告软文" />
  <van-cell title="内容不实" />
  <van-cell title="涉嫌违法范围" />
  <van-cell title="侵权" />
  <van-cell title="其他问题" />
</van-cell-group>
</van-dialog>
</template>

<script>
import { getinterest } from '../../../api/journalism'
export default {
  name: 'Xpopup',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    popup: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showtwo: false
    }
  },
  methods: {
    popups (type) {
      switch (type) {
        case 'interest':
        //   console.log('hi')
          this.interest()
          break
        case 'blacklist':

          break
      }
    },
    // 不感兴趣
    async interest () {
      console.log(this.popup.art_id.toString())
      try {
        await getinterest({
          target: this.popup.art_id.toString()
        })
        this.$toast.success('操作成功')
        this.$emit('interestok')
      } catch (error) {
        this.$toast.fail('操作失败')
      }
    }
  }
}
</script>

<style>

</style>
