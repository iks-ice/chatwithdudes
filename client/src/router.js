import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("./views/MainPage.vue"),
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import("./views/404.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export {router};