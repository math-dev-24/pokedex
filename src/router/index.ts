import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import('../views/PokedexView.vue')
    },
    {
      path: "/documentation",
      name: "documentation",
      component: () => import("../views/DocumentationView.vue")
    },
    {
      path: "/:wild(.*)",
      name: "404",
      component: () => import('../views/Erreur404View.vue')
    }
  ]
})

export default router
