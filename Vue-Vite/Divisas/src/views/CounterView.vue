<template>
    <h1>
        Counter View: {{ counterStore.counter }}
    </h1>
    <button @click="increaseBy(1)"></button>
    <button @click="increaseBy(5)"></button>
    <button @click="increaseBy(10)"></button>
</template>
<script setup lang="ts">
import { useCounterStore} from '../stores/counter'
const counterStore = useCounterStore()
const increaseBy = (value: number) => {
    counterStore.incrementBy(value)
}
</script>