import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 使用するプラグインを指定している VueRouter
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // Homeのように事前にコンポーネントを読み込んでおくのもOKだが
    // 大量に読み込むと処理に時間がかかるのでAboutのように
    // つど読み込む形式でもOK
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/addresses',
    name: 'Address',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 
    component: () => import(/* webpackChunkName: "address" */ '../views/Addresses.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
