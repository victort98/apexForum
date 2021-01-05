import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "HomePage",
        components: HomePage,
    },
]

const router = new VueRouter({
    routes,
    mode: "history",
    base: process.env.BASE_URL,
});

export default router;