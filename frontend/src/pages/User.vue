<template>
    <div class="user">
        <user-list />
    </div>
</template>

<script>
import userList from '../components/userList'
export default {

    components: {
        userList
    },

    computed: {
        userList() {
            return this.$store.state.userStore.users
        }
    },
    
    methods: {
        fetchAllUsers() {
            this.$store.dispatch("fetchAllUser");
        }
    },

    created() {
        this.fetchAllUsers();
    }
}
</script>