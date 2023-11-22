import { defineStore } from 'pinia'
import http from '../http'
import type Atendimento from '../interfaces/Atendimento';

export interface Estado {
    atendimentos : Atendimento[],
}

export const useStore = defineStore("estado", {
    state: (): Estado => ({
        atendimentos: []
    }),
    actions: {
        async carregarAtendimento() {
            const response = await http.get("/atendimento");
            this.atendimentos = response.data;
        }
    }
})