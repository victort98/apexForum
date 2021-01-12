<template>
    <div>
        <div v-for="(comment, i) in comment" :key="i" class="reply-list">
            <div>{{ comment.message }}</div>
            <div>{{ comment.created_at }}</div>
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
        }
    }
}
</script>