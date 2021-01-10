import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage'
import CategoryList from '../components/homePage/CategoryList'
import LoginPage from '../pages/Login'
import TopicContent from '../components/homePage/TopicContent'
import CreateNewTopic from '../pages/CreateNewTopic'


Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
        children: [
            {
            path: "",
            name: "CategoryList",
            component: CategoryList,
        },
        {
            path: "/:categoryId/:topicId",
            name: "TopicContent",
            component: TopicContent
        }
        ],
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: "/new-topic",
        name: "CreateNewTopic",
        component: CreateNewTopic
    }

]

const router = new VueRouter({
    routes,
    mode: "history",
    base: process.env.BASE_URL,
});

export default router;