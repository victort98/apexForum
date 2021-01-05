
<template>
<div class="header">
  <a class="home" href="#">Apex Forum</a>
  <div class="header-right">
    <a class="active" href="#">Home</a>
    <a href="#">test</a>
    <a href="#">test</a>
  </div>
</div>
</template>
  
<script>

export default {
    name: 'header',
    components: {

    },
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



.header {
    overflow: hidden;
    background-color: rgb(36, 36, 36);
    padding: 15px 10px;
}

.header a {
    float: left;
    color: white;
    text-align: center;
    padding: 12px;
    margin: 2px;
    text-decoration: none;
    font-size: 18px; 
    line-height: 25px;
}

.header a.home {
    font-size: 30px;
    font-weight: bold;
}

.header a:hover {
    color: rgba(255, 255, 255, 0.466);
}

.header-right {
    float: right;
}

@media screen and (max-width: 500px) {
  .header a {
        float: none;
        display: block;
        text-align: left;
  }
  
  .header-right {
        float: none;
  }
}

</style>