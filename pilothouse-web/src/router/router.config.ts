import { type RouteRecordRaw } from "vue-router";

export const Mainroutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("~/pages/Container.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("~/pages/home/index.vue"),
      },
    ],
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("~/pages/Container.vue"),
    children: [
      {
        path: "/blog/index",
        name: "BlogIndex",
        component: () => import("~/pages/blog/index.vue"),
      },
    ],
  },
  {
    path: "/other",
    name: "Other",
    component: () => import("~/pages/Container.vue"),
    children: [
      {
        path: "/other/index",
        name: "OtherIndex",
        component: () => import("~/pages/other/index.vue"),
      },
    ],
  },
  {
    path: "/toDoList",
    name: "ToDoList",
    component: () => import("~/pages/Container.vue"),
    children: [
      {
        path: "/toDoList/index",
        name: "ToDoList",
        component: () => import("~/pages/toDoList/index.vue"),
      },
    ],
  },
  {
    path: "/demoTestPlayground",
    name: "DemoTestPlayground",
    component: () => import("~/pages/Container.vue"),
    children: [
      {
        path: "/demoTestPlayground/index",
        name: "DemoTestPlayground",
        component: () => import("~/pages/demoTestPlayground/index.vue"),
      },
    ],
  },
];
