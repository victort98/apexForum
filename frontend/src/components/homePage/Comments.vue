<template>
    <div>
        <p>Hello There</p>
    </div>
</template>

<script>
export default {
    methods: {
        async comments() {
            let commentId = this.$route.params.topicId;
            console.log("topicId=", commentId)
            this.$store.dispatch("fetchCommentById", commentId);
        }
    },

    created() {
        this.comments();
    },

    computed: {
        comment() {
            console.log("yes", this.$store.state.commentStore.comments);
            return this.$store.state.commentStore.comments
        }
    }
}
</script>