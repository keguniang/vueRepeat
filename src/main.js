// 入口文件
// Vue是一个构造函数，所以V最好大写
// 使用import Vue from 'vue'导入的Vue构造函数，功能不完整，只提供了runtime-only的形式，并没有提供像网页中那样的使用方式
import Vue from 'vue'
// 导入APP根组件
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入mint-ui
import { Header } from 'mint-ui';
// 注册mint-ui的组件
Vue.component(Header.name, Header);

// 导入MUI 的样式
import './lib/mui/css/mui.css'

new Vue({
  router,
  store,
  // 结合webpack使用，想要通过vue，把一个组件放到页面中去展示，就得使用render函数，不能使用传统的components方法了
  // render: function (creatElements) {//creatElements是一个方法，
  //   //调用它，能够把指定的组件模板渲染为html结构
  //   return creatElements(App);
  //   // 注意：这里return 的结果，会替换页面中el指定的那个容器
  // }
  render: h => h(App)
}).$mount('#app')

