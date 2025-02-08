import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import ProjectContainer from "./components/ProjectContainer.vue";
import Jones from "./views/Jones.vue";
import JonesContainer from "./components/JonesContainer.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/barbarian", name: "barbarian", component: ProjectContainer },
  { path: "/inarius", name: "inarius", component: ProjectContainer },
  { path: "/axe", name: "axe", component: ProjectContainer },
  { path: "/indiana-jones", name: "jones", component: Jones },
  { path: "/indiana-jones/:slug", component: JonesContainer },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
