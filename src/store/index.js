import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let state = {
  count: 0,
  selectedMenu: []
}

const mutations = {
  add: state => state.count ++,
  decrease: state => state.count --
}

const actions = {
  add (add) {
    add.commit('add')
  },
  decrease (decrease) {
    decrease.commit('decrease')
  }
}

const getters = {
  count (context) {
    return context.count
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
