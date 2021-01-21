import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddAddress from '../views/AddressForm.vue'

// 使用するプラグインを指定している VueRouter
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // Homeのように事前にコンポーネントを読み込んでおくのもOKだが
    // 大量に読み込むと処理に時間がかかるのでAboutのように
    // つど読み込む形式でもOK
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/addresses',
    name: 'addresses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 
    component: () => import(/* webpackChunkName: "addresses" */ '../views/Addresses.vue')
  },
  {
    path: '/addresses/:address_id?/edit',
    name: 'addresses_edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 
    component: AddAddress
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
