import { Component } from "vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: (): Promise<Component> => import("../views/Home.vue"),
  },
  {
    path: "/rsvp",
    name: "Rsvp",
    component: (): Promise<Component> => import("../views/Rsvp.vue"),
  },
  {
    path: "/gifts",
    name: "Gifts",
    component: (): Promise<Component> => import("../views/Gifts.vue"),
  },
  {
    path: "/location",
    name: "Location",
    component: (): Promise<Component> => import("../views/Location.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: (): Promise<Component> => import("../views/Gallery.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
