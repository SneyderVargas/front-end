<template>
    <h1>
        Home View: {{ counterStore.counter }}
    </h1>
    <h3> Numero de cambios : {{  counterStore.numberOfChangas }}</h3>
</template>
<script setup lang="ts">
import { useCounterStore} from '../stores/counter'
const counterStore = useCounterStore()
</script>