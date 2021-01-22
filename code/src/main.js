import Vue from 'vue'
// import './plugins/vuetify'
import '/usr/src/app/src/plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDoWw8-5vSwhg3gVbNHoKiszoGte-S81Ek",
  authDomain: "myaddreist.firebaseapp.com",
  projectId: "myaddreist",
  storageBucket: "myaddreist.appspot.com",
  messagingSenderId: "779106418707",
  appId: "1:779106418707:web:1c21e6b80127de00c53fe6",
  measurementId: "G-LCDKKH83VQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

new Vue({
  router,
  store,
  // vuetify,

  // h関数はCreateElement関数のAlias
  render: h => h(App)
}).$mount('#app')
