<script setup lang="ts">
import { ref } from 'vue'
import TodoCard from './components/TodoCard.vue'
import TodoCardContainer, { type Todo } from './components/TodoCardContainer.vue'
const todos = ref<Todo[]>([])
function addTodo(todo: string) {
  todos.value.push({
    task: todo,
    isComplete: false,
    id: Math.random().toString()
  })
}

function removeTodo(deletedTodo: Todo) {
  console.log('removing', deletedTodo)
  const index = todos.value.findIndex(todo => todo.id === deletedTodo.id)
  todos.value.splice(index, 1)
}
</script>
<template>
  <div class="absolute flex flex-col w-screen min-h-screen bg-vl-gray -z-10">
    <img src="./assets/static/bg-mobile-light.jpg" class="h-1/6" alt="bg-mobile-light" />
  </div>
  <div class="p-5 pt-10">
    <h1 class="text-vl-gray mb-7">TODO</h1>
    <TodoCard :deletable="false" :active-checkbox="false" placeholder="Create new item..." @submit-todo="addTodo"/>
    <TodoCardContainer :todos="todos" class="mt-5" @removeTodo="removeTodo"></TodoCardContainer>
  </div>
</template>

<style scoped></style>
