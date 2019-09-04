<template>
  <div>
    <van-nav-bar title="登陆" />
    <van-cell-group>
      <van-field
      v-validate="'required|digits:11'"
      name="mobile"
      :error-message="errors.first('mobile')"
      left-icon="manager"
      v-model="user.mobile"
      placeholder="请输入手机号" />
      <van-field
      v-validate="'required|digits:6'"
      name="code"
      :error-message="errors.first('code')"
      v-model="user.code"
      left-icon="lock"
      placeholder="请输入验证码">
        <van-button slot="button" round type="danger" color="#ccc" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="box_but">
      <van-button type="primary" color="#3e9df8" size="large" :loading="loading" @click="landing">登陆</van-button>
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
      },
      loading: false
    }
  },
  methods: {
    async landing () {
      this.loading = true
      try {
        // 需格式正确的情况下进行表单验证
        this.$validator.validate().then(async valid => {
          if (!valid) {
          // do stuff if not valid.
          // 不成功则停止下面运行
            this.loading = false
            return
          }
          const result = await login(this.user)
          // console.log(result)
          // token值vant储存，本地储存一并建好
          this.$store.commit('settoken', result)
          // 登陆完成跳转页面
          this.$router.push('/')
          // 登陆完场弹窗
          this.$toast.success('Go Go Go~~')
        })
      } catch (error) {
        // console.log('错误')
        // 登陆失败弹窗
        this.$toast.fail('登陆失败')
      }
      this.loading = false
    }
  },
  created () {
    // 提示码修正
    const dict = {
      custom: {
        mobile: {
          required: '手机号不能为空',
          digits: '请正确输入手机号且为11位数字'
        },
        code: {
          required: '验证码不能为空',
          digits: '此处为6位验证码'
        }
      }
    }

    // or use the instance method
    this.$validator.localize('en', dict)
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
