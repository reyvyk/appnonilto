<template>
  <div>
    <form @submit.prevent="buscarNoticia">
      <span>Buscar</span>
      <input type="search" :value="busca" v-model.trim="busca">
      <button type="submit">Buscar</button>
    </form>
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
        this.mostragem = Object.assign({}, this.noticias);
        return;
      }
      const palavras = this.busca.split(' ');
      this.mostragem = this.noticias.filter(noticia => {
        for (let i in palavras) {
          if (noticia.conteudo.search(palavras[i]) >= 0) return true;
        }
        return false;
      });
      console.log(`Noticias encontradas: ${this.mostragem.length}`);
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:3000/noticias')
      .then(response => {
        this.noticias = response.data;
        this.mostragem = Object.assign({}, this.noticias);
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
