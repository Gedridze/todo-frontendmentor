<script setup lang="ts">
import { ref } from 'vue';
import TodoCard from './components/TodoCard.vue';
import TodoCardContainer, { type Todo } from './components/TodoCardContainer.vue';
const todos = ref<Todo[]>([])

function addTodo(todo: string) {
  todos.value.push({
    task: todo,
  isComplete: false})
}
</script>
<template>
    <div class="bg-vl-gray flex w-screen min-h-screen flex-col absolute -z-10">
      <img src="./assets/static/bg-mobile-light.jpg" class="h-1/6" alt="bg-mobile-light">
    </div>
  <div class="p-5 pt-10">
    <h1 class="text-vl-gray mb-7">TODO</h1>
    <TodoCard text="Create new item..." @submit-todo="addTodo"/>
    <TodoCardContainer :todos="todos" class="mt-5"></TodoCardContainer>
  </div>

</template>

<style scoped>
</style>
