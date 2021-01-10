<template>
    <div class="topic">
        <div class="topic-content">
            {{ topic.title }}
            <br>
            {{ topic.content }}
            <br>
            {{ topic.username }}
            <br>
            {{ topic.created_at }}
        </div>
    </div>
</template>

<script>
export default {

    methods: {
        async topics() {
            let topicId = this.$route.params.topicId
            this.$store.dispatch("fetchAllTopicsByTopicId", topicId);
        }
    },

    created() {
        this.topics()   
    },

    computed: {
        topic() {
            return this.$store.state.topicStore.topic
        }
    }
}
</script>