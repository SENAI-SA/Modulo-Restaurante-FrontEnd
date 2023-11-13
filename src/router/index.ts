import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import CadastrarRestauranteVue from '@/components/CadastrarRestaurante.vue';
import ListaCardapioVue from '@/components/ListaCardapio.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/restaurante",
      component:CadastrarRestauranteVue
    },
    {
      path:"/editarestaurante",
      component: CadastrarRestauranteVue

    },
    {
      path:"/listacardapio",
      component: ListaCardapioVue

    }
  
   

  ]
})

export default router
