<template>
  <div class="topic">
    <div class="topic-click" @click="goToTopicContent">
      <div class="title">{{ topic.title }}</div>
      <div class="username">{{ topic.username }}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["topic", "categoryId",],

    methods: {
      goToTopicContent() {
        this.$router.push(`${this.categoryId}/${this.topic.id}`)
      }
    },


}
</script>