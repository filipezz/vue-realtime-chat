import Vue from "vue";
import VueRouter from "vue-router";

const NotFound = { template: "<p>PAGE NOT FOUND KKKKKKK</p>" };

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
    component: () => import("../components/Chat.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
