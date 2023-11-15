<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
		<div class="container-fluid">
			<span class="navbar-brand">Restaurante</span>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
			aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<RouterLink to="/restaurante" class="nav-link active" aria-current="page">Cadastrar Restaurante</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink class="nav-link" to="/cardapio">Cadastrar Cardápios</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink class="nav-link" to="/listar">Listar Cardapio</RouterLink>
				</li>
				<li class="nav-item">
					<!--<a class="nav-link" role="button" @click="logout">Logout</a>-->
				</li>
			</ul>
		</div>
	</div>
</nav>

</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
	name: "MenuRouter"
})


</script>



<style scoped>

</style>