<template>
    <div class="newTopic-container">
        <form class="newTopic" @submit.prevent="createTopic">
            <h1>Create a new topic</h1>
            <p>Title</p>
            <input type="text" placeholder="Title" v-model="title" required/>
            <br>
            <p>Category</p>
            <select v-model="categoryId">
                <option v-for="option in options" :key="option.text" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <br>
            <p>Content</p>
            <textarea placeholder="Content..." v-model="content" required>
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
            created_at: Date.now(),
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
        if(!user){
            console.log("You need to create an account to create a topic")
        } else {
            let topic = {
                title: this.title,
                categoryId: this.categoryId,
                locked: this.locked,
                created_at: this.created_at,
                content: this.content,
                userId: user.id
            };
            this.$store.dispatch("postNewTopic", topic)
            console.log(topic);
        }
        },
    },

}
</script>