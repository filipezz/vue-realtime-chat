import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import chatStore from './vuex'
import router from './routes'

Vue.use(Vuex)

const store = new Vuex.Store(chatStore);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
