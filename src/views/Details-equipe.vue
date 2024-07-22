<template>
    <div>
        <h1> Équipe {{ $route.params.id }}</h1>
    </div>
    <hr>
   
   
   <div class="card-detail-equipe">
    <div>
       <img class="thumbnail" :src="logo" alt="logo d'équipe">
       <h4 class="equipes">{{ nom }}</h4>
    </div>
    <div class="joueurs">
       <h4>{{ joueurs[0] }}</h4>
       <h4>{{ joueurs[1] }}</h4>
       <h4>{{ joueurs[2] }}</h4>
       <h4>{{ joueurs[3] }}</h4>
       <h4>{{ joueurs[4] }}</h4>
    </div>  
   </div>

</template>

<script>
    export default{
        inject:["equipes"],
        data(){
            return{
                idEquipe: this.$route.params.id,
                nom: "",
                logo: "",
                joueurs: [],
            }
        },
        mounted(){
            for(let i=0; i<this.equipes.length; i++){
                if(this.equipes[i].idEquipe == this.idEquipe){
                    this.nom= this.equipes[i].nom
                    this.logo= this.equipes[i].logo
                    this.joueurs= this.equipes[i].joueurs
                }
            }
        },
        
        
    }

</script>

<style>
    .card-detail-equipe{
        display: flex;
        align-items: center;
    }
    .joueurs{
        display: flex;
        padding: 15px;
        
    }
    .thumbnail{
        margin: 20px;
    }
    .joueurs h4{
        padding: 10px;
    }


</style>