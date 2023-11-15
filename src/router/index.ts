import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import http from "@/http";
import CadastrarRestauranteVue from '@/components/CadastrarRestaurante.vue';
import CadastrarCardapioVue from '@/components/CadastrarCardapio.vue';
import ListarCardapioVue from '@/components/ListarCardapio.vue';


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
      path:"/cardapio",
      component:CadastrarCardapioVue
    },
    {
      path:"/editacardapio",
      component: CadastrarCardapioVue

    },
    {
      path:"/listar",
      component: ListarCardapioVue

    }
    
    

  ]
})


export default router
