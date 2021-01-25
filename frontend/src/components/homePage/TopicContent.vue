<template>
    <div class="topicInfo">
        <button v-on:click="lockTopic" v-if="ifAdmin != false || ifModerator != false">Lock Topic</button>
        <div class="topic-content">
            <p class="title">{{ topic.title }}</p>
            <p class="content">{{ topic.content }}</p>
            <p class="usernameAndCreatedAt">Posted by: {{ topic.username }}</p>
            <div>Published at {{ new Date(topic.created_at * 1000).toLocaleString() }}</div>
            <br>
            <div v-if="locked == 0" class="reply">
                <form class="reply" @submit.prevent="createReply">
                    <textarea class="commentArea" type="text" placeholder="reply..." v-model="message" required></textarea>
                    <br>
                    <button class="reply-button">Reply</button>
                </form>
                <br>
            </div>
            <comment />
        </div>
    </div>
</template>

<script>
import Comment from './Comment'
export default {
    data() {
        return {
            message: "",
            userId: "",
            topicId: "",
            created_at: (Math.round(+new Date()/1000)),
            locked: ""
        }
    },

    components: {
        Comment
    },

    methods: {

        async lockTopic() {
            this.locked = 1;
            let locked = {
                locked: this.locked
            }
            this.$store.dispatch("updateTopic", locked)
        },

        async topics() {
            let topicId = this.$route.params.topicId;
            this.$store.dispatch("fetchAllTopicsByTopicId", topicId);
        },
        
        async getComments() {
            let topicId = this.$route.params.topicId;
            console.log(this.$store.dispatch("fetchCommentById", topicId));
            this.$store.dispatch("fetchCommentById", topicId);
        },
        async createReply() {
            let user = this.$store.state.userStore.isLoggedIn
            console.log(user)
            if(!user){
                console.log("You need to create an account to reply")
                alert("You need to login to reply")
                this.$router.push("/login")
            } else {
                let reply = {
                    message: this.message,
                    userId: user.id,
                    topicId: this.$route.params.topicId,
                    created_at: this.created_at
                };
                this.$store.dispatch("postNewReply", reply).then(() => {
                    this.$router.go()
                })
                console.log(reply);
            }
            this.message = "";
        },
    },

    created() {
        this.topics();
        this.getComments();
    },

    computed: {
        topic() {
            console.log("first", this.$store.state.topicStore.topic)
            return this.$store.state.topicStore.topic;
        },

        comments() {
            let test = this.$store.state.commentStore.comments
            console.log("is this test?", test)
            return this.$store.state.commentStore.comments;
        },

        ifAdmin() {
            let admin = this.$store.getters["getAdmin"]
            return admin
        },

        ifModerator() {
            let moderator = this.$store.getters["getModerator"]
            return moderator
        }
    }
}
</script>

<style>
.topicInfo {
    margin: auto;
    width: 50%;
    border: 3px solid rgba(61, 61, 61, 0.733);
    padding: 10px;
    background-color: white;
    padding: 20px 20px 20px 20px;
}

.title {
    font-weight: bold;
    font-size: 25px;
    text-align: center;
}

.commentArea {
    resize: none;
    width: 20%;
    height: 60px;
}
</style>