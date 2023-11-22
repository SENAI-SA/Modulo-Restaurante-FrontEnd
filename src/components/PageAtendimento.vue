<template>
    <div class="row justify-content-center">
        <div class="col-10">
            <h1>Atendimento</h1>
            <ListaAtendimento :atendimentos="atendimento" @ao-excluir-atendimento="excluirAtendimento" @ao-sair-atendimento="SairAtendimento"/>
            
        </div>
    </div>
    
</template>

<script lang="ts">
import http from '@/http';
import { defineComponent, computed } from 'vue';
import ListaAtendimento from './ListaAtendimento.vue';
import CadastroAtendimento from './CadastroAtendimento.vue';
import { useStore } from '@/store';

export default defineComponent({
    name: "PageAtendimento",
    methods: {
        async excluirAtendimento(id: number) {
            await http.delete("/atendimento/" + id);
            this.store.carregarAtendimento();
        }, 
        
        async SairAtendimento(id: number) {
            await http.put("/atendimento/saida/" + id);
            this.store.carregarAtendimento();
        }
        
    },
    components: {
        ListaAtendimento,
        CadastroAtendimento,
    },
    setup() {
        const store = useStore();
        store.carregarAtendimento();
        const atendimento = computed(() => store.atendimentos);
        return {
            atendimento,
            store
        }
    }
})
</script>