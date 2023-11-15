import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '../http'
import type Cardapio from '@/interfaces/Cardapio'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export interface Estado {
  cardapios : Cardapio[],
}

export const useStore = defineStore("estado", {
  state: (): Estado => ({
      cardapios: []
  }),
  actions: {
      async carregarCardapio() {
          const response = await http.get("/cardapio");
          this.cardapios = response.data;
      }
  }
})
