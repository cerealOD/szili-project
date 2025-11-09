import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
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
  { path: "/projects", redirect: "/" },
  {
    path: "/projects/:slug",
    name: "projects",
    component: () => import("./components/ProjectContainer.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./views/About.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/projects/indiana-jones-art-blast",
    name: "jones",
    component: () => import("./views/JonesHome.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/projects/indiana-jones-art-blast/:slug",
    name: "jonesContainer",
    component: () => import("./components/JonesContainer.vue"),
    meta: { requiresAuth: true },
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // When going back, preserve scroll state
    } else {
      return { top: 0 }; // When opening new page start at top
    }
  },
});

export default router;
