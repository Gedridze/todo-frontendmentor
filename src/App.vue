<script setup lang="ts">
import TodoCard from './components/TodoCard.vue'
import TodoCardContainer from './components/TodoCardContainer.vue'
import { useTodosStore } from './stores/todos';
const todoStore = useTodosStore()

</script>
<template>
  <div class="absolute flex flex-col w-screen min-h-screen bg-vl-gray-blue -z-10">
    <img src="./assets/static/bg-mobile-light.jpg" class="h-1/6" alt="bg-mobile-light" />
  </div>
  <div class="p-3 ml-auto mr-auto sm:max-w-xl pt-7">
    <h1 class="mb-3 text-vl-gray sm:text-3xl sm:mb-6">TODO</h1>
    <TodoCard class="mb-5" :deletable="false" :active-checkbox="false" placeholder="Create new item..." @submit-todo="todo => todoStore.addTodo(todo)"/>
    <TodoCardContainer ></TodoCardContainer>
  </div>
</template>

<style scoped></style>
