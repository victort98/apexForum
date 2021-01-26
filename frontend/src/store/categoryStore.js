export const categoryStore = {
    
    state: {
        categories: null,
        topics: null
    },

    getters: {
        topicsByCategoryId: (state) => (categoryId) => {
            return state.topics?.filter(topic => topic.categoryId === categoryId)
        }
    },

    mutations: {
        setCategories(state, category) {
            state.categories = category;
        },
        setTopics(state, topic) {
            state.topics = topic;
        }

    },

    actions: {
        async fetchAllCategories({ commit }) {
            let categories = await fetch("/api/v1/categories");
            categories = await categories.json();
            console.log("Categories ", categories);
            commit("setCategories", categories);
        },

        async fetchAllTopics({ commit }) {
            let topics = await fetch("/api/v1/topics");
            topics = await topics.json();
            console.log("Topics ", topics);
            commit("setTopics", topics);
        }
    }
}