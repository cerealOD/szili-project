import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import ProjectContainer from "./components/ProjectContainer.vue";
import Project from "./components/Project.vue";
import JonesHome from "./views/JonesHome.vue";
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
  { path: "/projects", redirect: "/" },
  {
    path: "/projects/:slug",
    name: "projects",
    component: Project,
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
    path: "/projects/indiana-jones-art-blast",
    name: "jones",
    component: JonesHome,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/projects/indiana-jones-art-blast/:slug",
    component: JonesContainer,
    name: "jonesContainer",
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
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // opens new page with scrollposition at top
  },
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     if (!localStorage.getItem("user-password")) next("/protected");
//     else next();
//   } else next();
// });

export default router;
