<template>
    <div class="topic">
        <div class="topic-content">
            <topic-list-content
            v-for="topic in tests"
            :key="topic.id"
            :topic="topic"
            />
        </div>
    </div>
</template>

<script>
import TopicListContent from './TopicListContent'
export default {

    components: {
        TopicListContent
    },

    methods: {
        async topics() {
            let topicId = this.$route.params.topicId
            this.$store.dispatch("fetchAllTopicsByTopicId", topicId);
        }
    },

    created() {
        this.topics()
        let topics = this.$store.state.topicStore.topic
        console.log("what is this", topics)
        let test = this.$store.dispatch("fetchAllTopicsByTopicId")
        console.log("this", test)
        
    },

    computed: {
        tests() {
            let topicId = this.$route.params.topicId
            return this.$store.getters["getTopicById"](topicId)
        }
    }
}
</script>