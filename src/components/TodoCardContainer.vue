<script setup lang="ts">
import TodoCard from './TodoCard.vue'

export type Todo = {
  isComplete: boolean
  task: string
}

defineProps<{
  todos: Todo[]
}>()
</script>
<template>
  <div class="rounded-lg shadow-xl">
    <TodoCard
      class="rounded-none first:rounded-t-lg border-b border-l-gray-blue"
      v-for="(todo, index) in todos"
      :key="index"
      :text="todo.task"
    ></TodoCard>
    <TodoCard last:rounded-b-lg>DEFAULT</TodoCard>
  </div>
</template>
