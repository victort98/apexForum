<template>
    <div class="topic">
        <div class="topic-content">
            <topic-list-content
                v-for="topic in topics"
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

    computed: {
        topics() {
            return this.$store.state.topicStore.topics;
        }
    },

    methods: {

        async getAllTopicsById() {
            this.$store.dispatch("fetchAllTopicsByTopicId", this.topicId)
        }
    },

    created() {
        this.getAllTopicsById();
    }
}
</script>