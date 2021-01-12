<template>
    <div v-if="ifAdmin != false">
        <h1>Click on a user and then click on delete user</h1>
        <p>Only works if they have not posted or commented</p>
        <div v-for="(user, i) in user" :key="i" class="user-list" v-on:click="userById">
            <div v-on:click="userId = user.id" @click="isHidden = !isHidden" class="test">
                <button @click="deleteAccount">Delete user</button>
                <div>{{ user.email }}</div>
                <div>{{ user.username }}</div>
                <div>{{ user.userRole }}</div>
            </div>
            <br>
        </div>
        <div v-for="(user, x) in getClickedUser" :key="x">
            {{ user }}
        </div>
        <button></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: "",
            isHidden: false,
            userRole: "user",
            options: [
                { text: 'User', value: "user" },
                { text: "Moderator", value: "moderator" }
            ]

        }
    },

    computed: {
        user() {
            let user = this.$store.state.userStore.users
            console.log(user)
            return user
        },
        getClickedUser() {
            let user = this.$store.state.userStore.user
            return user
        },

        ifAdmin() {
            let admin = this.$store.getters["getAdmin"]
            return admin
        }
    },

    methods: {
        userById() {
            console.log(this.userId)
            this.$store.dispatch("fetchUserById", this.userId)
            console.log(this.$store.dispatch("fetchUserById", this.userId))
            let user = this.$store.state.userStore.user
            console.log("test", user)
        },

        async deleteAccount(){
            let user = this.$store.state.userStore.user
            console.log("testdelete", user)
            let id = {
                userId: this.userId
            }
            this.$store.dispatch("deleteAccount", id).then(() => {
                this.$router.go()
            })
        },
    },
}
</script>

<style scoped>

.test {
    cursor: pointer;
    border: solid 2px black;
}
</style>