<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


import MenuRouter from './components/MenuRouter.vue'



</script>

<template>
  <MenuRouter />
<div class="container">

  <RouterView />

</div>


</template>

<style>
html, body {

  background-image: url("assets/variedade-plana-com-deliciosa-comida-brasileira.jpg");
}
</style>
