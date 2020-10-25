import io from "socket.io-client";

export default {
  state: {
    user: "",
    connection: null
  },
  getters: {
    socket(state) {
      return state.connection
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    connection(state, payload) {
      state.connection = io(payload);
    }
  },


};
