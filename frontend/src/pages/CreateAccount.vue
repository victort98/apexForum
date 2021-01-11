<template>
    <div class="account">
        <form class="newAccount" @submit.prevent="createAccount">
            <h1>Create New Account</h1>
            <p>Email</p>
            <input type="email" placeholder="Email" v-model="email" required/>
            <br>
            <p>Username</p>
            <input type="text" placeholder="Username" v-model="username" required />
            <br>
            <p>Password</p>
            <input type="password" placeholder="Password" v-model="password" required />
            <br>
            <button class="createNewAccount">Create Account</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            username: "",
            password: "",
            userRole: "user"
        }
    },

    methods: {
        async createAccount() {
            let account = {
                email: this.email,
                username: this.username,
                password: this.password,
                userRole: this.userRole
            };
            this.$store.dispatch("createNewAccount", account)
            console.log(account)
            this.$router.push("/login")
        }
    }
}
</script>