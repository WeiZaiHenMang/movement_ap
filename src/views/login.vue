<template>
  <div>
    <van-nav-bar title="登陆" />
    <van-cell-group>
      <van-field v-model="user.mobile" left-icon="manager" placeholder="请输入手机号" />
      <van-field v-model="user.code" left-icon="lock" placeholder="请输入验证码">
        <van-button slot="button" round type="danger" color="#ccc" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="box_but">
      <van-button type="primary" color="#3e9df8" size="large" @click="landing">登陆</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '../api/user'
export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async landing () {
      try {
        const result = await login(this.user)
        console.log(result)
      } catch (error) {
        console.log('错误')
      }
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
