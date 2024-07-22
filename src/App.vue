<script>
  import {  RouterView } from 'vue-router'
  import Navbar from '../src/components/Navbar.vue'
  import Ajout from './views/Ajout.vue';
  import { computed } from 'vue'


  export default{
    
    components:{
    Navbar,
    Ajout
    },

    data(){
       return{
        equipes:[{
          idEquipe: 1,
          nom: "Les Ninjas",
          logo: "https://img.freepik.com/free-vector/detailed-ninja-logo-template_23-2149008973.jpg?w=826&t=st=1702158081~exp=1702158681~hmac=ea9e0a8463e511628b72317d3039c6d9729eec15a3b385b7ae72737a8b9d680d",
          joueurs: ["Sylvain Lachance",
                    "François Lemoyne",
                    "Max Desrosiers",
                    "Didier Boudreau",
                    "Maurice Tremblay"
                   ]
          },
          {
          idEquipe: 2,
          nom: "Les Masters",
          logo: "https://img.freepik.com/free-vector/detailed-esports-gaming-logo_79603-1792.jpg?size=626&ext=jpg&ga=GA1.1.1635771742.1702136249&semt=ais",
          joueurs: ["Sylvain Lachance",
                    "François Lemoyne",
                    "Max Desrosiers",
                    "Didier Boudreau",
                    "Maurice Tremblay"
                  ]
          },
          {
          idEquipe: 3,
          nom: "Les Gamers",
          logo: "https://img.freepik.com/free-vector/gradient-gaming-logo-template_52683-132733.jpg?size=626&ext=jpg&ga=GA1.1.1635771742.1702136249&semt=ais",
          joueurs: ["Sylvain Lachance",
                    "François Lemoyne",
                    "Max Desrosiers",
                    "Didier Boudreau",
                    "Maurice Tremblay"
                  ]
          }
        ]
       }
    },

    provide(){
      return{
        equipes : computed(()=>this.equipes),
        ajouterNouvelleEquipe: this.ajouterNouvelleEquipe
      };
    },

  
  

    methods: {
      ajouterNouvelleEquipe(nouvelleEquipe) {
        //console.log('Nouvelle équipe ajoutée :', nouvelleEquipe);
        this.equipes.push(nouvelleEquipe);
        
      }
    }


   
  }

</script>

<template>
  <Navbar></Navbar>
  <router-view></router-view>
  
</template>

<style scoped>

</style>
