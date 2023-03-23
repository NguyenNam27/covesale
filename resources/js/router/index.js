import {createWebHashHistory, createRouter} from "vue-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
export const routes = [
    {
        name:'home',
        path:'/',
        component:Home,
    },
    {
        name:'login',
        path:'/login',
        component:Login,
    },
    {
        name:'register',
        path:'/register',
        component:Register,
    },
    {
        name:'dashboard',
        path:'/dashboard',
        component:Dashboard,
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes:routes,
});
export default router
