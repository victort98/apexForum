<template>
  <div class="topic">
      <div class="title">{{ topic.title }}</div>
      <div class="content">{{ topic.content }}</div>
      <div class="username">{{ topic.username }}</div>
  </div>
</template>

<script>
export default {
    props: ["topic"],

}
</script>