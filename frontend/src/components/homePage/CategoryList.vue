<template>
    <div class="category-list">
        <category-list-item v-for="category of categoryList" :key="category.id" :category="category" />
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
    }
 
}
</script>