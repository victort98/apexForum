import Vue from 'vue'
import Vuex from 'vuex'
import { categoryStore } from './categoryStore'
import { topicStore } from './topicStore'
import { userStore } from './userStore'
import { commentStore } from './commentStore'

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        categoryStore,
        topicStore,
        userStore,
        commentStore
    }
})