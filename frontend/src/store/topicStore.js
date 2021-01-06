export const topicStore = {

    state: {
        topics: null,
    },

    mutations: {
        setTopics(state, topics) {
            state.topics = topics;
        }
    },

    actions: {
        async fetchAllTopics({ commit }) {
            let topics = await fetch("/api/v1/topics");
            topics = await topics.json();
            console.log("Topics ", topics);
            commit("setTopics", topics)
        }
    }
}