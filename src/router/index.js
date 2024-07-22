import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Equipes from '../views/Equipes.vue'
import Erreur from '../views/Erreur.vue'
import DetailsEquipe from '../views/Details-equipe.vue'
import Ajout from '../views/Ajout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/equipes',
      name: 'equipes',
      component: Equipes 
    },
    {
      path: '/equipes/details-equipe/:id',
      name: 'details-equipe',
      component: DetailsEquipe 
    },
    {
      path: '/equipes/ajout',
      name: 'ajout',
      component: Ajout
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'erreur',
      component: Erreur 
    }
    
  ]
})

export default router