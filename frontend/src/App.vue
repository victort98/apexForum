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

    },
    components: {
        Header,
    },
}
</script>

<style>

</style>