<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from './BaseCard.vue'
import TodoCard from './TodoCard.vue'
import { ref } from 'vue'

export type Todo = {
  isComplete: boolean
  task: string,
  id: string
}

type FilterType = 'all' | 'completed' | 'active'

const props = defineProps<{
  todos: Todo[]
}>()
const emit = defineEmits<{
  (e: 'removeTodo', value: Todo): void
}>()

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
      return props.todos.filter(item => item.isComplete)
    case 'active':
      return props.todos.filter(item => !item.isComplete)
    default:
      return props.todos
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
      @remove-todo="(item: Todo) => emit('removeTodo', item)"
    ></TodoCard>
    <BaseCard class="text-xs rounded-t-none text-d-gray-blue">
    <template #header>
      <p>
        {{ todos.length }} items left
      </p>
    </template>
    <template #content>
      <div class="hidden sm:block">
        <div v-bind="bindProps('all')">All</div>
        <div v-bind="bindProps('active')">Active</div>
        <div v-bind="bindProps('completed')">Completed</div>
      </div>
    </template>
    <template #footer>
      <div>
        Clear completed
      </div>
    </template>
    </BaseCard>
  </div>
</template>
