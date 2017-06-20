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
import request from 'request'
import cardNoticia from './../components/card-noticia.vue'

export default {
  name: 'app',
  data () {
    return {
      noticias: []
    }
  },
  mounted () {
    request('http://127.0.0.1:3000/noticias', (error, response, body) => {
      if (error) return console.log(error), alert('erro')

      this.noticias = typeof body !== 'object'
        ? JSON.parse(body)
        : body
    });
  },
  components: {
    cardNoticia
  }
}
</script>

<style>

</style>
