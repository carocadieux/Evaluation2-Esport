<template>
  <header class="container-header">
    <img src="../assets/game-console-6603120_1280.jpg" alt="console gaming">
    <div class="bottom-right">
       <h1> Joue la Game</h1>
    </div>
  </header>
  <div class="container">
    <div class="card-games" v-for="game in games">
        <h2>{{ game.nomJeu }}</h2>
        <p>{{ game.description }}</p>
    </div>
  </div>
  <router-view  @ajouterNouvelleEquipe="ajouterNouvelleEquipe"></router-view>
  
</template>

<script>
    
   
    export default{
        emits: [],
       data(){
            return{
               games:[{
                    "nomJeu":"League of Legends ",
                    "description":"lorem ipsum duis mollit adipisicing mollit. Sint esse laborum culpa excepteur. Consequat ipsum excepteur velit dolor tempor mollit non culpa mollit consectetur mollit minim laboris voluptate."
                },
                {
                    "nomJeu":"Fortnite",
                    "description":"lorem ipsum duis mollit adipisicing mollit. Sint esse laborum culpa excepteur. Consequat ipsum excepteur velit dolor tempor mollit non culpa mollit consectetur mollit minim laboris voluptate."
                },
                {
                    "nomJeu":"Counter Strike",
                    "description":"lorem ipsum duis mollit adipisicing mollit. Sint esse laborum culpa excepteur. Consequat ipsum excepteur velit dolor tempor mollit non culpa mollit consectetur mollit minim laboris voluptate."
                },
                {
                    "nomJeu":"Valorant",
                    "description":"lorem ipsum duis mollit adipisicing mollit. Sint esse laborum culpa excepteur. Consequat ipsum excepteur velit dolor tempor mollit non culpa mollit consectetur mollit minim laboris voluptate."
                }

               ],
               equipes: []
            }
       },

        methods: {
            ajouterNouvelleEquipe(nouvelleEquipe) {
        
            this.equipes.push(nouvelleEquipe);
            },

            
        }

    }

</script>

<style>
    .container-header {
        position: relative;
        text-align: center;
        color: white;
        font-size:40px;
    }
    .bottom-right {
        position: absolute;
        bottom: 8px;
        right: 16px;
    }
    img{
        max-height: 350px;
        width: 100%;
        object-fit: cover;
    }
    .container{
        margin: 100px 0 100px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 1rem;
       
    }
    .card-games{
        background-color: rgb(0, 0, 118);
        padding: 10px;
        color: white;
        
    }

</style>