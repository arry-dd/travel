import Vue from 'vue'


import vueRouter from 'vue-router';

Vue.use(vueRouter)

import home from 'home/home'

let routerObj;

export default routerObj = new vueRouter({
    routes: [
        {path:'/',component: home}
    ]
})
