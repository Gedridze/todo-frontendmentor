<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from './BaseCard.vue'
import TodoCard from './TodoCard.vue'
import { ref } from 'vue'
import { useTodosStore, type Todo } from '@/stores/todos'

const todoStore = useTodosStore()

type FilterType = 'all' | 'completed' | 'active'

function bindProps(type: FilterType) {
  return {
    onClick: () => {
      activeFilter.value = type
    },
    class: {
      'is-active': activeFilter.value === type
    }
  }
}

const filteredTodos = computed(() => {
  switch (activeFilter.value) {
    case 'completed':
      return todoStore.todos.filter(todo => todo.isComplete)
    case 'active':
      return todoStore.todos.filter(todo => !todo.isComplete)
    default:
      return todoStore.todos
  }
})
const activeFilter = ref<FilterType>('all')
</script>
<template>
  <div class="rounded-lg shadow-xl">
    <TodoCard
      class="border-b rounded-none first:rounded-t-lg border-l-gray-blue"
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      :active-input="false"
      @remove-todo="(item: Todo) => todoStore.removeTodo(item.id)"
    ></TodoCard>
    <BaseCard
      class="text-xs text-d-gray-blue"
      :class="{ 'rounded-t-none': filteredTodos.length > 0 }"
    >
      <template #header>
        <p class="pointer-events-none">{{ todoStore.todos.filter(todo => !todo.isComplete).length }} items left</p>
      </template>
      <template #content>
        <div class="hidden ml-auto text-xs font-bold cursor-pointer sm:flex">
          <div v-bind="bindProps('all')" class="mr-2 hover:text-vd-gray-blue">All</div>
          <div v-bind="bindProps('active')" class="ml-2 mr-2 hover:text-vd-gray-blue">Active</div>
          <div v-bind="bindProps('completed')" class="ml-2 hover:text-vd-gray-blue">Completed</div>
        </div>
      </template>
      <template #footer>
        <div class="ml-auto cursor-pointer hover:text-vd-gray-blue" @click="_ => todoStore.removeDone()">
          Clear completed
        </div>
      </template>
    </BaseCard>
  </div>
  <BaseCard class="mt-5">
    <template #content>
      <div class="flex m-auto text-sm font-bold cursor-pointer sm:hidden text-d-gray-blue">
        <div v-bind="bindProps('all')" class="mr-2">All</div>
        <div v-bind="bindProps('active')" class="ml-2 mr-2">Active</div>
        <div v-bind="bindProps('completed')" class="ml-2">Completed</div>
      </div>
    </template></BaseCard
  >
</template>
<style>
.is-active {
  @apply text-b-blue;
}
</style>
