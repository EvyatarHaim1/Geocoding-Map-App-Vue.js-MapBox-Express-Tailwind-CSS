import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
  },
  mutations: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
  actions: {
  },
  modules: {
  }
})
