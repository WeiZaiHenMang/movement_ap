<template>
  <div>
    <van-nav-bar title="登陆" />
    <van-cell-group>
      <van-field v-model="value" left-icon="manager" placeholder="请输入手机号" />
      <van-field v-model="value" left-icon="lock" placeholder="请输入验证码">
        <van-button slot="button" round type="danger" color="#ccc" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="box_but">
      <van-button type="primary" color="#3e9df8" size="large">登陆</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>
.van-cell-group {
  margin-bottom: 30px;
}
.box_but {
  margin: 0px 20px;
}
</style>
