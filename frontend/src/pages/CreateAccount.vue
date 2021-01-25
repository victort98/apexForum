<template>
    <div class="account">
        <form class="newAccount" @submit.prevent="createAccount">
            <h1>Create New Account</h1>
            <div>Email</div>
            <input type="email" placeholder="Email" v-model="email" required/>
            <br>
            <br>
            <div>Username</div>
            <input type="text" placeholder="Username" v-model="username" required />
            <br>
            <br>
            <div>Password</div>
            <input type="password" placeholder="Password" v-model="password" required />
            <br>
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
            let user = this.$store.state.userStore.isLoggedIn
            if(user !== null){
                alert("You are already logged in, logout to make a new account")
                this.$router.push("/")
            } else {
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
    },
}
</script>

<style>
.account {
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
</style>