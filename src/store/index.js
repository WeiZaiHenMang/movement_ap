import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '../utilt/token'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // to_ken储存
    // 每次需要去utilt验证是否有登陆的手机号值
    user: user.getItem('user')
  },
  mutations: {
    setuser (state, user) {
      // 建立库改变stat中手机号值
      state.user = user
      // 若没有需要通过登陆取手机号的值
      user.setItem('user', user)
    }
  },
  actions: {

  }
})
