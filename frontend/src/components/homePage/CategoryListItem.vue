<template>
<div>
    <div class="category-list-item">
        <p class="CategoryTitle">{{ category.title }}</p>
    </div>
    <div class="topics">
        <topic-list
            v-for="topic in topics"
            :key="topic.id"
            :topic="topic"
            :categoryId="category.id"
        />
    </div>
</div>
</template>

<script>
import TopicList from "./TopicList"
export default {
    props: ['category'],

    components: {
        TopicList
    },

    computed: {
        topics() {
            return this.$store.getters["topicsByCategoryId"](this.category.id);
        }
    }
}
</script>

<style>
 .CategoryTitle {
     font-weight: bold;
     font-size: 25px;
     margin-bottom: 10px;
 }
</style>