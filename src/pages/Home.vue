<template>
  <div>
    <span>Buscar</span>
    <input type="search" :value="busca" v-model.trim="busca">
    <button type="button" @click="buscarNoticia">Buscar</button>
    <template v-if="noticias">
      <h1>Noticias</h1>
      <card-noticia v-for="noticia in mostragem"
        :image="noticia.Image"
        :title="noticia.Title"
        :chamada="noticia.Chamada">
      </card-noticia>
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
      busca: '',
      noticias: [],
      mostragem: []
    }
  },
  methods: {
    buscarNoticia () {
      if (this.busca.length === 0) {
        return this.mostragem = Object.assign({}, this.noticias);
      }
      const palavras = this.busca.split(' ');
      return this.mostragem = this.noticias.filter(noticia => {
        for (palavra in palavras) {
          if (noticia.Conteudo.search(palavra) >= 0) return true
        }
        return false;
      });
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:3000/noticias')
      .then(response => {
        this.mostragem = this.noticias = response.data;
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
