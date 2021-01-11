<template>
    <div>
        <div>{{ comment.message }}</div>
        <div>{{ comment.created_at }}</div>
        <div>hello</div>
        <form class="reply" @submit.prevent="createReply">
            <textarea type="text" placeholder="reply..." v-model="message"></textarea>
        <button class="reply-button">Reply</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "",
            userId: "",
            topicId: "",
            created_at: (Math.round(+new Date()/1000))
        }
    },

    methods: {
        async createReply() {
            let user = this.$store.state.userStore.isLoggedIn
            console.log(user)
            if(!user){
                console.log("You need to create an account to reply")
            } else {
                let reply = {
                    message: this.message,
                    userId: user.id,
                    topicId: this.$route.params.topicId,
                    created_at: this.created_at
                };
                this.$store.dispatch("postNewReply", reply)
                console.log(reply);
            }
            this.message = "";
        }
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