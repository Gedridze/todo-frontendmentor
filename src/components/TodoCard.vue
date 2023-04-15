<script setup lang="ts">
import { ref } from 'vue'
import TodoCheckBox from './TodoCheckBox.vue'
import type { Todo } from '@/stores/todos'
import BaseCard from './BaseCard.vue'

const input = ref<HTMLInputElement>()
const props = withDefaults(
  defineProps<{
    todo?: Todo
    activeCheckbox?: boolean
    activeInput: boolean
    placeholder?: string,
    deletable: boolean
  }>(),
  {
    activeCheckbox: true,
    activeInput: true,
    deletable: true,
  }
)

const todoItem = ref<Todo>(props.todo ? props.todo: {
  id: Math.random().toString(),
  isComplete: false,
  task: ''
})

const emit = defineEmits<{
  (e: 'submitTodo', value: string): void
  (e: 'update:todo', value: Todo): void,
  (e: 'removeTodo', todo: Todo): void
}>()

function submitTodo(evt: Event) {
  evt.preventDefault()
  const inputElement = input.value as HTMLInputElement
  emit('submitTodo', inputElement.value)
  inputElement.value = ''
  inputElement.blur()
}
</script>
<template>
  <BaseCard>
    <template #header>
      <TodoCheckBox :disabled="!activeCheckbox" v-model="todoItem.isComplete" />
    </template>
    <template #content>
      <div class="flex w-full pr-3" :class="{'hoverable cursor-pointer': !activeInput}" @click="emit('removeTodo', todoItem)">
      <form @submit="submitTodo" class="w-full" >
        <input
          type="text"
          class="w-full pl-3 text-xs font-normal outline-none decoration-d-gray-blue bg-vl-gray dark:bg-vd-destat-blue placeholder:text-d-gray-blue focus:placeholder:text-l-gray-blue"
          :class="{ 'line-through text-l-gray-blue dark:text-vd-gray-blue': todoItem.isComplete, 'text-vd-gray-blue dark:text-l-gray-blue': !todoItem.isComplete, 'pointer-events-none': !activeInput }"
          :placeholder="placeholder"
          ref="input"
          v-model="todoItem.task"
        />
      </form>
    </div>
  </template>
  <template #footer>
    <img v-if="deletable" @click="emit('removeTodo', todoItem)" class="h-full mt-auto mb-auto ml-auto cursor-pointer w-fit" src="src/assets/static/icon-cross.svg">
    </template>
  </BaseCard>
</template>
<style scoped>


img {
  display: none;
}
.hoverable:hover + img {
  display: block;
}
</style>
