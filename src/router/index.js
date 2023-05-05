import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/user/Home.vue"),
  },
  {
    path: "/keranjang",
    name: "keranjang",
    component: () => import("../views/user/Keranjang.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddBarang.vue"),
  },
  {
    path: "/detail/:barang_id",
    name: "detail",
    component: () => import("../views/user/Detail.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/admin/Dashboard.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
