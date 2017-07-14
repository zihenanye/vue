// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './config/router'   //路由
import vueResource from 'vue-resource'  //请求数据
import positionStatic from '@/directive/positionStatic' //自定义指令

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.directive("position-static",positionStatic)

/* eslint-disable no-new */
new Vue({    //实例化
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
