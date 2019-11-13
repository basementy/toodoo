import Vue from "vue";
import Router from "vue-router";

import Home from './views/Home.vue'
import Welcome from './views/Welcome.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/welcome",
      name: "Welcome",
      component: Welcome
    }
  ]
});
