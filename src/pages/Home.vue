<template>
  <div>
    <template v-if="noticias">
      <h1>Noticias</h1>
      <card-noticia v-for="noticia in noticias" :image="noticia.Image" :title="noticia.Title" :chamada="noticia.Chamada"></card-noticia>
    </template>
    <h1 v-else>Sem Noticias</h1>
  </div>
</template>

<script>
import axios from 'axios'
import cardNoticia from './../components/card-noticia.vue'

export default {
  name: 'app',
  data () {
    return {
      noticias: []
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:3000/noticias')
      .then(response => {
        this.noticia = response.data;
      })
      .catch(err => {
        console.log(err);
        alert('deu ruim!');
      })
  },
  components: {
    cardNoticia
  }
}
</script>

<style>

</style>
