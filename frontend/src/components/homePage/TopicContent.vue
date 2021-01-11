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
            <br>
            {{comment.message }}
        </div>
    </div>
</template>

<script>
export default {

    methods: {
        async topics() {
            let topicId = this.$route.params.topicId;
            this.$store.dispatch("fetchAllTopicsByTopicId", topicId);
        },
        
        async comments() {
            let topicId = this.$route.params.topicId;
            console.log(this.$store.dispatch("fetchCommentById", topicId));
            this.$store.dispatch("fetchCommentById", topicId);
        }
    },

    created() {
        this.topics();
        this.comments();
    },

    computed: {
        topic() {
            console.log("first", this.$store.state.topicStore.topic)
            return this.$store.state.topicStore.topic;
        },
        comment() {
            console.log("second", this.$store.state.commentStore.comments);
            return this.$store.state.commentStore.comments;
        }
    }
}
</script>