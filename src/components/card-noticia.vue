<template>
  <div>
    <figure>
      <img :src="image">
    </figure>
    <title>{{ title }}</title>
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