import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Project from "./components/Project.vue";
import Jones from "./views/Jones.vue";
import JonesView from "./views/JonesView.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/barbarian", name: "barbarian", component: Project },
  { path: "/inarius", name: "inarius", component: Project },
  { path: "/axe", name: "axe", component: Project },
  { path: "/indiana-jones", name: "jones", component: Jones },
  { path: "/indiana-jones/:slug", component: JonesView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
