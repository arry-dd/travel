import Vue from 'vue'
import App from './App.vue'

//引入规范css
import 'style/reset.css'
//解决高分辨率下的1px显示多像素
import 'style/border.css'

//解决点击延迟问题
import fastClick from 'fastclick';
fastClick.attach(document.body);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
