import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Project from "./views/Project.vue";
import Jones from "./views/Jones.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/barbarian", name: "barbarian", component: Project },
  { path: "/inarius", name: "inarius", component: Project },
  { path: "/axe", name: "axe", component: Project },
  { path: "/indiana-jones", name: "jones", component: Project },
  { path: "/indiana-jones/:slug", component: Jones },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
