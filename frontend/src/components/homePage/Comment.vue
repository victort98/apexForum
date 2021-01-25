<template>
    <div>
        <div class="comments">Comments</div>
        <div v-for="(comment, i) in comment" :key="i" class="reply-list">
            <div>{{ comment.message }}</div>
            <div>Comment by: {{ comment.username }} on {{ new Date(comment.created_at * 1000).toLocaleString() }}</div>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    methods: {

    },

    computed: {
        comment() {
            let comment = this.$store.state.commentStore.comments
            console.log("commenttest: ", comment)
            return comment
        },
    }
}
</script>

<style>
.comments {
    padding: 10px 0px 10px 0px;
    font-weight: bold;
}

.reply-list {
    border-bottom: 3px solid rgb(61,61,61, 0.733);
    padding-top: 10px;
}
</style>