import Vue from 'vue'
import Router from 'vue-router'
import table from '../views/tabel.vue'
import home from '../views/home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: () =>
            import(/* webpackChunkName: "about" */ '../views/login.vue')
  }, {
    path: '/',
    name: 'table',
    component: table,
    children: [{
      path: '',
      component: home
    }]
  }]
})
