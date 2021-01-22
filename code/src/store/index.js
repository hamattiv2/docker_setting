import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    addresses: [],
    login_user: null
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user 
    },
    deleteLoginUser(state) {
      state.login_user = null
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    },
    addAddress(state, address) {
      state.addresses.push(address)
    }
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user)
    },
    deleteLoginUser({ commit }) {
      commit('deleteLoginUser')
    },
    logout() {
      firebase.auth().signOut()
    },
    fetchAddresses({ getters, commit }) {
      firebase.firestore().collection(`users/${getters.uid}/addresses`).get().then(snapshot => {
          snapshot.forEach(doc => commit("addAddress", doc.data()))
        }
      )
    },
    login () {
      // const provider = new firebase.auth.GoogleAuthProvider()
      // firebase.auth().signInWithRedirect(provider)
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      console.log(google_auth_provider)
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    // { commit }とすることで、context内のcommitだけ受け取ることが可能。
    // contextはaction内のメソッドに渡されるオブジェクト
    // commitでmutetionsのメソッド(toggleSidemenu)を呼び出すことが可能
    actionToggleSideMenu({ commit }) {
      commit('toggleSideMenu')
    },
    addAddress({ getters, commit }, address) {
      if (getters.uid) firebase.firestore().collection(`users/${getters.uid}/addresses`).add(address)
      commit('addAddress', address)
    }
  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName : "",
    photoUrl: state => state.login_user ? state.login_user.photoURL: "" ,
    uid: state => state.login_user ? state.login_user.uid : null
  },
  modules: {
  }
})
