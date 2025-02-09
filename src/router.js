import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import ProjectContainer from "./components/ProjectContainer.vue";
import Jones from "./views/Jones.vue";
import JonesContainer from "./components/JonesContainer.vue";
import Protected from "./components/Protected.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/barbarian",
    name: "barbarian",
    component: ProjectContainer,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/inarius",
    name: "inarius",
    component: ProjectContainer,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/axe",
    name: "axe",
    component: ProjectContainer,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/indiana-jones",
    name: "jones",
    component: Jones,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/indiana-jones/:slug",
    component: JonesContainer,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/protected",
    name: "protected",
    component: Protected,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!localStorage.getItem("user-password")) next("/protected");
    else next();
  } else next();
});

export default router;
