<template>
    <div class="newTopic-container">
        <form class="newTopic" @submit.prevent="createTopic">
            <h1>Create a new topic</h1>
            <div>Title</div>
            <input type="text" placeholder="Title" v-model="title" required/>
            <br>
            <br>
            <div>Category</div>
            <select v-model="categoryId">
                <option v-for="option in options" :key="option.text" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <br>
            <br>
            <div>Content</div>
            <textarea class="createContent-area" placeholder="Content..." v-model="content" required>
            </textarea>
            <button class="createNewTopic">Create topic</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            categoryId: 1,
            locked: false,
            created_at: (Math.round(+new Date()/1000)),
            options: [
                { text: 'Game Updates', value: 1 },
                { text: 'Pro Discussion', value: 2 },
                { text: 'Tournaments', value: 3 },
            ],
            content: "",
            userId: ""
        }
    },

    methods: {
        async createTopic() {
        let user = this.$store.state.userStore.isLoggedIn
        console.log(user)
        if(!user){
            console.log("You need to create an account to create a topic")
            this.$router.push("/login")
        } else {
            let topic = {
                title: this.title,
                categoryId: this.categoryId,
                locked: this.locked,
                created_at: this.created_at,
                content: this.content,
                userId: user.id
            };
            this.$store.dispatch("postNewTopic", topic);
            this.$router.push("/");
        }
        },
    },


}
</script>

<style>
.newTopic-container {
        margin: auto;
    padding: 50px;
    text-align: center;
    width: 25%;
    background: white;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
    margin-top: 50px;
}

.createContent-area {
    resize: none;
    width: 100%;
    height: 300px;
}
</style>