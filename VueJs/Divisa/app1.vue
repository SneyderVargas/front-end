<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
import { useRuntimeConfig } from './.nuxt/imports';
const config = useRuntimeConfig()
console.log(config.public.SUPABASE_KEY)
</script>
