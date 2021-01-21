import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    addresses: []
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    },
    addAddress(state, address) {
      state.address.push(address)
    }
  },
  actions: {
    // { commit }とすることで、context内のcommitだけ受け取ることが可能。
    // contextはaction内のメソッドに渡されるオブジェクト
    // commitでmutetionsのメソッド(toggleSidemenu)を呼び出すことが可能
    actionToggleSideMenu({ commit }) {
      commit('toggleSideMenu')
    },
    addAddress({ commit }, address) {
      commit('addAddress', address)
    }
  },
  modules: {
  }
})
