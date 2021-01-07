<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
    name: 'app',
    methods: {
        async fetchAllCategories() {
            this.$store.dispatch("fetchAllCategories");
        },
        async fetchCurrentUser() {
            this.$store.dispatch("fetchCurrentUser");
        },
    },
    components: {
        Header,
    },

    created() {
        this.fetchAllCategories();
        this.fetchCurrentUser();
    }
}
</script>

<style>

</style>