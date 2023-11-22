<template>
	<form @submit.prevent="salvarRestaurante">
		<div class="d-flex">
			<div class="card" style="background-color: brown;">
				<div class="card-body">
					<div class="restaurante">
						<h3>Restaurante</h3>
						<div class="row g-3">
							<div class="col-md-6">
								<label for="text" class="form-label">Nome Estabelecimento:</label>
								<input type="text" class="form-control" id="text" v-model="restaurante.nomeEstabelecimento">
							</div>
							<div class="col-md-6">
								<label for="text" class="form-label">Responsável:</label>
								<input type="text" class="form-control" id="text" v-model="restaurante.responsavel">
							</div>
							<div class="col-12">
								<label for="text" class="form-label">CNPJ:</label>
								<input type="text" class="form-control" id="text" v-model="restaurante.cnpj"
									placeholder="00.000.000/0001-00">
							</div>
							<div class="col-12">
								<label for="text" class="form-label">Contato:</label>
								<input type="text" class="form-control" id="text" v-model="restaurante.contato">
							</div>
							<div class="col-md-6">
								<label for="inputCity" class="form-label">Especialidade</label>
								<input type="text" class="form-control" id="inputCity" v-model="restaurante.especialidade">
							</div>
							<div class="col-12">
								<button type="submit" class="btn btn-primary">{{ descricaoBotao }}</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card" style="background-color: brown;">
				<div class="card-body">
					<div class="endereco">
						<h3>Endereço</h3>
						<div class="row g-3">
							<div class="col-md-4">
								<label for="inputState" class="form-label">Estado</label>
								<select id="inputState" v-model="restaurante.endereco.estado" class="form-select">
									<option value="AC">Acre</option>
									<option value="AL">Alagoas</option>
									<option value="AP">Amapá</option>
									<option value="AM">Amazonas</option>
									<option value="BA">Bahia</option>
									<option value="CE">Ceará</option>
									<option value="DF">Distrito Federal</option>
									<option value="ES">Espírito Santo</option>
									<option value="GO">Goiás</option>
									<option value="MA">Maranhão</option>
									<option value="MT">Mato Grosso</option>
									<option value="MS">Mato Grosso do Sul</option>
									<option value="MG">Minas Gerais</option>
									<option value="PA">Pará</option>
									<option value="PB">Paraíba</option>
									<option value="PR">Paraná</option>
									<option value="PE">Pernambuco</option>
									<option value="PI">Piauí</option>
									<option value="RJ">Rio de Janeiro</option>
									<option value="RN">Rio Grande do Norte</option>
									<option value="RS">Rio Grande do Sul</option>
									<option value="RO">Rondônia</option>
									<option value="RR">Roraima</option>
									<option value="SC">Santa Catarina</option>
									<option value="SP">São Paulo</option>
									<option value="SE">Sergipe</option>
									<option value="TO">Tocantins</option>
									<option value="EX">Estrangeiro</option>
								</select>
							</div>
							<div class="col-md-6">
								<label for="text" class="form-label">Cidade</label>
								<input type="text" class="form-control" id="text" v-model="restaurante.endereco.cidade">
							</div>
							<div class="col-12">
								<label for="inputAddress" class="form-label">Rua</label>
								<input type="text" class="form-control" id="inputAddress" v-model="restaurante.endereco.rua" placeholder="1234 Main St">
							</div>
							<div class="col-12">
								<label for="inputAddress2" class="form-label">Bairro</label>
								<input type="text" class="form-control" id="inputAddress2" v-model="restaurante.endereco.bairro"
									placeholder="Rua Altamiro Guimarães">
							</div>
							<div class="col-md-6">
								<label for="inputCity" class="form-label">Numero</label>
								<input type="text" class="form-control" id="inputCity" v-model="restaurante.endereco.numero">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import http from '@/http';
import type Restaurante from '@/interfaces/Restaurante';
import type Endereco from '@/interfaces/Endereco';

export default defineComponent({
	name: "Restaurante",
	data() {
		return {
			restaurante: { endereco:{} as Endereco } as Restaurante,
			
		}
	},
	methods: {
		async cadastrarRestaurante() {
			await http.post("/restaurante", {restauranteDTO: this.restaurante});
			this.$emit("aoSalvarRestaurante");
		},
		async alterandoRestaurante() {
			await http.put("/restaurante", this.restaurante)
			this.$emit("aoAlterarRestaurante");
		},
		salvarRestaurante() {
			if (this.$route.path == "/editarestaurante") {
				this.alterandoRestaurante()
			} else {
				this.cadastrarRestaurante()
			}
		}

	},
	emits: ["aoSalvarRestaurante", "aoAlterarRestaurante"],
	computed: {
		descricaoBotao() {
			if (this.$route.path == "/editarestaurante") {
				return "Alterar Restaurante"
			} else {
				return "Cadastrar"
			}
		}
	}
})


</script>

<style scoped>
.card {
	border-radius: 0%;
}
</style>