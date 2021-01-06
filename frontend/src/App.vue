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
    },
    components: {
        Header,
    },

    created() {
        this.fetchAllCategories();
    }
}
</script>

<style>

</style>