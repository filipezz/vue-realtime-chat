export default {
  state: {
    user: "",
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
};
