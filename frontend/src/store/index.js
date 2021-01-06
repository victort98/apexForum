import Vue from 'vue'
import Vuex from 'vuex'
import { categoryStore } from './categoryStore'
import { topicStore } from './topicStore'
import { userStore } from './userStore'

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        categoryStore,
        topicStore,
        userStore
    }
})