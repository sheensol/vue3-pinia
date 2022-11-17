import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Results from "../views/Results.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/results",
    component: Results,
    name: "results",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
