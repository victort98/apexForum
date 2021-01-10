<template>
    <div>
        <form class="login-form" @submit.prevent="login">
            <div>
                <input type="text" v-model="username" placeholder="Username"/>
                <input type="password" v-model="password" placeholder="Password"/>
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
}
</script>

<style>

</style>