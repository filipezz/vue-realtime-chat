import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './routes'
import chatStore from './vuex'

Vue.use(Vuex)

const store = new Vuex.Store(chatStore);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
