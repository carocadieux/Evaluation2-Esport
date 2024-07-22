<template>
    <div class="container">
        <form @submit="valider">

            <p class="form-valide" v-if="formvalide">Formulaire valide</p>

            <div class="info-equipe">
                <h2>Informations de l'équipe</h2>
                <hr>

                <div class="groupe">
                    <label for="id équipe">Entrez l'id de l'équipe</label><br>
                    <input type="number" id="id équipe" v-model.trim="idEquipe">
                    <p v-if="erreurs.idEquipe">Veuillez remplir ce champ</p>
                </div>
                <div class="groupe">
                    <label for="nom équipe">Entrez le nom de l'équipe</label><br>
                    <input type="text" id="nom équipe" v-model.trim="nom">
                    <p v-if="erreurs.nom">Veuillez remplir ce champ</p>
                </div>
                <div class="groupe">
                    <label for="logo">Entrez le logo de l'équipe</label><br>
                    <input type="text" id="logo" v-model.trim="logo">
                    <p v-if="erreurs.logo">Veuillez remplir ce champ</p>
                </div>

                <div class="bouton">
                    <button   type="submit">Valider</button>
                </div>
            </div>
            
            <div class="liste-joueurs">
                <h2>Liste des joueurs</h2>
                <hr>
                <div class="groupe">
                    <label for="nom joueur1">Joueur 1</label><br>
                    <input type="text" id="nom joueur1" v-model.trim="joueurs[0]" placeholder="Prénom et Nom du joueur1">
                    <div v-for="(erreur, index) in erreurs.joueurs" :key="index">
                        <p v-if="erreur">Veuillez remplir ce champ</p>
                    </div>
                </div>
                <div class="groupe">
                    <label for="nom joueur2">Joueur 2</label><br>
                    <input type="text" id="nom joueur2" v-model.trim="joueurs[1]" placeholder="Prénom et Nom du joueur2">
                    <div v-for="(erreur, index) in erreurs.joueurs" :key="index">
                        <p v-if="erreur">Veuillez remplir ce champ</p>
                    </div>
                </div>
                <div class="groupe">
                    <label for="nom joueur3">Joueur 3</label><br>
                    <input type="text" id="nom joueur3" v-model.trim="joueurs[2]" placeholder="Prénom et Nom du joueur3">
                    <div v-for="(erreur, index) in erreurs.joueurs" :key="index">
                        <p v-if="erreur">Veuillez remplir ce champ</p>
                    </div>
                </div>
                <div class="groupe">
                    <label for="nom joueur4">Joueur 4</label><br>
                    <input type="text" id="nom joueur4" v-model.trim="joueurs[3]" placeholder="Prénom et Nom du joueur4">
                    <div v-for="(erreur, index) in erreurs.joueurs" :key="index">
                        <p v-if="erreur">Veuillez remplir ce champ</p>
                    </div>
                </div>
                <div class="groupe">
                    <label for="nom joueur5">Joueur 5</label><br>
                    <input type="text" id="nom joueur5" v-model.trim="joueurs[4]" placeholder="Prénom et Nom du joueur5">
                    <div v-for="(erreur, index) in erreurs.joueurs" :key="index">
                        <p v-if="erreur">Veuillez remplir ce champ</p>
                    </div>
                </div>

            </div>
            
            

        </form>
    </div>
</template>

<script>
    export default{
        inject:["equipes", "ajouterNouvelleEquipe"],
        

        data(){
            return{
                idEquipe: 0,
                nom: "",
                logo: "",
                joueurs: [""],
                erreurs:{
                    idEquipe:false,
                    nom:false,
                    logo:false,
                    joueurs:[false, false, false, false, false]
                },
                formvalide:false
            }
            
        },

        // created() {
        //     console.log("Le composant Ajout est créé.");
        // },
        // mounted() {
        //     console.log("Le composant Ajout est monté.");
        // },

        methods:{
            valider(e){
                e.preventDefault()
                //console.log("Validation du formulaire...");
                this.resetErreurs()

                let valide = true

                if(this.idEquipe === 0)
                {
                    this.erreurs.idEquipe = true
                    valide = false
                }

                if(this.nom === "")
                {
                    this.erreurs.nom = true
                    valide = false
                }

                if(this.logo === "")
                {
                    this.erreurs.logo = true
                    valide = false
                }

                if(this.joueurs[0] === "")
                {
                    this.erreurs.joueurs[0] = true
                    valide = false
                }

                for (let i = 0; i < this.joueurs.length; i++){

                    if(this.joueurs[i] === "")
                    {
                    this.erreurs.joueurs[i] = true
                    valide = false
                    }
                }
                

               

                this.formvalide = valide
                if (valide) {
                    //console.log("Émission de l'événement ajouterNouvelleEquipe...");
                    this.ajouterNouvelleEquipe({ 
                        idEquipe: this.idEquipe, 
                        nom: this.nom, 
                        logo: this.logo, 
                        joueurs: this.joueurs 
                    });
                }
                //console.log("Fin de la validation.");
            },
            resetErreurs(){
                this.erreurs.idEquipe = false;
                this.erreurs.nom = false;
                this.erreurs.logo = false;
                this.erreurs.joueurs.fill(false);
            },

            


        }

    }

</script>

<style>
    .groupe p{
        margin: 0;
        color: red;
    }

    form{
        display: flex;
    }
    .info-equipe{
        
        background-color: rgb(128, 223, 223);
        padding: 20px;
    }
    .liste-joueurs{
        
        background-color: rgb(128, 223, 223);
        padding: 20px;
    }
    .bouton{
        margin-top: 10px;
    }
    
    
</style>