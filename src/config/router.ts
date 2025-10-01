import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router