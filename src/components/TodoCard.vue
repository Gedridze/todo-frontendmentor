<script setup lang="ts">
import { ref } from 'vue';
import TodoCheckBox from './TodoCheckBox.vue'
const input = ref<HTMLInputElement>()
defineProps<{
	text?: string
}>()

const emit = defineEmits<{
  (e: 'submitTodo', value: string): void
}>()

function submitTodo(evt: Event) {
  evt.preventDefault();
  const inputElement = input.value as HTMLInputElement
  emit('submitTodo', inputElement.value)
  inputElement.value = ''
  inputElement.blur()
}
const isComplete = ref(false)
</script>
<template>
  <div class="bg-vl-gray w-full p-3 pl-3 pr-3 rounded-lg flex text-center">
    <template v-if="$slots.default">
    <slot />
  </template>
  <template v-else>
    <TodoCheckBox v-model="isComplete"/>
    <form @submit="submitTodo">
      <input
        type="text"
        class="ml-3 text-xs bg-vl-gray text-vd-gray-blue font-normal outline-none placeholder:text-d-gray-blue focus:placeholder:text-l-gray-blue"
        :placeholder="text"
        ref="input"
      />
    </form>

  </template>
  </div>
</template>
