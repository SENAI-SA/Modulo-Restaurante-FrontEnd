<template>
    <form @submit.prevent="salvarAtendimento">
        
        <div class="mb-3">
            <label for="email" class="form-label">Cliente</label>
            <input type="text" class="form-control" id="cliente" v-model="atendimento.cliente">
        </div>
        <div class="mb-3">
            <label for="endereco" class="form-label">Placa</label>
            <input type="text" class="form-control" id="placa_carro" v-model="atendimento.placaCarro">
        </div>
        <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
</template>

<script lang="ts">
import http from '@/http';
import type Atendimento from '@/interfaces/Atendimento';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Atendimento",
    data() {
        return {
            atendimento: {} as Atendimento
        }
    },
    methods: {
        async salvarAtendimento() {
            await http.post("/atendimento", this.atendimento);
            this.atendimento = {} as Atendimento;
            this.$emit("aoSalvarAtendimento");
        }
    },
    emits: ["aoSalvarAtendimento"]
})
</script>

<style>
</style>