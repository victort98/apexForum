<template>
    <div>
        <div>{{ comment.message }}</div>
        <div>{{ comment.created_at }}</div>
        <div>hello</div>
    </div>
</template>

<script>
export default {
    methods: {
    },

    computed: {
        comment() {
            let comment = this.$store.state.commentStore.comments
            console.log("comment: ", comment)
            return comment
        }
    }
}
</script>