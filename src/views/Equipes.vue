<template>
  <div>
    <div class="titre-equipe">
      <div>
        <h1>Nos Équipes</h1>
      </div>
      <div>
        <button @click="ajoutEquipe">Ajouter une Équipe</button>
      </div>
    </div>
    <hr>

    <div  class="card-equipe">
      <div v-for="equipe in equipes" :key="equipe.idEquipe">
        <RouterLink :to="{name: 'details-equipe', params: {id: equipe.idEquipe}}">
          <img class="thumbnail" :src="equipe.logo" alt="logo d'équipe">
        </RouterLink>
        
          <h4 class="equipes">{{ equipe.nom }}</h4>
        
        
      </div>
    </div>

    

    <router-view></router-view>
  </div>
</template>

<script>
    import { RouterLink, RouterView } from 'vue-router'

    export default{
        components: { RouterLink },
        inject:["equipes"],

        data(){
          return{
              idEquipe: 0,
              nom: "",
              logo: "",
              joueurs: [],
          }
        },


       
        methods:{
          ajoutEquipe(){
            this.equipes
            this.$router.push({name: 'ajout'})
          },
        },
      
    }

</script>

<style>
  img.thumbnail{
    width: 200px;
    height: 200px;
  }
  h1{
    text-align: center;
  }
  .card-equipe{
    display: flex;
    justify-content: space-around;

  }
  h4.equipes{
    text-align: center;
  }
  button{
    background-color: darkcyan;
    padding: 7px;
    border-radius: 5px;
  }
  button:hover{
        background-color: rgb(19, 186, 186);
    }
  .titre-equipe{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
</style>