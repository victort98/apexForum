<template>
    <div>
        <form class="login-form" @submit.prevent="login">
            <div class="test">
                <h1 class="loginh2">Login</h1>
                <div class="login-box">
                    <div>Username</div>
                    <input class="username" type="text" v-model="username" placeholder="Username" required/>
                </div>
                <br>
                <div class="login-box">
                    <div>Password</div>
                    <input class="password" type="password" v-model="password" placeholder="Password" required/>
                </div>
                <br>
                <button>Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            username: "",
            password: "",
        }
    },

    methods: {
        async login() {
            let credentials = {
                username: this.username,
                password: this.password,
            }

            let user = await this.$store.dispatch("login", credentials);

            if(!user) {
                console.log("Something went wrong, could not login");
            } else {
                this.$router.push("/");
            }

            this.username = "";
            this.password = "";
        }
    },

    created() {
        let user = this.$store.state.userStore.isLoggedIn
        console.log(user)
        if(user){
            this.$router.push("/");
        }
    }
}
</script>

<style>
 .login-form {
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

 .loginh2 {
    margin: 0 0 30px;
    padding: 0;
    color:black;
    text-align: center;
 }
</style>