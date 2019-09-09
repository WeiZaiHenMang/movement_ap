<template>
  <van-dialog
  :value="value"
    @input="$emit('input', $event)"
  :showConfirmButton=false
  closeOnClickOverlay
>
<van-cell-group v-show="!showtwo">
  <van-cell icon="clear" title="不感兴趣" />
  <van-cell icon="question" title="反馈垃圾内容" is-link @click="showtwo=true"/>
  <van-cell icon="warning" title="拉黑作责" />
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
export default {
  name: 'Xpopup',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      showtwo: false
    }
  }
}
</script>

<style>

</style>
