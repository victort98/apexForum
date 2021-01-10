
<template>
<div class="header-component">
  <a class="home" href="/">Apex Forum</a>
  <div class="header-right">
    <a href="/new-topic">Create topic</a>
    <a v-if="user" href="/login">Login</a>
    <a v-else href="/logout">logout</a>
  </div>
</div>
</template>
  
<script>
export default {
}

</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    color: #333;
}



.header-component {
    overflow: hidden;
    background-color: rgb(36, 36, 36);
    padding: 15px 10px;
}

.header-component a {
    float: left;
    color: white;
    text-align: center;
    padding: 12px;
    margin: 2px;
    text-decoration: none;
    font-size: 18px; 
    line-height: 25px;
}

.header-component a.home {
    font-size: 30px;
    font-weight: bold;
}

.header-component a:hover {
    color: rgba(255, 255, 255, 0.466);
}

.header-right {
    float: right;
}

@media screen and (max-width: 500px) {
  .header-component a {
        float: none;
        display: block;
        text-align: left;
  }
  
  .header-right {
        float: none;
  }
}

</style>