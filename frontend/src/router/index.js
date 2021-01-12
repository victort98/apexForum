import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage'
import CategoryList from '../components/homePage/CategoryList'
import LoginPage from '../pages/Login'
import TopicContent from '../components/homePage/TopicContent'
import CreateNewTopic from '../pages/CreateNewTopic'
import Comment from '../components/homePage/Comment'
import CreateAccount from '../pages/CreateAccount'
import store from '../store/index'

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
        },
        {
            path: "/:categoryId/:topicId",
            name: "Comment",
            component: Comment
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
        component: CreateNewTopic,
    },
    {
        path: "/create-account",
        name: "CreateAccount",
        component: CreateAccount,
    }

]

const router = new VueRouter({
    routes,
    mode: "history",
    base: process.env.BASE_URL,
});

router.beforeEach(async (to, from, next) => {
    if(to.matched.some(record => record.meta.requresAuth)) {
        console.log("this one", store.state.userStore.isLoggedIn)
        if(!store.state.userStore.isLoggedIn) {
            next({ name: 'LoginPage' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;