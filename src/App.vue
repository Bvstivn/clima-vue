<template>
  <h1 class="titulo">Buscador de clima</h1>
  <div class="contenedor">
    <Formulario @obtener-clima="obtenerClima"/>
  </div>
</template>

<script setup>
//Components
import Formulario from "./components/Formulario.vue";
//Composables
import useClima from "./composables/useClima";
//Composables
const { obtenerClima } = useClima();

</script>