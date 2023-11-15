<template>
    <div class="row justify-content-center">
        <div class="col-10">
            <h1>Cardapio</h1>
            <ListarCardapio :cardapios="cardapio" @ao-excluir-cardapio="excluirCardapio"/>
           
        </div>
    </div>
   
</template>




<script lang="ts">
import http from '@/http';
import { defineComponent, computed } from 'vue';
import ListarCardapio from './ListarCardapio.vue';
import CadastrarRestaurante from './CadastrarRestaurante.vue';
import { useStore } from '@/stores/counter';



export default defineComponent({
    name: "PageInicial",
    methods: {
        async excluirCardapio(idcardapio: number) {
            await http.delete("/cardapio/" + idcardapio);
            this.store.carregarCardapio();
        },
       
    },
    components: {
    ListarCardapio,
    CadastrarRestaurante,
},
    setup() {
        const store = useStore();
        store.carregarCardapio();
        const cardapio = computed(() => store.cardapios);
        return {
            cardapio,
            store
        }
    }
})
</script>
