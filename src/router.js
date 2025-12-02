import { createWebHistory, createRouter } from "vue-router";

import GameArtHome from "./views/GameArtHome.vue";
import ArchvizHome from "./views/ArchvizHome.vue";
import Protected from "./components/Protected.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ArchvizHome,
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/archviz", redirect: "/" },
  { path: "/game-art", name: "gameArt", component: GameArtHome },
  {
    path: "/game-art/:slug",
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
    path: "/game-art/indiana-jones-art-blast",
    name: "jones",
    component: () => import("./views/JonesHome.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/game-art/indiana-jones-art-blast/:slug",
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
