import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import http from "@/http";
import CadastrarRestauranteVue from '@/components/CadastrarRestaurante.vue';


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

    }
    
    

  ]
})

export default router
