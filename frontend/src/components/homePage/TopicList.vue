<template>
  <div class="topic">
    <router-link class="topic-name bold underline" :to="`${this.categoryId}/${this.topic.id}`">{{ topic.title }}</router-link>
  </div>
</template>

<script>
export default {
    props: ["topic", "categoryId"]

}
</script>