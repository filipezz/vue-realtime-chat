import Vue from "vue";
import VueRouter from "vue-router";
import store from '../vuex'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../components/Chat.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if(to.name === 'Login'){
    store.state.user = ''
    
  }
  if(to.name === 'Chat' && !store.state.user){
    next('/')
  } 

  next()
})
export default router;
