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



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routerObj
}).$mount('#app')
