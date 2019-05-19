/* eslint-disable */
import Vue from 'vue'
import vueRouter from 'vue-router';
Vue.use(vueRouter)

import home from 'home/home'

// eslint-disable-next-line
let routerObj;

export default routerObj = new vueRouter({
    routes: [
        {path:'/',component: home}
    ]
})
