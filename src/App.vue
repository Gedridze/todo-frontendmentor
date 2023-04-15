<script setup lang="ts">
import { ref } from 'vue';
import TodoCard from './components/TodoCard.vue'
import TodoCardContainer from './components/TodoCardContainer.vue'
import { useTodosStore } from './stores/todos';
const todoStore = useTodosStore()
const darkMode = ref(false)

function toggleDarkMode() {
  darkMode.value = !darkMode.value
  setDarkModeClasses(darkMode.value)
}

function setDarkModeClasses(darkMode: boolean) {
  if (darkMode)
    document.body.classList.add('dark')
  else {
    document.body.classList.remove('dark')
  }
}

setDarkModeClasses(darkMode.value)

</script>
<template>
  <div>
    <div class="absolute flex flex-col w-screen min-h-screen bg-vl-gray dark:bg-vd-blue -z-10">
      <img class="h-1/6 bg-image" alt="bg-mobile-light" />
    </div>
    <div class="p-3 ml-auto mr-auto sm:max-w-xl pt-7 sm:pt-12">
      <div class="flex justify-between mb-3 sm:mb-6">
        <h1 class="text-vl-gray sm:text-3xl">TODO</h1>
        <img v-if="darkMode" src="/src/assets/static/icon-sun.svg" alt="mode-icon" class="h-full w-fit" @click="toggleDarkMode">
        <img v-else src="/src/assets/static/icon-moon.svg" alt="mode-icon" class="h-full w-fit" @click="toggleDarkMode">
      </div>
      <TodoCard class="mb-5" :deletable="false" :active-checkbox="false" placeholder="Create new item..." @submit-todo="todo => todoStore.addTodo(todo)"/>
      <TodoCardContainer ></TodoCardContainer>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  content: url('/src/assets/static/bg-mobile-light.jpg');
}

.dark .bg-image {
  content: url('/src/assets/static/bg-mobile-dark.jpg');
}

@media (min-width: 640px) {
    .bg-image {
      content: url('/src/assets/static/bg-desktop-light.jpg');
    }
    .dark .bg-image {
  content: url('/src/assets/static/bg-desktop-dark.jpg');
}
}
</style>
