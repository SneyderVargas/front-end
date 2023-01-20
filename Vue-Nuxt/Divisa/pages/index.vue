
<script lang="ts" setup>
import { useMainStore } from '~~/stores/mainStore';
const mainStore = useMainStore();
const setMenssage = (value: string) => {
  mainStore.setMenssage(value)
}


const config = useRuntimeConfig();
console.log(config);
</script>
<template>
  <div>

    <h1>Mensaje de store: {{ mainStore.upper }}</h1>
    <button @click="setMenssage('Nuevo Mensaje de boton')">Cambiar mensaje</button>
  </div>
</template>
