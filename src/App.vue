<script setup lang="ts">
import TodoCard from './components/TodoCard.vue';
</script>
<template>
    <div class="bg-vl-gray flex w-screen min-h-screen flex-col absolute -z-10">
      <img src="./assets/static/bg-mobile-light.jpg" class="h-1/6" alt="bg-mobile-light">
    </div>
  <div class="p-10">
    <h1 class="text-vl-gray">TODO</h1>
    <TodoCard/>
  </div>
</template>

<style scoped>
</style>
