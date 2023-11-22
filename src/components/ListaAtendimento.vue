<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Data e hora de entrada</th>
                <th scope="col">Cliente</th>
                <th scope="col">Placa</th>
                <th scope="col">Data e hora de saida</th>
                <th scope="col">Valor</th>
                <th scope="col">Cadastrar</th>
                <th scope="col">Deletar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="atendimento in atendimentos">
                <th scope="row">{{ atendimento.id }}</th>
                <td>{{ atendimento.dataHoraEntrada }}</td>
                <td>{{ atendimento.cliente }}</td>
                <td>{{ atendimento.placaCarro }}</td>
                <td>{{ atendimento.dataHoraSaida }}</td>
                <td>{{ atendimento.valorFinal }}</td>

                <td>
                    <button title="saída" style="background-color:#fa7c00 ;" type="button" class="btn" @click="$emit('aoSairAtendimento', atendimento.id)">
                        <i class="fa-solid fa-right-from-bracket fa-beat" style="color: #ffffff;"></i>
                    </button>
                </td>
                <td>
                    <button type="button" class="btn btn-danger" @click="$emit('aoExcluirAtendimento', atendimento.id)">
                        <i class="fa-solid fa-trash fa-beat" style="color: #ffffff;"></i>
                    </button>
                </td>
            </tr>
            
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type Atendimento from "../interfaces/Atendimento";

export default defineComponent({
    name: "ListaAtendimento",
    props: {
        atendimentos: {
            type: Array as PropType<Atendimento[]>,
            required: true
        }
    },
    emits: ["aoExcluirAtendimento","aoSairAtendimento"]
})
</script>

<style></style>