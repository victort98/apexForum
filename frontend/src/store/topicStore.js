import { postNewTopic } from "../../../backend/controllers/topicController";

export const topicStore = {

    state: {
        topics: null,
        topic: null,
    },

    getters: {
        getTopicById: (state) => (topicId) => {
            return state.topics ? state.topics.find(topic => topic.id === topicId) : null;
        }
    },

    mutations: {
        setTopics(state, topics) {
            state.topics = topics;
        },

        setTopic(state, topic) {
            state.topic = topic
        }
    },

    actions: {
        async fetchAllTopicsByCategoryId({ commit }, categoryId) {
            let topics = await fetch(`/api/v1/topics/${categoryId}`);
            topics = await topics.json();
            console.log(`Topics ${categoryId}`, topics);
            commit("setTopics", topics);
        },

        async fetchAllTopicsByTopicId({ commit }, topicId) {
            let topic = await fetch(`/api/v1/topics/${topicId}`);
            topic = await topic.json();
            console.log(`Topic ${topicId}`, topic);
            commit("setTopic", topic);
        },

        async postNewTopic(topic) {
            let newTopic = await fetch("/api/v1/topics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(topic)
            });
            newTopic = await newTopic.json();
        }
    }
}