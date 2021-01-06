<template>
  <div class="home-page">
      <router-view />
  </div>
</template>

<script>

export default {
}
</script>

<style>
.home-page {
  column-gap: 10px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-top: 1rem;
}
</style>
