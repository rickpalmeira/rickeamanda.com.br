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
    path: "/about",
    component: (): Promise<Component> => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({ el: to.hash, top: 8, behavior: "smooth" });
        }

        if (to.path === "/") {
          resolve({ top: 0, behavior: "smooth" });
        }

        resolve({ el: "#content", top: 0, behavior: "smooth" });
      }, 200);
    });
  },
});

export default router;
