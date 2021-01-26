<template>
    <div class="category-list">
        <category-list-item v-for="category of categoryList" :key="category.id" :category="category" class="topicTitle"/>
    </div>
</template>

<script>
import CategoryListItem from './CategoryListItem'

export default {
    components: {
        CategoryListItem
    },

    computed: {
        categoryList() {
            return this.$store.state.categoryStore.categories
        }
    },

    methods: {
        fetchAllTopics() {
            this.$store.dispatch("fetchAllTopics");
        }
    },

    created() {
        this.fetchAllTopics();
    }
 
}
</script>

<style>
 .category-list {
    margin: auto;
    width: 50%;
    border: 3px solid rgba(61, 61, 61, 0.733);
    padding: 10px;
    background-color: white;
 }

 .topicTitle {
     border-bottom: 3px solid rgb(61,61,61, 0.733);
 }
</style>