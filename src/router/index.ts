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
});

export default router;
