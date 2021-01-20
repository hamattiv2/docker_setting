import Vue from 'vue'
// import './plugins/vuetify'
import '/usr/src/app/src/plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // vuetify,

  // h関数はCreateElement関数のAlias
  render: h => h(App)
}).$mount('#app')
