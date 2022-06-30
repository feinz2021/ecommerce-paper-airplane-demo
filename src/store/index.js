import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      user: null,
      auth: null,
    }
  },
  mutations: {
    isLoggedIn(state) {
      state.isLoggedIn = true;
    },
    user(state, payload) {
      state.user = payload;
    },
    auth(state, payload) {
      state.auth = payload;
    }
  }
})
export default store;