<template>
  <div class="center">
    <figure>
      <img class="cards" :src="image">
    </figure>
    <h3>{{ title }}</h3>
    <p>{{ chamada }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'image',
    'title',
    'chamada'
  ]
}
</script>

<style>

  body{
    background-color: #EEEEEE;

  }
  .cards{
    height: 200px;
  }

  .center{
    margin-left: 100px;
    margin-top: 20px;
    border: solid;
    border-color: #FFFFF0;
    border-width: 10px;
    border-radius: 40px;
    display: inline-block;
    max-width: 500px;
  }  
</style>