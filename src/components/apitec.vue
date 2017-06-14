<template>
<div>
  <div>
    <input type="text" name="">
    <input type="submit" value="Buscar">
  </div>
  
  <div>
    
    <ul>
      
      <li v-for="page in pages">
        <div>
          <td><h1><a href="#"> {{ page.titulo }}</a></h1></td>
        </div>
        <div>
          <td><h2> {{ page.conteudo }} </h2></td>
        </div>
      </li>
    </ul>
    
  </div>
  <div>
    
  </div>

</div>
</template>

<script>
// let MongoClient = require('mongodb').MongoClient;
export default{
  name: "apitec",
  data() {
    return {
      pages: [{
        link: "www.google.com.br",
        titulo: "Titulo da Pagina",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti inventore ipsa libero, tenetur magni voluptates tempora repellat eum vel dolore quos quibusdam magnam perspiciatis suscipit iure tempore ad vitae quaerat.",
      },{
        link: "www.google.com.br",
        titulo: "Titulo da Pagina",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti inventore ipsa libero, tenetur magni voluptates tempora repellat eum vel dolore quos quibusdam magnam perspiciatis suscipit iure tempore ad vitae quaerat.",
      }],
      url: "mongodb://localhost:27017/crawler",
    }
  },

  methods: {

  },
  created(){
    
  }
}
</script>