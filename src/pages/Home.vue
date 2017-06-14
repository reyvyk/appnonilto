<template>
  <div>
    <table-api></table-api>
  </div>
</template>

<script>
import tableapi from './../components/apitec.vue'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    'table-api' : tableapi,
  }
}
</script>

<style>

</style>
