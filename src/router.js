/* eslint-disable */
import Vue from 'vue'
import vueRouter from 'vue-router';
Vue.use(vueRouter)

import home from 'home/home'
import City from 'city/city'
import Detail from 'detail/detail'

// eslint-disable-next-line
let routerObj;

export default routerObj = new vueRouter({
    routes: [
        {path:'/',component: home},
        {path:'/city',component: City},
        {path:'/detail/:id',component: Detail}

    ]
})
