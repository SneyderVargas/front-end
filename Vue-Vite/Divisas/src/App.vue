<script setup lang="ts">
</script>

<template>
  <div>
    <router-link to="/">Home</router-link>
    {{ ' ' }}
    <router-link to="/Counter">Counter</router-link>
    <router-view></router-view>
  </div>
</template>
