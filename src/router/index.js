import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Servece from "../views/Servece.vue";
import Blogs from "../views/Blogs.vue";
import ContactUs from "../views/ContactUs.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/servece",
    name: "Servece",
    component: Servece,
  },
  {
    path: "/blog",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
