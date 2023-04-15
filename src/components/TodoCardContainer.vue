<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import TodoCard from './TodoCard.vue'

export type Todo = {
  isComplete: boolean
  task: string,
  id: string
}

defineProps<{
  todos: Todo[]
}>()
const emit = defineEmits<{
  (e: 'removeTodo', value: Todo): void
}>()
</script>
<template>
  <div class="rounded-lg shadow-xl">
    <TodoCard
      class="border-b rounded-none first:rounded-t-lg border-l-gray-blue"
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :active-input="false"
      @remove-todo="(item: Todo) => emit('removeTodo', item)"
    ></TodoCard>
    <BaseCard>DEFAULT</BaseCard>
  </div>
</template>
