import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Panel from "../views/Panel.vue";
import CreateDriver from "../views/CreateDriver.vue";
import CreateCar from "../views/CreateCar.vue";
import Auth from "../views/Auth.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/panel",
    name: "Panel",
    component: Panel
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
  {
    path: "/createdrivers",
    name: "CreateDriver",
    component: CreateDriver
  },
  {
    path: "/createcars",
    name: "CreateCars",
    component: CreateCar
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
