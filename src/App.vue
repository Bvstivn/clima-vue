<template>
  <h1 class="titulo">Buscador de clima</h1>
  <div class="contenedor">
    <Formulario @obtener-clima="obtenerClima"/>
    <Clima v-if="mostrarClima"/>
  </div>
</template>

<script setup>
//Components
import Formulario from "./components/Formulario.vue";
import Clima from "./components/Clima.vue";
//Composables
import useClima from "./composables/useClima";
//Composables
const { obtenerClima, clima, mostrarClima } = useClima();

</script>