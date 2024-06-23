import { Component } from "vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: (): Promise<Component> => import("../views/Home.vue"),
  },
  {
    path: "/rsvp",
    component: (): Promise<Component> => import("../views/Rsvp.vue"),
  },
  {
    path: "/gifts",
    component: (): Promise<Component> => import("../views/Gifts.vue"),
  },
  {
    path: "/location",
    component: (): Promise<Component> => import("../views/Location.vue"),
  },
  {
    path: "/couple",
    component: (): Promise<Component> => import("../views/Couple.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 8, behavior: "smooth" };
    }

    if (to.path === "/") {
      return { top: 0, behavior: "smooth" };
    }

    return { el: "#content", top: 0, behavior: "smooth" };
  },
});

export default router;
