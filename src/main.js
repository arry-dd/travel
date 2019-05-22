import Vue from 'vue';
import App from './App.vue';

//引入router.js
import routerObj from './router.js';

//引入默认样式
import 'style/reset.css';

//解决多像素的问题
import 'style/border.css';

//引入字体图标
import 'style/iconfont.css'


//引入规范css
import 'style/reset.css'
//解决高分辨率下的1px显示多像素
import 'style/border.css'

//解决点击延迟问题
import fastClick from 'fastclick';
fastClick.attach(document.body);

//引入vuex
import store from 'src/store/index'
//阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routerObj,
  store
}).$mount('#app')
